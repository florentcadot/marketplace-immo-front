import { formatDate } from 'adapter/secondary/service/date.service'

export enum OfficeType {
    COWORKING = 'Coworking',
    FULL_SPACE = 'Espace entier',
    SHARED_SPACE = 'Espace partagé'
}


interface Props {
    id: string
    startDate: Date
		endDate?: Date
		price?: number
		minArea?: number
		maxArea?: number
		userId?: string
    country: string
    city: string
    region?: string
    office: boolean
    officeType?: OfficeType
    warehouse: boolean
    workshop: boolean
}

export class CustomerNeed {
	constructor(private props: Props) {}

	get id() {
		return this.props.id
	}

	get userId() {
		return this.props.userId
	}

	get startDate() {
		return formatDate(this.props.startDate)
	}

	get endDate() {
		return this.props.endDate
	}

	get price() {
		return this.props.price
	}

	get minArea() {
		return this.props.minArea
	}

	get maxArea() {
		return this.props.maxArea
	}

	get country() {
		return this.props.country
	}

	get city() {
		return this.props.city
	}

	get region() {
		return this.props.region
	}

	get office() {
		return this.props.office
	}

	get officeType() {
		return this.props.officeType
	}

	get warehouse() {
		return this.props.warehouse
	}

	get workshop() {
		return this.props.workshop
	}

}
