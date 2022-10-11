import { RealSharedRepository } from '../shared/real.shared.repository'
import { OfferRepository } from 'core/port/repository/offer.repository.port'
import { Offer } from 'core/domain/offer/offer'
import { GetOffersRequestDto, GetOffersResponseDto } from 'adapter/secondary/dto/offer/get-offers.dto'
import { GetOffersMapper } from 'adapter/mapper/offer/get-offers.mapper'

export class RealOfferRepository extends RealSharedRepository implements OfferRepository {
	constructor() {
		super()
	}
	public async getOffers(props: GetOffersRequestDto): Promise<Offer[]> {
		const response = await this.instance.post<GetOffersResponseDto[]>('/offer', props)
		return response.data.map(GetOffersMapper.toDomain)
	}

}
