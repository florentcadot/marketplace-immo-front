import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from 'store'
import { useLocation, useParams } from 'react-router-dom'
import { StarRating } from 'adapter/primary/view/atom/star-rating.atom'
import { H2 } from 'adapter/primary/view/atom/h2.atom'
import { H1 } from 'adapter/primary/view/atom/h1.atom'
import { Button } from 'adapter/primary/view/atom/button.atom'
import { MapComponent } from 'adapter/primary/view/atom/map-component.atom'
import { Carousel } from 'adapter/primary/view/atom/carousel.atom'
import { OfferState } from 'store/offer/offer.types'


export const OfferDetail = () => {

	const dispatch = useDispatch()
	const assetState = useSelector<AppState, OfferState>((state) => state.offer)
	const param = useParams<{ id: string }>()
	// const { asset, offer } = assetState.offerDetail.get.data

	useEffect(() => {
		// dispatch(getOfferDetail(param.id))
	}, [])

	return (
		<div className={'w-full h-full px-visitor'}>
			{/*{asset &&  offer && <div className={'mt-6'}>*/}
			{/*	<div>*/}
			{/*		<H1>{asset.name}</H1>*/}
			{/*	</div>*/}

			{/*	<div className={'flex flex-wrap'}>*/}
			{/*		<div className={'flex flex-col items-center w-5/12'}>*/}
			{/*			<div className={'w-full'}>*/}
			{/*				/!*<Carousel width={100} padding={30} numberOfSlides={1}>*!/*/}
			{/*				/!*	{asset.photos.map((photo) =>(*!/*/}
			{/*				/!*		<img  key={photo.id} src={photo.photoLocation}/>*!/*/}
			{/*				/!*	))*!/*/}
			{/*				/!*	}*!/*/}
			{/*				/!*</Carousel>*!/*/}
			{/*			</div>*/}
			{/*			<div className={'h-map w-full mt-5'}>*/}
			{/*				<MapComponent lat={45.78828683543857} lng={4.812953940814028}/>*/}
			{/*			</div>*/}
			{/*		</div>*/}
			{/*		<div className={'grid grid-cols-2 gap-4 max-w-full flex-auto'}>*/}
			{/*			<div className={'flex flex-col items-center'}>*/}
			{/*				<div className={'text-primary capitalize'}>*/}
			{/*					<H2>Ville</H2>*/}
			{/*				</div>*/}
			{/*				<div>{asset.fullAddress}</div>*/}
			{/*			</div>*/}

			{/*			<div className={'flex flex-col items-center'}>*/}
			{/*				<div className={'text-primary capitalize'}>*/}
			{/*					<H2>Surface</H2>*/}
			{/*				</div>*/}
			{/*				<div>{asset.area} m2</div>*/}
			{/*			</div>*/}

			{/*			<div className={'flex flex-col items-center'}>*/}
			{/*				<div className={'text-primary capitalize'}>*/}
			{/*					<H2>Loyer</H2>*/}
			{/*				</div>*/}
			{/*				<div>{offer.price} euros / mois</div>*/}
			{/*			</div>*/}

			{/*			<div className={'flex flex-col items-center'}>*/}
			{/*				<div className={'text-primary capitalize'}>*/}
			{/*					<H2>Engagement</H2>*/}
			{/*				</div>*/}
			{/*				<div>{offer.monthsCommitment} mois minimum</div>*/}
			{/*			</div>*/}

			{/*			<div className={'flex flex-col items-center'}>*/}
			{/*				<div className={'text-primary capitalize'}>*/}
			{/*					<H2>Avis</H2>*/}
			{/*				</div>*/}
			{/*				<div><StarRating value={3} starCount={5}/></div>*/}
			{/*			</div>*/}

			{/*			<div className={'flex flex-col items-center'}>*/}
			{/*				<div className={'text-primary capitalize'}>*/}
			{/*					<H2>Type</H2>*/}
			{/*				</div>*/}
			{/*				<div>{asset.type}</div>*/}
			{/*			</div>*/}
			{/*		</div>*/}
			{/*	</div>*/}
			{/*</div>*/}
			{/*}*/}
			{/*<div className={'flex justify-center mt-10'}>*/}
			{/*	<div className={'flex flex-col items-center justify-center'}>*/}
			{/*		<Button medium onClick={() =>console.log('TODO') }>Je suis intéressé</Button>*/}
			{/*	</div>*/}
			{/*</div>*/}
		</div>
	)
}
