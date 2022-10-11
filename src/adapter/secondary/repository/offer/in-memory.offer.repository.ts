import { InMemoryRepositoryDependency } from '../shared/dependencies/in-memory.dependency.repository'
import { OfferRepository } from 'core/port/repository/offer.repository.port'
import { Offer } from 'core/domain/offer/offer'
import { GetOffersRequestDto } from 'adapter/secondary/dto/offer/get-offers.dto'

export class InMemoryOfferRepository
	extends InMemoryRepositoryDependency
	implements OfferRepository
{
	constructor() {
		super()
	}
	public async getOffers(props: GetOffersRequestDto): Promise<Offer[]> {
		throw new Error('Not implemented')
	}
}
