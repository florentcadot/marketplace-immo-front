import { CustomError } from '../../../core/domain/error/custom-error'
import { GetCustomerNeedsActionTypes } from 'store/customerNeed/get-customer-needs/get-customer-need.types'
import { CustomerNeed } from 'core/domain/customer-need/customer-need'

export const getCustomerNeedsRequest = (): GetCustomerNeedsActionTypes => {
	return {
		type: 'GET_CUSTOMER_NEEDS_REQUEST',
	}
}

export const getCustomerNeedsSuccess = (props: CustomerNeed[]): GetCustomerNeedsActionTypes => {
	return {
		type: 'GET_CUSTOMER_NEEDS_SUCCESS',
		payload: props,
	}
}

export const getCustomerNeedsFailure = (err: CustomError): GetCustomerNeedsActionTypes => {
	return {
		type: 'GET_CUSTOMER_NEEDS_FAILURE',
		payload: err,
	}
}
