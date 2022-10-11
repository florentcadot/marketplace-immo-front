import {
	HistoryLocationService,
	HistoryService
} from '../../../../core/port/service/history.service.port'

export class InMemoryCustomHistory implements HistoryService {
	public pushWith: string[] = []
	public location: HistoryLocationService = {
		pathname: '',
		search: '',
		state: {
			from: '',
			to: '',
		},
	}
	push(path: string): void {
		this.pushWith = [path]
		return
	}
	replace(path: string): void {
		return
	}
	go(n: number): void {
		return
	}
	goBack(): void {
		return
	}
	goForward(): void {
		return
	}
}
