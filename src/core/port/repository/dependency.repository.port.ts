import { UserRepository } from 'core/port/repository/user.repository.port'
import { OfferRepository } from 'core/port/repository/offer.repository.port'
import { AssetRepository } from 'core/port/repository/asset.repository.port'
import { CustomerNeedRepository } from 'core/port/repository/customer-need.repository.port'

export interface DependencyRepository {
  user: UserRepository
  offer: OfferRepository
  asset: AssetRepository
  customerNeed: CustomerNeedRepository
  build: () => void
}
