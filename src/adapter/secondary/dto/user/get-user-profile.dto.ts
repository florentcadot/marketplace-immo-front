
export interface GetUserProfileResponseDto {
  id: string
  createdAt: Date
  updatedAt: Date
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
