import { handleError } from 'core/domain/error/handle-error'
import {
	getUserProfileFailure,
	getUserProfileRequest,
	getUserProfileSuccess
} from 'store/user/get-user-profile/get-user-profile.actions'
import { GetUserProfileThunk } from 'store/user/get-user-profile/get-user-profile.types'

export const getUserProfile: GetUserProfileThunk = (userId) => async (dispatch, getState, { api, queryService, history, localStorage }) => {
	try {
		dispatch(getUserProfileRequest())
		const data = await api.user.getUserProfile(userId)
		dispatch(getUserProfileSuccess(data))
	} catch (err) {
		dispatch(getUserProfileFailure(handleError(err)))
	}
}
