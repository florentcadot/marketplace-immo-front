import { CustomError } from '../../../core/domain/error/custom-error'
import { LogoutActionTypes } from 'store/user/logout/logout.types'

export const logoutRequest = (): LogoutActionTypes => {
	return {
		type: 'LOGOUT_REQUEST',
	}
}

export const logoutSuccess = (): LogoutActionTypes => {
	return {
		type: 'LOGOUT_SUCCESS',
	}
}

export const logoutFailure = (err: CustomError): LogoutActionTypes => {
	return {
		type: 'LOGOUT_FAILURE',
		payload: err,
	}
}
