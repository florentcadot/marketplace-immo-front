import { OfferAssetPhoto, OfferState } from 'core/domain/offer/offer'
import { Asset, AssetType } from 'core/domain/asset/asset'

export interface GetOffersResponseDto {
  id: string
  title: string
  description: string
  startDate: Date
  endDate: Date
  price: number
  area: number
  quantity: number
  state: OfferState
  photos: OfferAssetPhoto[]
  assetCount: number
  tags: string[]
  assets: Asset[]
}


export interface GetOffersRequestDto {
  startDate?: Date,
  endDate?: Date,
  minPrice?:number,
  maxPrice?: number,
  minArea?:number,
  maxArea?:number
  tags?: string[]
  city?: string
  region?: string
  type?: AssetType
}
