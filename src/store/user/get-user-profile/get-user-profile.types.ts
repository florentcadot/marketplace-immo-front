import { CustomError } from '../../../core/domain/error/custom-error'
import { SharedThunkAction } from '../../shared/thunk.types'
import { User } from 'core/domain/user/user'

interface GetUserProfileRequest {
  type: 'GET_USER_PROFILE_REQUEST'
}

interface GetUserProfileSuccess {
  type: 'GET_USER_PROFILE_SUCCESS'
  payload: User
}

interface GetUserProfileFailure {
  type: 'GET_USER_PROFILE_FAILURE'
  payload: CustomError
}

export type GetUserProfileActionTypes =
  | GetUserProfileRequest
  | GetUserProfileSuccess
  | GetUserProfileFailure

export type GetUserProfileThunk = (userId: string) => SharedThunkAction<GetUserProfileActionTypes>
