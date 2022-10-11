import { CustomError } from '../../../core/domain/error/custom-error'
import { SharedThunkAction } from '../../shared/thunk.types'
import { User } from 'core/domain/user/user'

interface SetRefreshTokenRequest {
    type: 'SET_REFRESH_TOKEN_REQUEST'
}

interface SetRefreshTokenSuccess {
    type: 'SET_REFRESH_TOKEN_SUCCESS'
    payload: User
}

interface SetRefreshTokenFailure {
    type: 'SET_REFRESH_TOKEN_FAILURE'
    payload: CustomError
}

export type SetRefreshTokenActionTypes =
    | SetRefreshTokenRequest
    | SetRefreshTokenSuccess
    | SetRefreshTokenFailure

export type SetRefreshTokenThunk = () => SharedThunkAction<SetRefreshTokenActionTypes>
