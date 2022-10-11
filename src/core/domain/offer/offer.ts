import { monthDiff } from '../../../util'
import { AssetType } from 'core/domain/asset/asset'
import { formatDate } from 'adapter/secondary/service/date.service'

export enum OfferState {
	PENDING = 'pending',
	RENT = 'rent'
}

export interface OfferAssetPhoto {
	photoLocation: string
	title: string
}

interface Props {
	id: string
	title: string
	description: string
	startDate: Date
	endDate: Date
	price: number
	area: number
	quantity: number
	state: OfferState
	assetCount: number
	photos: OfferAssetPhoto[]
	tags: string[]
	country: string
	city: string
	region: string
	street: string
	buildingNumber: string
	type: AssetType
}

export class Offer {
	constructor(private props: Props) {}

	get id() {
		return this.props.id
	}

	get title() {
		return this.props.title
	}

	get description() {
		return this.props.description
	}

	get startDate() {
		return formatDate(this.props.startDate)
	}

	get endDate() {
		return formatDate(this.props.endDate)
	}

	get price() {
		return this.props.price
	}

	get area() {
		return this.props.area
	}

	get quantity() {
		return this.props.quantity
	}

	get state() {
		return this.props.state
	}

	get photos() {
		return this.props.photos
	}

	get assetCount() {
		return this.props.assetCount
	}

	get tags() {
		return this.props.tags
	}

	get monthsCommitment() {
		return monthDiff(this.props.startDate, this.props.endDate)
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

	get street() {
		return this.props.street
	}

	get buildingNumber() {
		return this.props.buildingNumber
	}

	get type() {
		return this.props.type
	}

}
