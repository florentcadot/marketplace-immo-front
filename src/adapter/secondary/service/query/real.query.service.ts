import { QueryService } from 'core/port/service/query.service.port'
import QueryString from 'query-string'

export class RealQueryService implements QueryService {
	public parse<T extends object>(query: string): T {
		return QueryString.parse(query) as T
	}
}
