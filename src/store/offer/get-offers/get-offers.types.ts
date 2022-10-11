import { CustomError } from '../../../core/domain/error/custom-error'
import { SharedThunkAction } from '../../shared/thunk.types'
import { Offer } from 'core/domain/offer/offer'
import { GetOffersViewModel } from 'adapter/primary/view/view-model/get-offers.view-model'

interface GetOffersRequest {
  type: 'GET_OFFERS_REQUEST'
}

interface GetOffersSuccess {
  type: 'GET_OFFERS_SUCCESS'
  payload: Offer[]
}

interface GetOffersFailure {
  type: 'GET_OFFERS_FAILURE'
  payload: CustomError
}

export type GetOffersActionTypes =
  | GetOffersRequest
  | GetOffersSuccess
  | GetOffersFailure

export type GetOffersThunk = (props: GetOffersViewModel) => SharedThunkAction<GetOffersActionTypes>
