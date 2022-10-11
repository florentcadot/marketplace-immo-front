import { CustomError } from '../../../core/domain/error/custom-error'
import { Offer } from 'core/domain/offer/offer'
import { GetOffersActionTypes } from 'store/offer/get-offers/get-offers.types'

export const getOffersRequest = (): GetOffersActionTypes => {
	return {
		type: 'GET_OFFERS_REQUEST',
	}
}

export const getOffersSuccess = (offerList: Offer[]): GetOffersActionTypes => {
	return {
		type: 'GET_OFFERS_SUCCESS',
		payload: offerList,
	}
}

export const getOffersFailure = (err: CustomError): GetOffersActionTypes => {
	return {
		type: 'GET_OFFERS_FAILURE',
		payload: err,
	}
}
