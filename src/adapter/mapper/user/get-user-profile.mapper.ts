import { GetUserProfileResponseDto } from 'adapter/secondary/dto/user/get-user-profile.dto'
import { User } from 'core/domain/user/user'

export class GetUserProfileMapper {
	public static toDomain = (props: GetUserProfileResponseDto): User =>
		new User({
			id: props.id,
			firstname: props.firstname,
			lastname: props.lastname,
			email: props.email,
			phoneNumber: props.phoneNumber,
			photoLocation: props.photoLocation,
			companyId: props.companyId,
			jobTitle: props.jobTitle,
			role: props.role,
			isActive: props.isActive,
		})
}
