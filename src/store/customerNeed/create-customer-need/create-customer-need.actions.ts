import { CustomError } from '../../../core/domain/error/custom-error'
import { CreateCustomerNeedActionTypes } from 'store/customerNeed/create-customer-need/create-customer-need.types'

export const createCustomerNeedRequest = (): CreateCustomerNeedActionTypes => {
	return {
		type: 'CREATE_CUSTOMER_NEED_REQUEST',
	}
}

export const createCustomerNeedSuccess = (): CreateCustomerNeedActionTypes => {
	return {
		type: 'CREATE_CUSTOMER_NEED_SUCCESS',
	}
}

export const createCustomerNeedFailure = (err: CustomError): CreateCustomerNeedActionTypes => {
	return {
		type: 'CREATE_CUSTOMER_NEED_FAILURE',
		payload: err,
	}
}
