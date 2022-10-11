import { CreateCustomerNeedViewModel } from 'adapter/primary/view/view-model/create-customer-need.view-model'

export type HistoryLocationState = {
      from?: string
      to?: string
      createCustomerNeedForm?: CreateCustomerNeedViewModel
    }  | undefined

export interface HistoryLocationService {
  pathname: string
  search: string
  state?: HistoryLocationState
}

export interface HistoryService {
  location: HistoryLocationService
  push(path: string, state?: HistoryLocationState): void
  replace(path: string, state?: any): void
  go(n: number): void
  goBack(): void
  goForward(): void
}
