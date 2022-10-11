import axios from 'axios'
import { domain } from '../../../../../env'

export class RealSharedRepository {
	protected instance = axios.create({
		baseURL: `${domain}/api`,
		withCredentials: true,
	})

	constructor() {
		// TODO dependency injection for repositories, this current class is instantiated xnumber of repo class (inheritance)
		this.instance.interceptors.response.use(
			(res) => res,
			async (error) => {
				const originalRequest = error.config
				if(error.status === 401 && !originalRequest._retry) {
					// TODO call refresh endpoint to get new access token and api call again with the original request
				}
				return Promise.reject(error)
			}

		)
	}
}
