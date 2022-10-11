import { User } from 'core/domain/user/user'
import { GetUserProfileActionTypes } from 'store/user/get-user-profile/get-user-profile.types'
import { LoginWithGoogleActionTypes } from 'store/user/login-with-google/login-with-google.types'
import { LogoutActionTypes } from 'store/user/logout/logout.types'
import { GetUserByOfferActionTypes } from 'store/user/get-user-by-offer/get-user-by-offer.types'
import { SetRefreshTokenActionTypes } from 'store/user/set-refresh-token/set-refresh-token.types'

export type UserActionTypes =
    GetUserProfileActionTypes |
    LoginWithGoogleActionTypes |
    LogoutActionTypes |
    GetUserByOfferActionTypes |
    SetRefreshTokenActionTypes

export interface UserState {
  user: {
    get: {
      success: boolean
      error: {
        message: string | null
        code: string | null
      }
      loading: boolean
      data: User | undefined
    }
  }
  otherUser: {
      success: boolean
      error: {
        message: string | null
        code: string | null
      }
      loading: boolean
      data: User | undefined
  }

}
