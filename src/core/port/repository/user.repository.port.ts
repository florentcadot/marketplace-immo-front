import { User, UserRole } from 'core/domain/user/user'

export interface UserRepository {
  getUserProfile(id: string): Promise<User>
  setRefreshToken(): Promise<User>
  getUserByOffer(offerId: string): Promise<User>
  loginWithGoogle(accessToken: string): Promise<User>
  logout(): Promise<void>
  grantRole(email: string, role: UserRole): Promise<void>
}
