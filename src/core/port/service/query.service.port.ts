export interface QueryService {
	parse<T extends object>(query: string): T
}
