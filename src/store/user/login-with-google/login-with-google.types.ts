import { CustomError } from '../../../core/domain/error/custom-error'
import { SharedThunkAction } from '../../shared/thunk.types'
import { User } from 'core/domain/user/user'

interface LoginWithGoogleRequest {
	type: 'LOGIN_WITH_GOOGLE_REQUEST'
}

interface LoginWithGoogleSuccess {
	type: 'LOGIN_WITH_GOOGLE_SUCCESS'
	payload: User
}

interface LoginWithGoogleFailure {
	type: 'LOGIN_WITH_GOOGLE_FAILURE'
	payload: CustomError
}

export type LoginWithGoogleActionTypes =
	| LoginWithGoogleRequest
	| LoginWithGoogleSuccess
	| LoginWithGoogleFailure

export type LoginWithGoogleThunk = (acessToken: string) => SharedThunkAction<LoginWithGoogleActionTypes>
