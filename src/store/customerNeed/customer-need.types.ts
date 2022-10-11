import { CreateCustomerNeedActionTypes } from 'store/customerNeed/create-customer-need/create-customer-need.types'
import { CustomerNeed } from 'core/domain/customer-need/customer-need'
import { GetCustomerNeedsActionTypes } from 'store/customerNeed/get-customer-needs/get-customer-need.types'

export type CustomerNeedActionTypes = CreateCustomerNeedActionTypes | GetCustomerNeedsActionTypes

export interface CustomerNeedState {
    customerNeed: {
        create: {
            success: boolean
            error: {
                message: string | null
                code: string | null
            }
            loading: boolean
        }
    },
    customerNeeds: {
        success: boolean
        error: {
            message: string | null
            code: string | null
        }
        loading: boolean
        data: CustomerNeed[]
    },



}
