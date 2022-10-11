import { GetCustomerNeedsViewModel } from 'adapter/primary/view/view-model/get-customer-needs.view-model'
import {
	GetCustomerNeedsRequestDto,
	GetCustomerNeedsResponseDto
} from 'adapter/secondary/dto/customer-need/get-customer-needs.dto'
import { CustomerNeed, OfficeType } from 'core/domain/customer-need/customer-need'

export class GetCustomerNeedsMapper {

	public static toApi = (props: GetCustomerNeedsViewModel): GetCustomerNeedsRequestDto =>({
		startDate: props.startDate,
		endDate: props.endDate,
		minPrice:props.minPrice ? parseInt(props.minPrice) : undefined,
		maxPrice: props.maxPrice ? parseInt(props.maxPrice) : undefined,
		minArea: props.minArea ? parseInt(props.minArea) : undefined,
		maxArea: props.maxArea ? parseInt(props.maxArea) : undefined,
		city: props.city,
		region: typeof props.region !== 'string' && props.region ? props.region.value : undefined,
		workshop: props.workshop,
		office: props.office,
		warehouse: props.warehouse,
	})


	public static toDomain = (props: GetCustomerNeedsResponseDto): CustomerNeed =>
		new CustomerNeed({
			id: props.id,
			userId: props.userId,
			startDate: new Date(props.startDate),
			endDate: props.endDate ? new Date(props.endDate) : undefined,
			price: props.price,
			maxArea: props.maxArea,
			minArea: props.minArea,
			country: props.country,
			city: props.city,
			region: props.region,
			office: props.office,
			officeType: props.officeType ? props.officeType[0] : undefined, //TODO
			warehouse: props.warehouse,
			workshop: props.workshop,
		})
}