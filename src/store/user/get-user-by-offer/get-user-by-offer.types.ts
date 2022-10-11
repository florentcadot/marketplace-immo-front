import { CustomError } from '../../../core/domain/error/custom-error'
import { SharedThunkAction } from '../../shared/thunk.types'
import { User } from 'core/domain/user/user'

interface GetUserByOfferRequest {
    type: 'GET_USER_BY_OFFER_REQUEST'
}

interface GetUserByOfferSuccess {
    type: 'GET_USER_BY_OFFER_SUCCESS'
    payload: User
}

interface GetUserByOfferFailure {
    type: 'GET_USER_BY_OFFER_FAILURE'
    payload: CustomError
}

export type GetUserByOfferActionTypes =
    | GetUserByOfferRequest
    | GetUserByOfferSuccess
    | GetUserByOfferFailure

export type GetUserByOfferThunk = (offerId: string) => SharedThunkAction<GetUserByOfferActionTypes>
