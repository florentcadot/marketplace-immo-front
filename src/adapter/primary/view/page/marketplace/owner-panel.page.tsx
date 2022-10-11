import React, { Fragment, useEffect, useState } from 'react'
import { H1 } from 'adapter/primary/view/atom/h1.atom'
import { Divider } from 'adapter/primary/view/atom/divider.atom'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'adapter/primary/view/atom/button.atom'
import { AppState } from 'store'
import { CustomerNeedSearchForm } from 'adapter/primary/view/organism/customer-need-search-form.organism'
import { CustomerNeedState } from 'store/customerNeed/customer-need.types'
import { getCustomerNeeds } from 'core/use-case/customer-need/get-customer-needs.use-case'
import { Modal } from 'adapter/primary/view/atom/modal.atom'
import { UserState } from 'store/user/user.types'
import { InputText } from 'adapter/primary/view/atom/input-text.atom'
import { CustomerNeed } from 'core/domain/customer-need/customer-need'
import { getUserProfile } from 'core/use-case/user/get-user-profile.use-case'

export const OwnerPanel = () => {
	const dispatch = useDispatch()
	const customerNeedState = useSelector<AppState, CustomerNeedState>((state) => state.customerNeed)
	const userState = useSelector<AppState, UserState>((state) => state.user)
	const [openOfferModal, setOpenOfferModal] = useState(false)

	const openUserModalByCustomerNeed = (customerNeed: CustomerNeed) => {
		if(customerNeed.userId) {
			dispatch(getUserProfile(customerNeed.userId))
			setOpenOfferModal(true)
		}
	}

	useEffect(() => {
		dispatch(getCustomerNeeds({}))
	}, [])

	return 	(
		<div>
			<div className={'py-12 px-visitor'}  style={{ height: `${window.innerHeight - 168}px` }}>

				<H1>Liste des besoins utilisateurs</H1>

				<Divider/>

				<div className={'mt-6'}>
					<div className={'mt-4'}>

						<div className={'py-6'}>
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
													{ customerNeed.minArea && !customerNeed.maxArea && <div> A partir de {customerNeed.minArea}m²</div>}
													{ customerNeed.minArea && !customerNeed.maxArea && <div> Jusqu&#39;à {customerNeed.minArea}m² </div>}
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

		</div>
	)
}