import { v4 as UUID } from 'uuid'
import { CreateCustomerNeedViewModel } from 'adapter/primary/view/view-model/create-customer-need.view-model'
import { CreateCustomerNeedRequestDto } from 'adapter/secondary/dto/customer-need/create-customer-need.dto'

export class CreateCustomerNeedMapper {

	public static toApi = (props: CreateCustomerNeedViewModel): CreateCustomerNeedRequestDto => ({
		id: UUID(),
		city: props.city,
		startDate: props.startDate,
		country: props.country ? props.country : 'France',
		minArea: props.minArea?.length ? parseInt(props.minArea): undefined,
		maxArea: props.maxArea?.length ? parseInt(props.maxArea): undefined,
		price: props.price?.length ? parseInt(props.price): undefined,
		office: props.office,
		officeType: props.officeType,
		warehouse: props.warehouse,
		workshop: props.workshop,
	})

}
