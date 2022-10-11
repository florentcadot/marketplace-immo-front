import { CreateAssetActionTypes } from 'store/asset/create-asset/create-asset.types'
import { Asset } from 'core/domain/asset/asset'

export type AssetActionTypes = CreateAssetActionTypes

export interface AssetState {
    asset: {
        create: {
            success: boolean
            error: {
                message: string | null
                code: string | null
            }
            loading: boolean
            data: Asset | undefined
        },
    },

}
