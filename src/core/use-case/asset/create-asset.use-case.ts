import { CreateAssetThunk } from 'store/asset/create-asset/create-asset.types'
import { createAssetFailure, createAssetRequest, createAssetSuccess } from 'store/asset/create-asset/create-asset.actions'
import { handleError } from 'core/domain/error/handle-error'
import { CreateAssetMapper } from 'adapter/mapper/asset/create-asset.mapper'
import { AppRoutes } from 'adapter/primary/routes/app-routes'

export const createAsset: CreateAssetThunk = (props) => async (dispatch, getState, { api, queryService, history, localStorage }) => {
	try {
		dispatch(createAssetRequest())
		const data = await api.asset.createAsset(CreateAssetMapper.toApi(props))
		dispatch(createAssetSuccess(data))
		history.push(AppRoutes.ESPACE_PROPRIETAIRE_SUCCESS)
	} catch (err) {
		dispatch(createAssetFailure(handleError(err)))
	}
}
