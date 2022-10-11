import { CustomerNeedActionTypes, CustomerNeedState } from 'store/customerNeed/customer-need.types'

const initialState: CustomerNeedState = {
	customerNeed: {
		create: {
			success: false,
			error: {
				message: null,
				code: null,
			},
			loading: false,
		},
	},
	customerNeeds: {
		success: false,
		error: {
			message: null,
			code: null,
		},
		loading: false,
		data: [],
	},
}

export const customerNeedReducer = (state = initialState, action: CustomerNeedActionTypes): CustomerNeedState => {
	switch (action.type) {
	case 'CREATE_CUSTOMER_NEED_REQUEST': {
		return {
			...state,
			customerNeed: {
				...state.customerNeed,
				create: {
					...state.customerNeed.create,
					loading: true,
				},
			},
		}
	}
	case 'CREATE_CUSTOMER_NEED_FAILURE': {
		return {
			...state,
			customerNeed: {
				...state.customerNeed,
				create: {
					...state.customerNeed.create,
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
	case 'CREATE_CUSTOMER_NEED_SUCCESS': {
		return {
			...state,
			customerNeed: {
				...state.customerNeed,
				create: {
					...state.customerNeed.create,
					loading: false,
					success: true,
				},
			},
		}
	}
	case 'GET_CUSTOMER_NEEDS_REQUEST': {
		return {
			...state,
			customerNeeds: {
				...state.customerNeeds,
				loading: true,
			},
		}
	}
	case 'GET_CUSTOMER_NEEDS_FAILURE': {
		return {
			...state,
			customerNeeds: {
				...state.customerNeeds,
				loading: false,
				success: false,
				error: {
					message: action.payload.message,
					code: action.payload.code || null,
				},
			},
		}
	}
	case 'GET_CUSTOMER_NEEDS_SUCCESS': {
		return {
			...state,
			customerNeeds: {
				...state.customerNeed.create,
				loading: false,
				success: true,
				data: action.payload,
			},
		}
	}

	default:
		return state
	}
}
