import { CustomError } from '../../../core/domain/error/custom-error'
import { SharedThunkAction } from '../../shared/thunk.types'
import { User, UserRole } from 'core/domain/user/user'

interface GrantRoleRequest {
    type: 'GRANT_ROLE_REQUEST'
}

interface GrantRoleSuccess {
    type: 'GRANT_ROLE_SUCCESS'
}

interface GrantRoleFailure {
    type: 'GRANT_ROLE_FAILURE'
    payload: CustomError
}

export type GrantRoleActionTypes =
    | GrantRoleRequest
    | GrantRoleSuccess
    | GrantRoleFailure

export type GrantRoleThunk = (email: string, role: UserRole) => SharedThunkAction<GrantRoleActionTypes>
