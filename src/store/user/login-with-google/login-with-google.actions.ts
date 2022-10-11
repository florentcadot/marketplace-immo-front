import { CustomError } from '../../../core/domain/error/custom-error'
import { User } from 'core/domain/user/user'
import { LoginWithGoogleActionTypes } from 'store/user/login-with-google/login-with-google.types'

export const loginWithGoogleRequest = (): LoginWithGoogleActionTypes => {
	return {
		type: 'LOGIN_WITH_GOOGLE_REQUEST',
	}
}

export const loginWithGoogleSuccess = (user: User): LoginWithGoogleActionTypes => {
	return {
		type: 'LOGIN_WITH_GOOGLE_SUCCESS',
		payload: user,
	}
}

export const loginWithGoogleFailure = (err: CustomError): LoginWithGoogleActionTypes => {
	return {
		type: 'LOGIN_WITH_GOOGLE_FAILURE',
		payload: err,
	}
}
