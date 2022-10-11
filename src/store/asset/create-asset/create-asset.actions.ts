import { CustomError } from '../../../core/domain/error/custom-error'
import { CreateAssetActionTypes } from 'store/asset/create-asset/create-asset.types'
import { Asset } from 'core/domain/asset/asset'

export const createAssetRequest = (): CreateAssetActionTypes => {
	return {
		type: 'CREATE_ASSET_REQUEST',
	}
}

export const createAssetSuccess = (asset: Asset): CreateAssetActionTypes => {
	return {
		type: 'CREATE_ASSET_SUCCESS',
		payload: asset,
	}
}

export const createAssetFailure = (err: CustomError): CreateAssetActionTypes => {
	return {
		type: 'CREATE_ASSET_FAILURE',
		payload: err,
	}
}
