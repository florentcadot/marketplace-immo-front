import { AxiosError } from 'axios'
import { CustomError } from './custom-error'

export const handleError = (err: AxiosError | CustomError | any): CustomError => {
	if (err instanceof CustomError) {
		return err
	}
	if (err.response?.data) {
		// if (typeof err.response.data === "object" && err.response.data.message)
		//     return new CustomError(err.response.data.message, err.response.data.code || "");
		return new CustomError(err.response.data)
	}
	return new CustomError(err.message as string)
}
