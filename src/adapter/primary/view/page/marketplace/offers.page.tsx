import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOffers } from 'core/use-case/offer/get-offers.use-case'
import { AppState } from 'store'
import { OfferState } from 'store/offer/offer.types'
import { Button } from 'adapter/primary/view/atom/button.atom'
import { H2 } from 'adapter/primary/view/atom/h2.atom'
import { CheckIcon } from '@heroicons/react/solid'
import { H3 } from 'adapter/primary/view/atom/h3.atom'
import { useHistory } from 'react-router-dom'
import { AppRoutes } from 'adapter/primary/routes/app-routes'
import { GetOffersViewModel } from 'adapter/primary/view/view-model/get-offers.view-model'
import { RealQueryService } from 'adapter/secondary/service/query/real.query.service'

export const Offers = () => {

	const dispatch = useDispatch()
	const offerState = useSelector<AppState, OfferState>((state) => state.offer)
	const history = useHistory()
	const queryService = new RealQueryService()

	useEffect(() => {
		dispatch(getOffers(queryService.parse<GetOffersViewModel>(history.location.search)))
	}, [])

	return (
		<div className={'w-full h-full'}>
			{/*TODO*/}
			{/*<div>SEARCH BAR </div>*/}
			<div className={'px-visitor flex flex-col content-center'}>
				{
					offerState.offers.get.data.map((offer) => (
						<div key={offer.id} className={'border-2 rounded-md my-2 p-2'}>
							<div className={'grid grid-cols-3 gap-4'}>
								<div>
									<div className={'text-center'}>
										<H2>{offer.title}</H2>
									</div>
								</div>

								<div className={'col-span-2 flex justify-end'}>
									<div className={'text-center text-green'}>
										<H3>{offer.quantity} espaces</H3>
									</div>
								</div>

								{
									offer.photos?.length > 0 && <div className={'flex justify-center'}>
										<div className={'w-full'}>
											<img src={offer.photos[0].photoLocation}/>
										</div>
									</div>
								}


								<div className={'col-span-2 flex'}>
									<div className={'mx-3 my-3 flex flex-col items-center justify-center w-2/6'}>
										{offer.tags?.map(tag => (
											<div key={tag} className={'m-2 w-1/2'}>
												<div className={'flex'}>
													<div className={'w-icon-desktop h-icon-desktop'}>
														<CheckIcon className='fill-current text-primary'/>
													</div>
													<div>{tag}</div>
												</div>
											</div>
										))
										}
									</div>

									<div className={'flex flex-col items-center justify-center text-primary w-2/6'}>
										<div className={'capitalize'}>
											<H2>{offer.title}</H2>
										</div>
										<div className={'mt-4 text-center'}>
											<H2>{offer.description}</H2>
										</div>
									</div>

									<div className={'flex flex-col  items-center justify-center w-2/6'}>
										<Button medium onClick={() => history.push(`${AppRoutes.ESPACE_LOCATAIRE_OFFRE}/${offer.id}`, { offer, from:'zefzef' })}>Postuler</Button>
									</div>

								</div>
								<div>
								</div>
							</div>
						</div>
					))
				}
			</div>
		</div>
	)
}
