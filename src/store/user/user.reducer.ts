import { UserActionTypes, UserState } from './user.types'

const initialState: UserState = {
	user: {
		get: {
			success: false,
			error: {
				message: null,
				code: null,
			},
			loading: false,
			data: undefined,
		},
	},
	otherUser: {
		success: false,
		error: {
			message: null,
			code: null,
		},
		loading: false,
		data: undefined,
	},
}

export const userReducer = (state = initialState, action: UserActionTypes): UserState => {
	switch (action.type) {
	case 'SET_REFRESH_TOKEN_REQUEST': {
		return {
			...state,
			user: {
				...state.user,
				get: {
					...state.user.get,
					loading: true,
				},
			},
		}
	}
	case 'SET_REFRESH_TOKEN_FAILURE': {
		return {
			...state,
			user: {
				...state.user,
				get: {
					...state.user.get,
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
	case 'SET_REFRESH_TOKEN_SUCCESS': {
		return {
			...state,
			user: {
				...state.user,
				get: {
					...state.user.get,
					loading: false,
					success: true,
					data: action.payload,
				},
			},
		}
	}
	case 'LOGIN_WITH_GOOGLE_REQUEST': {
		return {
			...state,
			user: {
				...state.user,
				get: {
					...state.user.get,
					loading: true,
				},
			},
		}
	}
	case 'LOGIN_WITH_GOOGLE_FAILURE': {
		return {
			...state,
			user: {
				...state.user,
				get: {
					...state.user.get,
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
	case 'LOGIN_WITH_GOOGLE_SUCCESS': {
		return {
			...state,
			user: {
				...state.user,
				get: {
					...state.user.get,
					loading: false,
					success: true,
					data: action.payload,
				},
			},
		}
	}
	case 'LOGOUT_REQUEST': {
		return {
			...state,
			user: {
				...state.user,
				get: {
					...state.user.get,
					loading: true,
				},
			},
		}
	}
	case 'LOGOUT_FAILURE': {
		return {
			...state,
			user: {
				...state.user,
				get: {
					...state.user.get,
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
	case 'LOGOUT_SUCCESS': {
		return {
			...state,
			user: {
				...state.user,
				get: {
					...state.user.get,
					loading: false,
					success: true,
					data: undefined,
				},
			},
		}
	}
	case 'GET_USER_BY_OFFER_REQUEST': {
		return {
			...state,
			otherUser: {
				...state.otherUser,
				loading: true,
			},
		}
	}
	case 'GET_USER_BY_OFFER_FAILURE': {
		return {
			...state,
			otherUser: {
				...state.otherUser,
				loading: false,
				success: false,
				error: {
					message: action.payload.message,
					code: action.payload.code || null,
				},
			},
		}
	}
	case 'GET_USER_BY_OFFER_SUCCESS': {
		return {
			...state,
			otherUser: {
				...state.otherUser,
				loading: false,
				success: true,
				data: action.payload,
			},
		}
	}
	case 'GET_USER_PROFILE_REQUEST': {
		return {
			...state,
			otherUser: {
				...state.otherUser,
				loading: true,
			},
		}
	}
	case 'GET_USER_PROFILE_FAILURE': {
		return {
			...state,
			otherUser: {
				...state.otherUser,
				loading: false,
				success: false,
				error: {
					message: action.payload.message,
					code: action.payload.code || null,
				},
			},
		}
	}
	case 'GET_USER_PROFILE_SUCCESS': {
		return {
			...state,
			otherUser: {
				...state.otherUser,
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
