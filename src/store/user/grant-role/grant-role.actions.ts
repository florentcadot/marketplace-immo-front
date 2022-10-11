import { CustomError } from '../../../core/domain/error/custom-error'
import { GrantRoleActionTypes } from 'store/user/grant-role/grant-role.types'

export const grantRoleRequest = (): GrantRoleActionTypes => {
	return {
		type: 'GRANT_ROLE_REQUEST',
	}
}

export const grantRoleSuccess = (): GrantRoleActionTypes => {
	return {
		type: 'GRANT_ROLE_SUCCESS',
	}
}

export const grantRoleFailure = (err: CustomError): GrantRoleActionTypes => {
	return {
		type: 'GRANT_ROLE_FAILURE',
		payload: err,
	}
}
