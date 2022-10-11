import { handleError } from 'core/domain/error/handle-error'
import { LogoutThunk } from 'store/user/logout/logout.types'
import { logoutFailure, logoutRequest, logoutSuccess } from 'store/user/logout/logout.actions'
import { AppRoutes } from 'adapter/primary/routes/app-routes'

export const logout: LogoutThunk = () => async (dispatch, getState, { api, history, localStorage }) => {
	try {
		dispatch(logoutRequest())
		await api.user.logout()
		dispatch(logoutSuccess())
		localStorage.set('isLoggedIn', false)
	} catch (err) {
		dispatch(logoutFailure(handleError(err)))
		localStorage.set('isLoggedIn', false)
	}
	history.push(AppRoutes.ESPACE_LOCATAIRE)
}
