import { OfficeType } from 'core/domain/customer-need/customer-need'

export interface GetCustomerNeedsResponseDto {
    id: string
    userId: string
    price?: number
    minArea?:number
    maxArea?:number
    startDate:string
    endDate?:string
    country: string
    city: string
    region: string
    office: boolean
    officeType?: OfficeType[]
    warehouse: boolean
    workshop: boolean
}



export interface GetCustomerNeedsRequestDto {
    startDate?: Date
    endDate?: Date
    minPrice?:number
    maxPrice?: number
    minArea?:number
    maxArea?:number
    city?: string
    region?: string
    office?: boolean
    warehouse?: boolean
    workshop?: boolean
}