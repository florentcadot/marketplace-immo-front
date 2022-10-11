import { Asset } from 'core/domain/asset/asset'
import { CreateAssetRequestDto } from 'adapter/secondary/dto/asset/create-asset.dto'

export interface AssetRepository {
    createAsset(props: CreateAssetRequestDto): Promise<Asset>
}
