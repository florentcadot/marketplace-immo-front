import { User } from 'core/domain/user/user'
import { GetUserByOfferResponseDto } from 'adapter/secondary/dto/user/get-user-by-offer.dto'

export class GetUserByOfferMapper {
	public static toDomain = (props: GetUserByOfferResponseDto): User => {
		return new User({
			id: props.id,
			firstname: props.firstname,
			lastname: props.lastname,
			email: props.email,
			phoneNumber: props.phoneNumber,
			jobTitle: props.jobTitle,
		})
	}
}