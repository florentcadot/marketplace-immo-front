import { AssetTarget, AssetType } from 'core/domain/asset/asset'
import { InputSelectAutoCompleteValue } from 'adapter/primary/view/atom/input-select-autocomplete.atom'

export interface CreateAssetViewModel {
    assetName: string
    assetCountry: string
    assetRegion: InputSelectAutoCompleteValue<string>
    assetPostCode: string
    assetCity: string
    assetStreet: string
    assetBuildingNumber: string
    assetArea: string
    assetType: InputSelectAutoCompleteValue<AssetType> | string
    assetTarget: InputSelectAutoCompleteValue<AssetTarget>  | string
    assetStandardsCompliance: boolean
    assetStandardsRehabilitation?: string
    assetPhotos: File[]
    offerPrice: string
    offerQuantity: string
    offerDescription: string
    offerStartDate: Date
    offerEndDate: Date
}


