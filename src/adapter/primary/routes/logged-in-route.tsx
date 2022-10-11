import React from 'react'
import { Redirect, Route, useLocation } from 'react-router-dom'
import { HistoryLocationState, HistoryService } from 'core/port/service/history.service.port'
import { AppRoutes } from 'adapter/primary/routes/app-routes'
import { RealLocalStorageService } from 'adapter/secondary/service/local-storage/real.local-storage.service'

interface Props {
    history?: HistoryService;
    component: any;
    exact: boolean;
    isTrial?: boolean;
    path: string;
}

export const LoggedInRoute = ({ component: Component, history, ...rest }: Props) => {

	const localStorage = new RealLocalStorageService()
	const isLoggedIn = localStorage.get('isLoggedIn')
	const location = useLocation<HistoryLocationState>()

	if (isLoggedIn) return <Route {...rest} render={(props) => <Component {...props}  />} />

	return (
		<Redirect
			to={{
				pathname: AppRoutes.LOGIN,
				state: {
					to: rest.path,
					...location.state,
				},
			}}
		/>
	)
}
