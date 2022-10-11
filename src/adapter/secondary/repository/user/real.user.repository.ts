import { RealSharedRepository } from '../shared/real.shared.repository'
import { UserRepository } from 'core/port/repository/user.repository.port'
import { User, UserRole } from 'core/domain/user/user'
import { GetUserProfileMapper } from 'adapter/mapper/user/get-user-profile.mapper'
import { GetUserProfileResponseDto } from 'adapter/secondary/dto/user/get-user-profile.dto'
import { LoginWithGoogleResponseDto } from 'adapter/secondary/dto/user/login-with-google.dto'
import { LoginWithGoogleMapper } from 'adapter/mapper/user/login-with-google.mapper'
import { GetUserByOfferMapper } from 'adapter/mapper/user/get-user-by-offer.mapper'
import { GetUserByOfferResponseDto } from 'adapter/secondary/dto/user/get-user-by-offer.dto'

export class RealUserRepository extends RealSharedRepository implements UserRepository {
	constructor() {
		super()
	}

	public async setRefreshToken(): Promise<User> {
		const response = await this.instance.get<GetUserProfileResponseDto>('/authentication/refresh')
		return GetUserProfileMapper.toDomain(response.data)
	}

	public async loginWithGoogle(accessToken: string): Promise<User> {
		const response = await this.instance.post<LoginWithGoogleResponseDto>('/google-authentication', { token: accessToken })
		return  LoginWithGoogleMapper.toDomain(response.data)
	}

	public async logout(): Promise<void> {
		await this.instance.post('/authentication/logout')
	}

	public async getUserByOffer(offerId: string): Promise<User> {
		const response = await this.instance.get<GetUserByOfferResponseDto>(`/user?offerId=${offerId}`)
		return GetUserByOfferMapper.toDomain(response.data)
	}

	public async getUserProfile(id: string): Promise<User> {
		const response = await this.instance.get<GetUserProfileResponseDto>(`/user/${id}`)
		return GetUserProfileMapper.toDomain(response.data)
	}

	public async grantRole(email: string, role: UserRole): Promise<void> {
		await this.instance.patch('/user', { email, role })
	}

}
