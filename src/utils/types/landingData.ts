import { StaticImageData } from 'next/image'
import type { IconType } from 'react-icons'

export type CompanyStatsDataType = {
  count: number
  title: string
  operator: string
}

export type ServicesDataType = {
  title: string
  description: string
  icon: IconType
}

export type PortfolioDataType = {
  title: string
  description: string
  imageUrl: StaticImageData
  href: string
  category: string
}

export type TeamMemberData = {
  id: number
  name: string
  designation: string
  image: StaticImageData
  socialLinks: {
    facebook: string
    twitter: string
    instagram: string
    linkedin: string
  }
}
