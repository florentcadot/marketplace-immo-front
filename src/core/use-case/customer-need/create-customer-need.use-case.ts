import { handleError } from 'core/domain/error/handle-error'
import { CreateCustomerNeedThunk } from 'store/customerNeed/create-customer-need/create-customer-need.types'
import {
	createCustomerNeedFailure,
	createCustomerNeedRequest,
	createCustomerNeedSuccess
} from 'store/customerNeed/create-customer-need/create-customer-need.actions'
import { CreateCustomerNeedViewModel } from 'adapter/primary/view/view-model/create-customer-need.view-model'
import { CreateCustomerNeedMapper } from 'adapter/mapper/customer-need/create-customer-need.mapper'
import { AppRoutes } from 'adapter/primary/routes/app-routes'

export const createCustomerNeed: CreateCustomerNeedThunk = (props: CreateCustomerNeedViewModel) => async (dispatch, getState, { api, queryService, history, localStorage }) => {
	try {
		dispatch(createCustomerNeedRequest())
		await api.customerNeed.createCustomerNeed(CreateCustomerNeedMapper.toApi(props))
		dispatch(createCustomerNeedSuccess())
		history.push(AppRoutes.ESPACE_LOCATAIRE_SUCCESS)
	} catch (err) {
		dispatch(createCustomerNeedFailure(handleError(err)))
	}
}
