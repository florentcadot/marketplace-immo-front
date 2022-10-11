import { DependencyRepository } from 'core/port/repository/dependency.repository.port'
import { InMemoryUserRepository } from 'adapter/secondary/repository/user/in-memory.user.repository'
import { InMemoryOfferRepository } from 'adapter/secondary/repository/offer/in-memory.offer.repository.js'
import { InMemoryAssetRepository } from 'adapter/secondary/repository/asset/in-memory.asset.repository'
import {
	InMemoryCustomerNeedRepository
} from 'adapter/secondary/repository/customer-need/in-memory.customer-need.repository'

export class InMemoryRepositoryDependency implements DependencyRepository {
	private _dependencies: DependencyRepository = {
		user: new InMemoryUserRepository(),
		offer: new InMemoryOfferRepository(),
		asset: new InMemoryAssetRepository(),
		customerNeed: new InMemoryCustomerNeedRepository(),
		build: () => this.build(),
	}

	get user() {
		return this._dependencies.user
	}
	get offer() {
		return this._dependencies.offer
	}
	get asset() {
		return this._dependencies.asset
	}
	get customerNeed() {
		return this._dependencies.customerNeed
	}

	public build(): InMemoryRepositoryDependency {
		this._dependencies = {
			user: new InMemoryUserRepository(),
			offer: new InMemoryOfferRepository(),
			asset: new InMemoryAssetRepository(),
			customerNeed: new InMemoryCustomerNeedRepository(),
			build: () => this.build(),
		}
		return this
	}
}
