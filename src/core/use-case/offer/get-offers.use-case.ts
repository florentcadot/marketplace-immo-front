import { GetOffersThunk } from 'store/offer/get-offers/get-offers.types'
import { handleError } from 'core/domain/error/handle-error'
import {
	getOffersFailure,
	getOffersRequest,
	getOffersSuccess
} from 'store/offer/get-offers/get-offers.actions'
import { GetOffersViewModel } from 'adapter/primary/view/view-model/get-offers.view-model'
import { GetOffersMapper } from 'adapter/mapper/offer/get-offers.mapper'


export const getOffers: GetOffersThunk = (props: GetOffersViewModel) => async (dispatch, getState, { api, queryService, history }) => {
	try {
		dispatch(getOffersRequest())
		const data = await api.offer.getOffers(GetOffersMapper.toApi(props))
		dispatch(getOffersSuccess(data))
	} catch (err) {
		dispatch(getOffersFailure(handleError(err)))
	}
}
