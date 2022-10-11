import { DependencyRepository } from 'core/port/repository/dependency.repository.port'
import { RealOfferRepository } from '../../offer/real.offer.repository'
import { RealUserRepository } from '../../user/real.user.repository'
import { RealAssetRepository } from 'adapter/secondary/repository/asset/real.asset.repository'
import { RealCustomerNeedRepository } from 'adapter/secondary/repository/customer-need/real.customer-need.repository'

export class RealRepositoryDependency implements DependencyRepository {
	private _dependencies: DependencyRepository = {
		user: new RealUserRepository(),
		offer: new RealOfferRepository(),
		asset: new RealAssetRepository(),
		customerNeed: new RealCustomerNeedRepository(),
		build: () => this.build(),
	}

	constructor() {}

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

	public build(): RealRepositoryDependency {
		this._dependencies = {
			user: new RealUserRepository(),
			offer: new RealOfferRepository(),
			asset: new RealAssetRepository(),
			customerNeed: new RealCustomerNeedRepository(),
			build: () => this.build(),
		}
		return this
	}
}
