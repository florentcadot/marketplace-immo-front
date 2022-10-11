import { handleError } from 'core/domain/error/handle-error'
import { GetCustomerNeedsThunk } from 'store/customerNeed/get-customer-needs/get-customer-need.types'
import { GetCustomerNeedsViewModel } from 'adapter/primary/view/view-model/get-customer-needs.view-model'
import {
	getCustomerNeedsFailure,
	getCustomerNeedsRequest,
	getCustomerNeedsSuccess
} from 'store/customerNeed/get-customer-needs/get-customer-needs.actions'
import { GetCustomerNeedsMapper } from 'adapter/mapper/customer-need/get-customer-needs.mapper'

export const getCustomerNeeds: GetCustomerNeedsThunk = (props: GetCustomerNeedsViewModel) => async (dispatch, getState, { api, queryService, history, localStorage }) => {
	try {
		dispatch(getCustomerNeedsRequest())
		const data = await api.customerNeed.getCustomerNeeds(GetCustomerNeedsMapper.toApi(props))
		dispatch(getCustomerNeedsSuccess(data))
	} catch (err) {
		dispatch(getCustomerNeedsFailure(handleError(err)))
	}
}
