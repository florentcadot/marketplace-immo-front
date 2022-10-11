import { OfferActionTypes, OfferState } from './offer.types'

const initialState: OfferState = {
	offers: {
		get: {
			success: false,
			error: {
				message: null,
				code: null,
			},
			loading: false,
			data: [],
		},
	},
}

export const offerReducer = (state = initialState, action: OfferActionTypes): OfferState => {
	switch (action.type) {
	case 'GET_OFFERS_REQUEST': {
		return {
			...state,
			offers: {
				...state.offers,
				get: {
					...state.offers.get,
					loading: true,
				},
			},
		}
	}
	case 'GET_OFFERS_FAILURE': {
		return {
			...state,
			offers: {
				...state.offers,
				get: {
					...state.offers.get,
					loading: false,
					success: false,
					error: {
						message: action.payload.message,
						code: action.payload.code || null,
					},
				},
			},
		}
	}
	case 'GET_OFFERS_SUCCESS': {
		return {
			...state,
			offers: {
				...state.offers,
				get: {
					...state.offers.get,
					loading: false,
					success: true,
					data: action.payload,
				},
			},
		}
	}
	default:
		return state
	}
}
