import { handleError } from 'core/domain/error/handle-error'
import {
	loginWithGoogleFailure,
	loginWithGoogleRequest,
	loginWithGoogleSuccess
} from 'store/user/login-with-google/login-with-google.actions'
import { LoginWithGoogleThunk } from 'store/user/login-with-google/login-with-google.types'
import { AppRoutes } from 'adapter/primary/routes/app-routes'
import { HistoryService } from 'core/port/service/history.service.port'

const handleNavigation = (history: HistoryService) => {
	if (history.location.state?.to) return history.push(history.location.state.to, history.location.state)
	if (history.location.state?.from) return history.push(history.location.state.from, history.location.state)
	history.push(AppRoutes.ESPACE_LOCATAIRE)
}

export const loginWithGoogle: LoginWithGoogleThunk = (accessToken: string) => async (dispatch, getState, { api, queryService, history, localStorage }) => {
	try {
		dispatch(loginWithGoogleRequest())
		const data = await api.user.loginWithGoogle(accessToken)
		dispatch(loginWithGoogleSuccess(data))
		localStorage.set('isLoggedIn', true)
		handleNavigation(history)
		window.location.reload()
	} catch (err) {
		dispatch(loginWithGoogleFailure(handleError(err)))
		localStorage.set('isLoggedIn', false)
	}
}
