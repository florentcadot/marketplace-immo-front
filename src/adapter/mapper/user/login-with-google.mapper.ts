import { User } from 'core/domain/user/user'
import { LoginWithGoogleResponseDto } from 'adapter/secondary/dto/user/login-with-google.dto'

export class LoginWithGoogleMapper {
	public static toDomain = (props: LoginWithGoogleResponseDto): User =>
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
