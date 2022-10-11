import React from 'react'
import { render } from 'react-dom'
import { App } from './App'
import { routerMiddleware } from 'connected-react-router'
import '../styles.css'
import thunk from 'redux-thunk'
import { RealRepositoryDependency } from 'adapter/secondary/repository/shared/dependencies/real.dependency.repository'
import { RealLocalStorageService } from 'adapter/secondary/service/local-storage/real.local-storage.service'
import { RealCustomHistoryService } from 'adapter/secondary/service/history/real.custom-history.service'
import { applyMiddleware, createStore } from 'redux'
import createRootReducer from './store'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'
import { RealQueryService } from 'adapter/secondary/service/query/real.query.service'

const middlewares = [
	routerMiddleware(RealCustomHistoryService),
	thunk.withExtraArgument({
		api: new RealRepositoryDependency(),
		localStorage: new RealLocalStorageService(),
		history: RealCustomHistoryService,
		queryService: new RealQueryService(),
	}),
]

const store = createStore(
	createRootReducer(RealCustomHistoryService),
	composeWithDevTools(applyMiddleware(...middlewares))
)

render(
	<Provider store={store}>
		<App  history={RealCustomHistoryService}/>
	</Provider>,
	document.getElementById('root')
)
