import { Asset } from 'core/domain/asset/asset'
import { CreateAssetRequestDto, CreateAssetResponseDto } from 'adapter/secondary/dto/asset/create-asset.dto'
import { CreateAssetViewModel } from 'adapter/primary/view/view-model/create-asset.view-model'
import { OfferState } from 'core/domain/offer/offer'
import { v4 as UUID } from 'uuid'

export class CreateAssetMapper {

	public static toApi = (props: CreateAssetViewModel): CreateAssetRequestDto => ({
		assetId: UUID(),
		assetName: props.assetName,
		assetCountry: props.assetCountry,
		assetRegion: props.assetRegion.value,
		assetPostCode: props.assetPostCode,
		assetCity: props.assetCity,
		assetStreet: props.assetStreet,
		assetBuildingNumber: props.assetBuildingNumber,
		assetArea: parseInt(props.assetArea),
		assetType: typeof props.assetType === 'string' ? undefined : props.assetType.value,
		assetTarget: typeof props.assetTarget === 'string' ? undefined : props.assetTarget.value,
		assetStandardsCompliance: props.assetStandardsCompliance,
		assetStandardsRehabilitation: props.assetStandardsRehabilitation? props.assetStandardsRehabilitation : '',
		assetPhotos: props.assetPhotos,
		offerId: UUID(),
		offerTitle: props.assetName,
		offerPrice: parseInt(props.offerPrice),
		offerQuantity: parseInt(props.offerQuantity),
		offerDescription: props.offerDescription,
		offerArea:  parseInt(props.assetArea),
		offerStartDate: props.offerStartDate,
		offerEndDate: props.offerEndDate,
		offerPremium: false,
		offerVisible: false,
		offerState: OfferState.PENDING,
	})

	public static toDomain = (props: CreateAssetResponseDto): Asset =>
		new Asset({
			id: props.id,
			name: props.name,
			country: props.country,
			region: props.region,
			postCode: props.postCode,
			city: props.city,
			street: props.street,
			buildingNumber: props.buildingNumber,
			area: props.area,
			type: props.type,
			target: props.target,
			standardsCompliance: props.standardsCompliance,
			standardsRehabilitation: props.standardsRehabilitation,
			tags: props.tags,
			photos: [],
			// photos: props.photos.map((photo) => new AssetPhoto({
			// 	id: photo.id,
			// 	photoLocation: photo.photoLocation,
			// 	title: photo.title,
			// 	description: photo.description,
			// })),
		})
}
