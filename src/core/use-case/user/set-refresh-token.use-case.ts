import { handleError } from 'core/domain/error/handle-error'
import { SetRefreshTokenThunk } from 'store/user/set-refresh-token/set-refresh-token.types'
import {
	setRefreshTokenFailure,
	setRefreshTokenRequest,
	setRefreshTokenSuccess
} from 'store/user/set-refresh-token/set-refresh-token.actions'

export const setRefreshToken: SetRefreshTokenThunk = () => async (dispatch, getState, { api, queryService, history, localStorage }) => {
	try {
		dispatch(setRefreshTokenRequest())
		const data = await api.user.setRefreshToken()
		dispatch(setRefreshTokenSuccess(data))
		localStorage.set('isLoggedIn', true)
	} catch (err) {
		dispatch(setRefreshTokenFailure(handleError(err)))
		localStorage.set('isLoggedIn', false)
	}
}
