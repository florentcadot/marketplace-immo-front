import React, { Fragment, useEffect, useState } from 'react'
import { H1 } from 'adapter/primary/view/atom/h1.atom'
import { Tab } from '@headlessui/react'
import { Divider } from 'adapter/primary/view/atom/divider.atom'
import { useDispatch, useSelector } from 'react-redux'
import { getOffers } from 'core/use-case/offer/get-offers.use-case'
import { Button } from 'adapter/primary/view/atom/button.atom'
import { AppState } from 'store'
import { OfferState } from 'store/offer/offer.types'
import { OfferSearchForm } from 'adapter/primary/view/organism/offer-search-form.organism'
import { CustomerNeedSearchForm } from 'adapter/primary/view/organism/customer-need-search-form.organism'
import { CustomerNeedState } from 'store/customerNeed/customer-need.types'
import { getCustomerNeeds } from 'core/use-case/customer-need/get-customer-needs.use-case'
import { Offer } from 'core/domain/offer/offer'
import { Modal } from 'adapter/primary/view/atom/modal.atom'
import { getUserByOffer } from 'core/use-case/user/get-user-by-offer.use-case'
import { UserState } from 'store/user/user.types'
import { InputText } from 'adapter/primary/view/atom/input-text.atom'
import { CustomerNeed } from 'core/domain/customer-need/customer-need'
import { getUserProfile } from 'core/use-case/user/get-user-profile.use-case'
import { useForm } from 'react-hook-form'
import { EMAIL_REGEX } from 'adapter/secondary/service/email.service'
import { grantRole } from 'core/use-case/user/grant-role.use-case'
import { UserRole } from 'core/domain/user/user'

export const Admin = () => {
	const dispatch = useDispatch()
	const offerState = useSelector<AppState, OfferState>((state) => state.offer)
	const customerNeedState = useSelector<AppState, CustomerNeedState>((state) => state.customerNeed)
	const userState = useSelector<AppState, UserState>((state) => state.user)
	const [openOfferModal, setOpenOfferModal] = useState(false)
	const { register, errors, control, reset, getValues } = useForm<{ownerEmail: string, adminEmail: string }>(
		{
			defaultValues: {
				ownerEmail: '',
				adminEmail: '',
			},
		}
	)

	const grantAdminRole = () => {
		dispatch(grantRole(getValues().adminEmail, UserRole.ADMIN))
	}

	const grantOwnerRole = () => {
		dispatch(grantRole(getValues().ownerEmail, UserRole.OWNER))
	}

	const openUserModalByOffer = (offer: Offer) => {
		dispatch(getUserByOffer(offer.id))
		setOpenOfferModal(true)
	}

	const openUserModalByCustomerNeed = (customerNeed: CustomerNeed) => {
		if(customerNeed.userId) {
			dispatch(getUserProfile(customerNeed.userId))
			setOpenOfferModal(true)
		}
	}

	useEffect(() => {
		dispatch(getOffers({}))
		dispatch(getCustomerNeeds({}))
	}, [])

	return 	(
		<div>
			<div className={'py-12 px-visitor'}  style={{ height: `${window.innerHeight - 168}px` }}>

				<H1>Admin panel</H1>

				<Divider/>

				<div className={'mt-6'}>
					<div className={'mt-4'}>
						<Tab.Group>
							<Tab.List className={'flex'}>
								<Tab as={Fragment}>
									{({ selected }) => (
										<button
											className={`w-1/4 text-left border border-b-0 ${selected ? 'shadow-md' : 'bg-gray-100'} p-3`}
										>
											Recherche par offre des propriétaires
										</button>
									)}
								</Tab>
								<Tab as={Fragment}>
									{({ selected }) => (
										<button
											className={`w-1/4 text-left border border-b-0 border-l-0 ${selected ? 'shadow-md': 'bg-gray-100'} p-3`}
										>
											Recherche par besoins clients
										</button>
									)}
								</Tab>
								<Tab as={Fragment}>
									{({ selected }) => (
										<button
											className={`w-1/4 text-left border border-b-0 border-l-0 ${selected ? 'shadow-md': 'bg-gray-100'} p-3`}
										>
											Gestion des rôles
										</button>
									)}
								</Tab>
							</Tab.List>
							<Tab.Panels>
								<Tab.Panel className={'border-t py-6'}>

									<OfferSearchForm/>

									<div className={'py-4 overflow-y-auto'}  style={{ maxHeight: `${window.innerHeight - 550}px` }}>
										{
											offerState.offers.get.data.map((offer, index) => (
												<div key={offer.id} className={'rounded-md p-2'}>

													{index === 0 && <div className={'pb-4'}><Divider/></div>}

													<div className={'flex items-center py-4'}>

														<div className={'w-1/12 px-2'}>
															<div>{offer.country}</div>
														</div>

														<div className={'w-1/12 px-2'}>
															<div>{offer.region}</div>
														</div>

														<div className={'w-1/12 px-2'}>
															<div>{offer.city}</div>
														</div>

														<div className={'w-1/12 px-2'}>
															<div>{offer.type[0].toUpperCase() + offer.type.substring(1)}</div>
														</div>

														<div className={'w-1/12 px-2'}>
															<div>Du {offer.startDate}</div>
															<div>au {offer.endDate}</div>
														</div>

														<div className={'w-1/12 px-2'}>
															<div>{offer.price} €</div>
														</div>

														<div className={'w-1/12 px-2'}>
															<div>{offer.area} m²</div>
														</div>

														<div className={'w-1/12 px-2'}>
															<div>{offer.quantity} lots</div>
														</div>

														<div className={'w-1/12 px-2'}>{offer.title}</div>

														<div className={'w-1/12 px-2 break-words'}>
															{
																offer.description.length > 10 ?
																	offer.description.substring(0,10) + '...' :
																	offer.description
															}
														</div>


														<div className={'w-2/12 flex justify-end'}>
															<Button onClick={() => openUserModalByOffer(offer)}>
																Voir utilisateur
															</Button>
														</div>
													</div>

													<Divider/>
												</div>
											))
										}
									</div>
								</Tab.Panel>

								<Tab.Panel className={'border-t py-6'}>

									<CustomerNeedSearchForm/>

									<div className={'py-4 overflow-y-auto'}  style={{ maxHeight: `${window.innerHeight - 550}px` }}>
										{
											customerNeedState.customerNeeds.data.map((customerNeed, index) => (
												<div key={customerNeed.id} className={'rounded-md p-2'}>

													{index === 0 && <div className={'pb-4'}><Divider/></div>}

													<div className={'flex items-center py-4'}>

														<div className={'w-1/12 px-2'}>
															<div>{customerNeed.country}</div>
														</div>

														<div className={'w-1/12 px-2'}>
															<div>{customerNeed.city}</div>
														</div>

														<div className={'w-2/12 px-2'}>
															{customerNeed.office && <div>
																Espace de travail (<span className={'italic'}>{customerNeed.officeType}</span>)
															</div>
															}
															{customerNeed.workshop && <div>Atelier</div>}
															{customerNeed.warehouse && <div>Entrepôt</div>}
														</div>


														<div className={'w-2/12'}>
															<div>À partir du {customerNeed.startDate}</div>
														</div>


														<div className={'w-2/12 px-2'}>
															{ customerNeed.minArea && !customerNeed.maxArea && <div> À partir de {customerNeed.minArea}m²</div>}
															{ customerNeed.maxArea && !customerNeed.minArea && <div> Jusqu&#39;à {customerNeed.maxArea}m² </div>}
															{ customerNeed.minArea && customerNeed.maxArea && <div>De {customerNeed.minArea}m² à {customerNeed.maxArea}m² </div>}
														</div>

														<div className={'w-1/12 px-2'}>
															<div>{customerNeed.price ? `${customerNeed.price}€/mois`: ''}</div>
														</div>

														<div className={'w-5/12 flex justify-end'}>
															<Button onClick={() => openUserModalByCustomerNeed(customerNeed)}>
																Voir utilisateur
															</Button>
														</div>
													</div>

													<Divider/>

												</div>
											))
										}

									</div>
								</Tab.Panel>

								<Tab.Panel className={'border-t py-6'}>
									<form>
										<div className={'mt-6 w-3/12'}>
											<InputText
												label={'Accorder le rôle d\'administrateur à'}
												name={'adminEmail'}
												ref={register({
													required: false,
													pattern: {
														value: EMAIL_REGEX,
														message: 'Invalid email address',
													},
												})}
											/>
											<div className={'mt-4'}>
												<Button type={'button'} onClick={() => grantAdminRole()}>
													Accorder le rôle d&lsquo;administrateur
												</Button>
											</div>
										</div>

										<div className={'mt-12 w-3/12'}>
											<InputText
												label={'Accorder le rôle de propriétaire d\'actif à'}
												name={'ownerEmail'}
												ref={register({
													required: false,
													pattern: {
														value: EMAIL_REGEX,
														message: 'Invalid email address',
													},
												})}
											/>

											<div className={'mt-4'}>
												<Button type={'button'} onClick={() => grantOwnerRole()}>
													Accorder le rôle de propriétaire
												</Button>
											</div>
										</div>
									</form>
								</Tab.Panel>
							</Tab.Panels>
						</Tab.Group>
					</div>
				</div>
			</div>


			<Modal
				isOpen={openOfferModal}
				onClose={() => setOpenOfferModal(false)}
				title={'Détails utilisateur'}
				closeOnClickOverlay={true}
				closeButton={true}
			>
				<div className={'px-10'}>
					<div className='flex gap-2 mt-4'>

						<InputText
							name={'lastname'}
							label={'Nom'}
							value={userState.otherUser.data?.firstname}
							disabled
						/>

						<InputText
							name={'firstname'}
							label={'Prénom'}
							value={userState.otherUser.data?.firstname}
							disabled
						/>

					</div>
					<div className='mt-2'>
						<InputText
							name={'email'}
							label={'Email'}
							value={userState.otherUser.data?.email}
							disabled
						/>
					</div>

					<div className='mt-2'>
						<InputText
							name={'phoneNumber'}
							label={'Tél.'}
							value={userState.otherUser.data?.phoneNumber}
							disabled
						/>
					</div>

					<div className='mt-2'>
						<InputText
							name={'jobTitle'}
							label={'Profession'}
							value={userState.otherUser.data?.jobTitle}
							disabled
						/>
					</div>

				</div>

				<div className='text-center mt-4'>
					<Button  type={'button'} onClick={() => setOpenOfferModal(false)}>Fermer</Button>
				</div>
			</Modal>

		</div>
	)
}