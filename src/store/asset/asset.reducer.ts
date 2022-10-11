import { AssetActionTypes, AssetState } from 'store/asset/asset.types'

const initialState: AssetState = {
	asset: {
		create: {
			success: false,
			error: {
				message: null,
				code: null,
			},
			loading: false,
			data: undefined,
		},
	},
}

export const assetReducer = (state = initialState, action: AssetActionTypes): AssetState => {
	switch (action.type) {
	case 'CREATE_ASSET_REQUEST': {
		return {
			...state,
			asset: {
				...state.asset,
				create: {
					...state.asset.create,
					loading: true,
				},
			},
		}
	}
	case 'CREATE_ASSET_FAILURE': {
		return {
			...state,
			asset: {
				...state.asset,
				create: {
					...state.asset.create,
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
	case 'CREATE_ASSET_SUCCESS': {
		return {
			...state,
			asset: {
				...state.asset,
				create: {
					...state.asset.create,
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
