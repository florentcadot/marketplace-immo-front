import { CustomError } from '../../../../core/domain/error/custom-error'
import { LocalStorage } from '../../../../core/port/service/local-storage.service.port'
import { ModelKeyLocalStorage } from './model.local-storage'

export class InMemoryLocalStorage implements LocalStorage {
	public get<T extends object | null>(key: ModelKeyLocalStorage): T | null {
		switch (key) {
		case 'isLoggedIn':
			const payload = {
				isLoggedIn: true,
			}
			return payload as T

		default:
			break
		}
		return null
	}
	public getOrThrow<T extends object | null>(key: ModelKeyLocalStorage): T {
		switch (key) {
		case 'isLoggedIn':
			const payload = {
				isLoggedIn: true,
			}
			return payload as T

		default:
			break
		}
		throw new CustomError('no isLoggedIn found')
	}
	public set<T>(key: ModelKeyLocalStorage, object: T): void {}
	public clear(): void {}
	public remove(key: 'isLoggedIn'): void {}
}
