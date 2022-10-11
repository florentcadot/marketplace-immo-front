import { CustomError } from '../../../core/domain/error/custom-error'
import { User } from 'core/domain/user/user'
import { GetUserByOfferActionTypes } from 'store/user/get-user-by-offer/get-user-by-offer.types'

export const getUserByOfferRequest = (): GetUserByOfferActionTypes => {
	return {
		type: 'GET_USER_BY_OFFER_REQUEST',
	}
}

export const getUserByOfferSuccess = (user: User): GetUserByOfferActionTypes => {
	return {
		type: 'GET_USER_BY_OFFER_SUCCESS',
		payload: user,
	}
}

export const getUserByOfferFailure = (err: CustomError): GetUserByOfferActionTypes => {
	return {
		type: 'GET_USER_BY_OFFER_FAILURE',
		payload: err,
	}
}
