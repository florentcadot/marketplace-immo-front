import { Offer } from 'core/domain/offer/offer'
import { GetOffersRequestDto } from 'adapter/secondary/dto/offer/get-offers.dto'

export interface OfferRepository {
  getOffers(props: GetOffersRequestDto): Promise<Offer[]>
}
