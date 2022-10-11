import { CustomerNeedRepository } from 'core/port/repository/customer-need.repository.port'
import { RealSharedRepository } from 'adapter/secondary/repository/shared/real.shared.repository'
import { CreateCustomerNeedRequestDto } from 'adapter/secondary/dto/customer-need/create-customer-need.dto'
import {
	GetCustomerNeedsRequestDto,
	GetCustomerNeedsResponseDto
} from 'adapter/secondary/dto/customer-need/get-customer-needs.dto'
import { CustomerNeed } from 'core/domain/customer-need/customer-need'
import { GetCustomerNeedsMapper } from 'adapter/mapper/customer-need/get-customer-needs.mapper'

export class RealCustomerNeedRepository extends RealSharedRepository implements CustomerNeedRepository {
	constructor() {
		super()
	}

	public async createCustomerNeed(props: CreateCustomerNeedRequestDto): Promise<void> {
		await this.instance.post<void>('/customer-need/new', props)
	}

	public async getCustomerNeeds(props: GetCustomerNeedsRequestDto): Promise<CustomerNeed[]> {
		const response =  await this.instance.post<GetCustomerNeedsResponseDto[]>('/customer-need', props)
		return response.data.map(GetCustomerNeedsMapper.toDomain)
	}
}
