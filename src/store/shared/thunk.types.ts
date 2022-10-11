import { ThunkAction } from 'redux-thunk'
import { Action } from 'redux'
import { AppState } from '../index'
import { HistoryService } from 'core/port/service/history.service.port'
import { LocalStorage } from 'core/port/service/local-storage.service.port'
import { DependencyRepository } from 'core/port/repository/dependency.repository.port'
import { QueryService } from 'core/port/service/query.service.port'

export interface ExtraArguments {
  api: DependencyRepository
  history: HistoryService
  localStorage: LocalStorage,
  queryService: QueryService
}

export type SharedThunkAction<ActionTypes extends Action<string>> = ThunkAction<
  void,
  AppState,
  ExtraArguments,
  ActionTypes
>
