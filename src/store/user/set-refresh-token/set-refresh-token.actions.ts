import { CustomError } from '../../../core/domain/error/custom-error'
import { User } from 'core/domain/user/user'
import { SetRefreshTokenActionTypes } from 'store/user/set-refresh-token/set-refresh-token.types'

export const setRefreshTokenRequest = (): SetRefreshTokenActionTypes => {
	return {
		type: 'SET_REFRESH_TOKEN_REQUEST',
	}
}

export const setRefreshTokenSuccess = (user: User): SetRefreshTokenActionTypes => {
	return {
		type: 'SET_REFRESH_TOKEN_SUCCESS',
		payload: user,
	}
}

export const setRefreshTokenFailure = (err: CustomError): SetRefreshTokenActionTypes => {
	return {
		type: 'SET_REFRESH_TOKEN_FAILURE',
		payload: err,
	}
}
