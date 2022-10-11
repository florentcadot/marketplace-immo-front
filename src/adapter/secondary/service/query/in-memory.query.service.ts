import { QueryService } from 'core/port/service/query.service.port'

export class InMemoryQueryService implements QueryService {
	public parse<T extends object>(query: string): T {
		return {} as T
	}
}
