import { CreateCustomerNeedRequestDto } from 'adapter/secondary/dto/customer-need/create-customer-need.dto'
import { GetCustomerNeedsRequestDto } from 'adapter/secondary/dto/customer-need/get-customer-needs.dto'
import { CustomerNeed } from 'core/domain/customer-need/customer-need'

export interface CustomerNeedRepository {
    createCustomerNeed(props: CreateCustomerNeedRequestDto): Promise<void>
    getCustomerNeeds(props: GetCustomerNeedsRequestDto): Promise<CustomerNeed[]>
}
