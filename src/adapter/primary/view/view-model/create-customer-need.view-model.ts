import { OfficeType } from 'core/domain/customer-need/customer-need'

export interface CreateCustomerNeedViewModel {
    city: string
    country?: string
    startDate?: Date
    minArea?: string
    maxArea?: string
    price?: string
    office?: boolean
    officeType: OfficeType[]
    warehouse?: boolean
    workshop?: boolean
}
