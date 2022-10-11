

export enum AssetType {
	OFFICE = 'bureau(x)',
	WAREHOUSE = 'entrepôt',
	ACCOMODATION = 'logement',
	SERVICE = 'service',
	RETAIL = 'commerce',
	MALL = 'centre commercial',
	AUTHORIRIES = 'service public'
}

export enum AssetTarget {
	ARTIST_CRAFTSMEN = 'Locaux pour artistes et artisans',
	FREELANCE = 'Locaux pour profession libérales',
	STARTUPS = 'Espace de travail pour jeunes entreprises et startups ',
	OTHER = 'Autre'
}


interface Props {
	id: string
	name: string
	country: string
	region: string
	postCode: string
	city: string
	street: string
	buildingNumber: string
	area: number
	type: AssetType
	target: AssetTarget
	standardsCompliance: boolean
	standardsRehabilitation: string
	tags?: string[]
	photos: any
}

export class Asset {
	constructor(private props: Props) {}

	get id() {
		return this.props.id
	}
	get name() {
		return this.props.name
	}
	get country() {
		return this.props.country
	}
	get region() {
		return this.props.region
	}
	get postCode() {
		return this.props.postCode
	}
	get city() {
		return this.props.city
	}
	get street() {
		return this.props.street
	}
	get buildingNumber() {
		return this.props.buildingNumber
	}
	get area() {
		return this.props.area
	}
	get type() {
		return this.props.type
	}
	get target() {
		return this.props.target
	}
	get standardsCompliance() {
		return this.props.standardsCompliance
	}
	get standardsRehabilitation() {
		return this.props.standardsRehabilitation
	}
	get tags() {
		return this.props.tags
	}
	get photos() {
		return this.props.photos
	}

	get fullAddress(){
		return `${this.props.buildingNumber} ${this.props.street} ${this.props.city} ${this.props.postCode}`
	}
}
