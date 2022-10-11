import { CustomError } from '../../../core/domain/error/custom-error'
import { SharedThunkAction } from '../../shared/thunk.types'

interface LogoutRequest {
    type: 'LOGOUT_REQUEST'
}

interface LogoutSuccess {
    type: 'LOGOUT_SUCCESS'
}

interface LogoutFailure {
    type: 'LOGOUT_FAILURE'
    payload: CustomError
}

export type LogoutActionTypes =
    | LogoutRequest
    | LogoutSuccess
    | LogoutFailure

export type LogoutThunk = () => SharedThunkAction<LogoutActionTypes>
