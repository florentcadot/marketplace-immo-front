import { CustomError } from '../../../core/domain/error/custom-error'
import { SharedThunkAction } from '../../shared/thunk.types'
import { CustomerNeed } from 'core/domain/customer-need/customer-need'
import { GetCustomerNeedsViewModel } from 'adapter/primary/view/view-model/get-customer-needs.view-model'

interface GetCustomerNeedsRequest {
    type: 'GET_CUSTOMER_NEEDS_REQUEST'
}

interface GetCustomerNeedsSuccess {
    type: 'GET_CUSTOMER_NEEDS_SUCCESS'
    payload: CustomerNeed[]
}

interface GetCustomerNeedsFailure {
    type: 'GET_CUSTOMER_NEEDS_FAILURE'
    payload: CustomError
}

export type GetCustomerNeedsActionTypes =
    | GetCustomerNeedsRequest
    | GetCustomerNeedsSuccess
    | GetCustomerNeedsFailure

export type GetCustomerNeedsThunk = (props: GetCustomerNeedsViewModel) => SharedThunkAction<GetCustomerNeedsActionTypes>
