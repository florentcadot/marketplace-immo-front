import { CustomError } from '../../../core/domain/error/custom-error'
import { SharedThunkAction } from '../../shared/thunk.types'
import { CreateCustomerNeedViewModel } from 'adapter/primary/view/view-model/create-customer-need.view-model'

interface CreateCustomerNeedRequest {
    type: 'CREATE_CUSTOMER_NEED_REQUEST'
}

interface CreateCustomerNeedSuccess {
    type: 'CREATE_CUSTOMER_NEED_SUCCESS'
}

interface CreateCustomerNeedFailure {
    type: 'CREATE_CUSTOMER_NEED_FAILURE'
    payload: CustomError
}

export type CreateCustomerNeedActionTypes =
    | CreateCustomerNeedRequest
    | CreateCustomerNeedSuccess
    | CreateCustomerNeedFailure

export type CreateCustomerNeedThunk = (props: CreateCustomerNeedViewModel) => SharedThunkAction<CreateCustomerNeedActionTypes>
