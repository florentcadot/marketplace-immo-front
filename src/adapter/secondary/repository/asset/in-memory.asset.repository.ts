import {
	InMemoryRepositoryDependency
} from 'adapter/secondary/repository/shared/dependencies/in-memory.dependency.repository'
import { AssetRepository } from 'core/port/repository/asset.repository.port'
import { Asset } from 'core/domain/asset/asset'
import { CreateAssetRequestDto } from 'adapter/secondary/dto/asset/create-asset.dto'

export class InMemoryAssetRepository extends InMemoryRepositoryDependency implements AssetRepository {
	constructor() {
		super()
	}
	public async createAsset(props: CreateAssetRequestDto): Promise<Asset> {
		throw new Error('Not implemented')
	}

}
