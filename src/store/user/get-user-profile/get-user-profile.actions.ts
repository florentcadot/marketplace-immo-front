import { CustomError } from '../../../core/domain/error/custom-error'
import { GetUserProfileActionTypes } from 'store/user/get-user-profile/get-user-profile.types'
import { User } from 'core/domain/user/user'

export const getUserProfileRequest = (): GetUserProfileActionTypes => {
	return {
		type: 'GET_USER_PROFILE_REQUEST',
	}
}

export const getUserProfileSuccess = (user: User): GetUserProfileActionTypes => {
	return {
		type: 'GET_USER_PROFILE_SUCCESS',
		payload: user,
	}
}

export const getUserProfileFailure = (err: CustomError): GetUserProfileActionTypes => {
	return {
		type: 'GET_USER_PROFILE_FAILURE',
		payload: err,
	}
}
