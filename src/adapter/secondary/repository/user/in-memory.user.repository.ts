import { UserRepository } from 'core/port/repository/user.repository.port'
import { User, UserRole } from 'core/domain/user/user'
import { InMemoryRepositoryDependency } from '../shared/dependencies/in-memory.dependency.repository'

export class InMemoryUserRepository extends InMemoryRepositoryDependency implements UserRepository {
	constructor() {
		super()
	}
	public async setRefreshToken(): Promise<User> {
		throw new Error('Not implemented')
	}

	public async loginWithGoogle(accesstoken: string): Promise<User> {
		throw new Error('Not implemented')
	}

	public async logout(): Promise<void> {
		throw new Error('Not implemented')
	}

	public getUserByOffer(offerId: string): Promise<User> {
		throw new Error('Not implemented')
	}

	public async getUserProfile(id:string): Promise<User> {
		throw new Error('Not implemented')
	}

	public async grantRole(email: string, role: UserRole): Promise<void> {
		throw new Error('Not implemented')
	}



}
