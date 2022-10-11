import React, { useEffect } from 'react'
import './index.scss'
import 'react-datepicker/dist/react-datepicker.css'
import { AppRoutes } from './adapter/primary/routes/app-routes'
import { useDispatch } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { Redirect, Route, Switch } from 'react-router-dom'
import { VisitorLayout } from 'adapter/primary/view/layout/visitor.layout'
import { LeaseSeekingHome } from 'adapter/primary/view/page/marketplace/lease-seeking-home.page'
import { Offers } from 'adapter/primary/view/page/marketplace/offers.page'
import { OfferDetail } from 'adapter/primary/view/page/marketplace/offer-detail.page'
import { LoggedInRoute } from 'adapter/primary/routes/logged-in-route'
import { OwnerHome } from 'adapter/primary/view/page/marketplace/owner-home.page'
import { LoginLayout } from 'adapter/primary/view/layout/login.layout'
import { LoginPage } from 'adapter/primary/view/page/login.page'
import { SignupPage } from 'adapter/primary/view/page/signup.page'
import { OwnerSuccess } from 'adapter/primary/view/page/marketplace/owner-success.page'
import { LeaseSeekingCustomerNeed } from 'adapter/primary/view/page/marketplace/lease-seeking-customer-need.page'
import { Admin } from 'adapter/primary/view/page/admin.page'
import { LeaseSeekingSuccess } from 'adapter/primary/view/page/marketplace/lease-seeking-success.page'
import { setRefreshToken } from 'core/use-case/user/set-refresh-token.use-case'
import { OwnerPanel } from 'adapter/primary/view/page/marketplace/owner-panel.page'

interface Props {
	history: any
}

export const App = (props: Props) => {

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(setRefreshToken())
	}, [])

	return (
		<ConnectedRouter history={props.history}>
			<div>
				<Switch >
					<Route
						exact
						path="/"
						render={() => {
							return <Redirect to={AppRoutes.ESPACE_LOCATAIRE} />
						}}
					/>
					<Route
						exact
						path={AppRoutes.ESPACE_LOCATAIRE}
						render={() => (
							<VisitorLayout>
								<LeaseSeekingHome />
							</VisitorLayout>
						)}
					/>
					<LoggedInRoute
						exact
						path={AppRoutes.ESPACE_LOCATAIRE_FINALISER_RECHERCHE}
						history={props.history}
						component={() => (
							<VisitorLayout>
								<LeaseSeekingCustomerNeed />
							</VisitorLayout>
						)}
					/>
					<Route
						exact
						path={AppRoutes.ESPACE_LOCATAIRE_OFFRE}
						render={() => (
							<VisitorLayout>
								<Offers />
							</VisitorLayout>
						)}
					/>
					<Route
						exact
						path={`${AppRoutes.ESPACE_LOCATAIRE_OFFRE}/:id`}
						render={() => (
							<VisitorLayout>
								<OfferDetail />
							</VisitorLayout>
						)}
					/>
					<LoggedInRoute
						exact
						path={AppRoutes.ESPACE_PROPRIETAIRE}
						history={props.history}
						component={() => (
							<VisitorLayout>
								<OwnerHome />
							</VisitorLayout>
						)}
					/>
					<LoggedInRoute
						exact
						path={AppRoutes.ESPACE_PROPRIETAIRE_PANEL}
						history={props.history}
						component={() => (
							<VisitorLayout>
								<OwnerPanel />
							</VisitorLayout>
						)}
					/>
					<LoggedInRoute
						exact
						path={AppRoutes.ESPACE_LOCATAIRE_SUCCESS}
						history={props.history}
						component={() => (
							<VisitorLayout>
								<LeaseSeekingSuccess />
							</VisitorLayout>
						)}
					/>
					<LoggedInRoute
						exact
						path={AppRoutes.ESPACE_PROPRIETAIRE_SUCCESS}
						history={props.history}
						component={() => (
							<VisitorLayout>
								<OwnerSuccess />
							</VisitorLayout>
						)}
					/>
					<Route
						exact
						path={AppRoutes.LOGIN}
						render={() => (
							<LoginLayout>
								<LoginPage />
							</LoginLayout>
						)}
					/>
					<Route
						exact
						path={AppRoutes.SIGNUP}
						render={() => (
							<LoginLayout>
								<SignupPage />
							</LoginLayout>
						)}
					/>
					<LoggedInRoute
						exact
						path={AppRoutes.ADMIN}
						history={props.history}
						component={() => (
							<VisitorLayout>
								<Admin />
							</VisitorLayout>
						)}
					/>
				</Switch>
			</div>
		</ConnectedRouter>
	)
}
