import { Offer } from 'core/domain/offer/offer'
import { GetOffersActionTypes } from 'store/offer/get-offers/get-offers.types'

export type OfferActionTypes = GetOffersActionTypes

export interface OfferState {
  offers: {
    get: {
      success: boolean
      error: {
        message: string | null
        code: string | null
      }
      loading: boolean
      data: Offer[]
    }
  }
}
