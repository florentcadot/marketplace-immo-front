import { OfficeType } from 'core/domain/customer-need/customer-need'

export interface CreateCustomerNeedRequestDto {
    id: string
    country: string
    city: string
    region?: string
    startDate?: Date
    minArea?: number
    maxArea?: number
    price?: number
    office?: boolean
    officeType: OfficeType[]
    warehouse?: boolean
    workshop?: boolean
}