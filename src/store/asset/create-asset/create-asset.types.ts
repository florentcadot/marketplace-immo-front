import { CustomError } from '../../../core/domain/error/custom-error'
import { SharedThunkAction } from '../../shared/thunk.types'
import { Asset } from 'core/domain/asset/asset'
import { CreateAssetViewModel } from 'adapter/primary/view/view-model/create-asset.view-model'

interface CreateAssetRequest {
    type: 'CREATE_ASSET_REQUEST'
}

interface CreateAssetSuccess {
    type: 'CREATE_ASSET_SUCCESS'
    payload: Asset
}

interface CreateAssetFailure {
    type: 'CREATE_ASSET_FAILURE'
    payload: CustomError
}

export type CreateAssetActionTypes =
    | CreateAssetRequest
    | CreateAssetSuccess
    | CreateAssetFailure

export type CreateAssetThunk = (props: CreateAssetViewModel) => SharedThunkAction<CreateAssetActionTypes>
