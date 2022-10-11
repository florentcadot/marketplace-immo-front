import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { H2 } from 'adapter/primary/view/atom/h2.atom'
import { useHistory, useLocation } from 'react-router-dom'
import { HistoryLocationState } from 'core/port/service/history.service.port'
import { createCustomerNeed } from 'core/use-case/customer-need/create-customer-need.use-case'
import { OfficeType } from 'core/domain/customer-need/customer-need'
import { Button } from 'adapter/primary/view/atom/button.atom'
import OfficeFull from '../../asset/image/office-full.jpg'
import OfficeShared from '../../asset/image/office-shared.jpg'
import OfficeCoworking from '../../asset/image/office-coworking.jpg'
import { Modal } from 'adapter/primary/view/atom/modal.atom'
import { formatDate } from 'adapter/secondary/service/date.service'
import { AppRoutes } from 'adapter/primary/routes/app-routes'


type OfficeTypeData = {
	type: OfficeType,
	photo: string
}

const OFFICE_TYPES: OfficeTypeData[] = [
	{
		type: OfficeType.COWORKING,
		photo: OfficeCoworking,
	},
	{
		type: OfficeType.FULL_SPACE,
		photo: OfficeFull,
	},
	{
		type: OfficeType.SHARED_SPACE,
		photo: OfficeShared,
	},
]

export const LeaseSeekingCustomerNeed = () => {

	const dispatch = useDispatch()
	const location = useLocation<HistoryLocationState>()
	const customerNeedForm  = location.state?.createCustomerNeedForm
	const history = useHistory()
	const handleOpenConfirmationModal = (officeType: OfficeType) => {
		if(customerNeedForm){
			customerNeedForm.officeType = [officeType]
		}
		setOpenConfirmationModal(true)
	}
	const handleCreateCustomerNeed = () => {
		if(customerNeedForm){
			dispatch(createCustomerNeed(customerNeedForm))
		}
	}
	const [openConfirmationModal, setOpenConfirmationModal] = useState(false)

	useEffect(() => {
		if(!customerNeedForm?.office){
			setOpenConfirmationModal(true)
		}
	}, [])


	return (
		<div>
			{
				customerNeedForm?.office ? (
					<div className={'py-12 px-visitor'}>
						<div className={'grid grid-cols-2 gap-4'}>
							{

								OFFICE_TYPES.map((office) => (
									<div className={'border-2 rounded-md my-2 p-2 text-center '} key={office.type}>
										<H2>{office.type}</H2>
										<div className={'flex justify-center p-2'}>
											<div className={'w-400'}>
												<img src={office.photo}/>
											</div>
										</div>
										<div className={'py-4'}>
											<Button medium onClick={() => handleOpenConfirmationModal(office.type)}>Choisir</Button>
										</div>
									</div>
								)
								)
							}

						</div>
					</div>
				) :  (
					<div style={{ height: `${window.innerHeight - 168}px` }}/>
				)
			}
			<Modal
				isOpen={openConfirmationModal}
				onClose={() => setOpenConfirmationModal(false)}
				title={'Confirmation'}
				closeButton={customerNeedForm?.office ? true : false}
				closeOnClickOverlay={customerNeedForm?.office ? true : false}
			>
				<div className={'px-10 text-justify'}>

					<div className={'mt-4'}>
						Vous recherchez
						{
							(customerNeedForm?.office
								|| customerNeedForm?.workshop
								|| customerNeedForm?.warehouse
							) && (
								<span className='font-bold'>
									{customerNeedForm?.office && <span> un espace de travail de type (<span className={'italic'}>{customerNeedForm.officeType}</span>)
									</span>
									}
									{customerNeedForm?.workshop && <span> un atelier</span>}
									{customerNeedForm?.warehouse && <span> un entrepôt</span>}
								</span>
							)
						}

						{
							customerNeedForm?.city && (
								<span className='font-bold'> à {customerNeedForm.city}</span>
							)
						}

						{
							customerNeedForm?.startDate && (
								<span className='font-bold'> à partir du {formatDate(customerNeedForm.startDate)}</span>
							)
						}

						{
							(customerNeedForm?.minArea || customerNeedForm?.maxArea) && (
								<span className='font-bold'>
									&nbsp;d&apos;une surface
									{ customerNeedForm?.minArea && !customerNeedForm?.maxArea && <span> minimum de {customerNeedForm?.minArea} m²</span>}
									{ customerNeedForm?.maxArea && !customerNeedForm?.minArea && <span> maximum de {customerNeedForm?.maxArea} m²</span>}
									{ customerNeedForm?.minArea && customerNeedForm?.maxArea && <span> comprise entre {customerNeedForm?.minArea} m² et {customerNeedForm?.maxArea} m²</span>}
								</span>
							)
						}

						{
							customerNeedForm?.price && (
								<span className='font-bold'> pour un budget de {customerNeedForm.price} €/mois</span>
							)
						}
						.
					</div>

					<div className={'mt-4'}>
						En cliquant sur &apos;continuer&apos;,
						vous acceptez que Marketplace immo transmette vos
						informations à des propriétaires d&apos;espaces en
						accord avec votre recherche.
					</div>


					<div className={'text-center mt-8'}>
						<Button onClick={() => handleCreateCustomerNeed()}>
							Continuer
						</Button>
						{
							!customerNeedForm?.office && (
								<div className='mt-2'>
									<Button secondary  onClick={() => history.push(AppRoutes.ESPACE_LOCATAIRE)}>
										Annuler
									</Button>
								</div>
							)
						}
					</div>
				</div>
			</Modal>
		</div>
	)
}
