import { AssetTarget, AssetType } from 'core/domain/asset/asset'
import { OfferState } from 'core/domain/offer/offer'

interface AssetPhotoDto {
    id: string
    photoLocation: string
    title: string
    description?: string
}

export interface CreateAssetResponseDto {
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
    photos: AssetPhotoDto[]
}

export interface CreateAssetRequestDto {
    assetId: string
    assetName: string
    assetCountry: string
    assetRegion: string
    assetPostCode: string
    assetCity: string
    assetStreet: string
    assetBuildingNumber: string
    assetArea: number
    assetType?: AssetType
    assetTarget?: AssetTarget
    assetStandardsCompliance: boolean
    assetStandardsRehabilitation: string
    assetPhotos: File[]
    offerId: string
    offerTitle: string
    offerPrice: number
    offerQuantity: number
    offerDescription: string
    offerArea: number
    offerStartDate: Date
    offerEndDate: Date
    offerPremium: boolean
    offerVisible: boolean
    offerState: OfferState
// offerAssetPhotos:
}

