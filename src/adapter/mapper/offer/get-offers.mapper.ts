import { GetOffersRequestDto, GetOffersResponseDto } from 'adapter/secondary/dto/offer/get-offers.dto'
import { Offer } from 'core/domain/offer/offer'
import { GetOffersViewModel } from 'adapter/primary/view/view-model/get-offers.view-model'

export class GetOffersMapper {

	public static toApi = (props: GetOffersViewModel): GetOffersRequestDto =>({
		startDate: props.startDate,
		endDate: props.endDate,
		minPrice:props.minPrice ? parseInt(props.minPrice) : undefined,
		maxPrice: props.maxPrice ? parseInt(props.maxPrice) : undefined,
		minArea:props.minArea ? parseInt(props.minArea) : undefined,
		maxArea:props.maxArea ? parseInt(props.maxArea) : undefined,
		tags: props.tags,
		city: props.city,
		region: typeof props.region !== 'string' && props.region ? props.region.value : undefined,
		type: typeof props.type !== 'string' && props.type ? props.type.value : undefined,
	})


	public static toDomain = (props: GetOffersResponseDto): Offer =>
		new Offer({
			id: props.id,
			title: props.title,
			description: props.description,
			startDate: new Date(props.startDate),
			endDate: new Date(props.endDate),
			price: props.price,
			area: props.area,
			quantity: props.quantity,
			state: props.state,
			photos: props.photos,
			assetCount: props.assetCount,
			tags: props.tags,
			country: props.assets[0].country,
			city: props.assets[0].city,
			region: props.assets[0].region,
			street: props.assets[0].street,
			buildingNumber: props.assets[0].buildingNumber,
			type: props.assets[0].type,
		})
}