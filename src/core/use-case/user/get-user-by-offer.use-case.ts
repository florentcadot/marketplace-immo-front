import { handleError } from 'core/domain/error/handle-error'
import { GetUserByOfferThunk } from 'store/user/get-user-by-offer/get-user-by-offer.types'
import {
	getUserByOfferFailure,
	getUserByOfferRequest,
	getUserByOfferSuccess
} from 'store/user/get-user-by-offer/get-user-by-offer.actions'

export const getUserByOffer: GetUserByOfferThunk = (offerId) => async (dispatch, getState, { api, queryService, history, localStorage }) => {
	try {
		dispatch(getUserByOfferRequest())
		const data = await api.user.getUserByOffer(offerId)
		dispatch(getUserByOfferSuccess(data))
	} catch (err) {
		dispatch(getUserByOfferFailure(handleError(err)))
	}
}
