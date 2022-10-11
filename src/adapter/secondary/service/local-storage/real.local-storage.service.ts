import { CustomError } from '../../../../core/domain/error/custom-error'
import { LocalStorage } from '../../../../core/port/service/local-storage.service.port'
import { ModelKeyLocalStorage } from './model.local-storage'

export class RealLocalStorageService implements LocalStorage {
	public get<T extends object | null>(key: ModelKeyLocalStorage): T | null {
		const stringObject = localStorage.getItem(key)
		if (!stringObject) return null
		return JSON.parse(stringObject)
	}
	public getOrThrow<T extends object | null>(key: ModelKeyLocalStorage): T {
		const stringObject = localStorage.getItem(key)
		if (!stringObject) throw new CustomError('please log in', 'please-log-in')
		return JSON.parse(stringObject)
	}
	public set<T>(key: ModelKeyLocalStorage, object: T): void {
		localStorage.setItem(key, JSON.stringify(object))
	}
	public clear(): void {
		localStorage.clear()
	}
	public remove(key: ModelKeyLocalStorage): void {
		localStorage.removeItem(key)
	}
}
