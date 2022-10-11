import { RealSharedRepository } from 'adapter/secondary/repository/shared/real.shared.repository'
import { AssetRepository } from 'core/port/repository/asset.repository.port'
import { Asset } from 'core/domain/asset/asset'
import { CreateAssetRequestDto, CreateAssetResponseDto } from 'adapter/secondary/dto/asset/create-asset.dto'
import { CreateAssetMapper } from 'adapter/mapper/asset/create-asset.mapper'

export class RealAssetRepository extends RealSharedRepository implements AssetRepository {
	constructor() {
		super()
	}

	public async createAsset(props: CreateAssetRequestDto): Promise<Asset> {
		const response = await this.instance.post<CreateAssetResponseDto>('/asset', props)
		return CreateAssetMapper.toDomain(response.data)
	}
}
