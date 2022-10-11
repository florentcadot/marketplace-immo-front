import { InputSelectAutoCompleteValue } from 'adapter/primary/view/atom/input-select-autocomplete.atom'

export interface GetCustomerNeedsViewModel {
    startDate?: Date,
    endDate?: Date,
    minPrice?:string,
    maxPrice?: string,
    minArea?:string,
    maxArea?:string
    city?: string
    region?: InputSelectAutoCompleteValue<string>
    office?: boolean
    warehouse?: boolean
    workshop?: boolean
}
