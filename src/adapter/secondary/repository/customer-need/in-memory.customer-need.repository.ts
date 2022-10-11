import {
	InMemoryRepositoryDependency
} from 'adapter/secondary/repository/shared/dependencies/in-memory.dependency.repository'
import { CreateCustomerNeedRequestDto } from 'adapter/secondary/dto/customer-need/create-customer-need.dto'
import { CustomerNeedRepository } from 'core/port/repository/customer-need.repository.port'
import { GetCustomerNeedsRequestDto } from 'adapter/secondary/dto/customer-need/get-customer-needs.dto'
import { CustomerNeed } from 'core/domain/customer-need/customer-need'

export class InMemoryCustomerNeedRepository extends InMemoryRepositoryDependency implements CustomerNeedRepository {
	constructor() {
		super()
	}
	public async createCustomerNeed(props: CreateCustomerNeedRequestDto): Promise<void> {
		throw new Error('Not implemented')
	}

	public async getCustomerNeeds(props: GetCustomerNeedsRequestDto): Promise<CustomerNeed[]> {
		throw new Error('Not implemented')
	}

}
