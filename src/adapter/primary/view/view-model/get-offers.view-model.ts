import { InputSelectAutoCompleteValue } from 'adapter/primary/view/atom/input-select-autocomplete.atom'
import { AssetType } from 'core/domain/asset/asset'

export interface GetOffersViewModel {
	startDate?: Date,
	endDate?: Date,
	minPrice?:string,
	maxPrice?: string,
	minArea?:string,
	maxArea?:string
	tags?: string[]
	city?: string
	region?: InputSelectAutoCompleteValue<string>
	type?: InputSelectAutoCompleteValue<AssetType>
}
