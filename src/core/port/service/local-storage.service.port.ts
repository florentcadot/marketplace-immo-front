import { ModelKeyLocalStorage } from 'adapter/secondary/service/local-storage/model.local-storage'

export interface LocalStorage {
  get<T extends object | null>(key: ModelKeyLocalStorage): T | null
  getOrThrow<T extends object | null>(key: ModelKeyLocalStorage): T
  set<T>(key: ModelKeyLocalStorage, object: T): void
  remove(key: ModelKeyLocalStorage): void
  clear(): void
}
