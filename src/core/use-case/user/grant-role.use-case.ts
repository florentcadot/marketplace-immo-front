import { handleError } from 'core/domain/error/handle-error'
import { UserRole } from 'core/domain/user/user'
import { GrantRoleThunk } from 'store/user/grant-role/grant-role.types'
import { grantRoleFailure, grantRoleRequest, grantRoleSuccess } from 'store/user/grant-role/grant-role.actions'


export const grantRole: GrantRoleThunk = (email: string, role: UserRole) => async (dispatch, getState, { api, queryService, history, localStorage }) => {
	try {
		dispatch(grantRoleRequest())
		await api.user.grantRole(email, role)
		dispatch(grantRoleSuccess())
	} catch (err) {
		dispatch(grantRoleFailure(handleError(err)))
	}
}
