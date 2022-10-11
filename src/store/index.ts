import { combineReducers, Reducer } from 'redux'
import { UserState } from 'store/user/user.types'
import { userReducer } from 'store/user/user.reducer'
import { OfferState } from 'store/offer/offer.types'
import { offerReducer } from 'store/offer/offer.reducer'
import { connectRouter } from 'connected-react-router'
import { AssetState } from 'store/asset/asset.types'
import { assetReducer } from 'store/asset/asset.reducer'
import { CustomerNeedState } from 'store/customerNeed/customer-need.types'
import { customerNeedReducer } from 'store/customerNeed/customer-need.reducer'

export interface AppState {
	router: any
	user: UserState
	offer: OfferState
	asset: AssetState
	customerNeed: CustomerNeedState
}

export default (history: any): Reducer<AppState> =>
	combineReducers<AppState>({
		router: connectRouter(history),
		user: userReducer,
		offer: offerReducer,
		asset: assetReducer,
		customerNeed: customerNeedReducer,
	})
