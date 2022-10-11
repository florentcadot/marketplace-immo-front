interface Props {
	id: string
	firstname: string
	lastname: string
	email: string
	phoneNumber?: string
	photoLocation?: string
	companyId?: string
	jobTitle?: string
	role?: string
	isActive?: boolean
}

export enum UserRole {
	USER = 'user',
	ADMIN = 'admin',
	OWNER = 'owner'
}

export class User {
	constructor(private props: Props) {}

	get id(): string {
		return this.props.id
	}

	get firstname(): string {
		return this.props.firstname
	}

	get lastname(): string {
		return this.props.lastname
	}

	get fullName(): string {
		return `${this.props.firstname} ${this.lastname}`
	}

	get email(): string {
		return this.props.email
	}

	get phoneNumber() {
		return this.props.phoneNumber
	}

	get photoLocation() {
		return this.props.photoLocation
	}

	get companyId() {
		return this.props.companyId
	}

	get jobTitle() {
		return this.props.jobTitle
	}

	get role() {
		return this.props.role
	}

	get isActive() {
		return this.props.isActive
	}

}
