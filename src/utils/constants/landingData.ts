import type {
  CompanyStatsDataType,
  PortfolioDataType,
  ServicesDataType,
  TeamMemberData,
} from '@utils/types/landingData'
import { BiSupport } from 'react-icons/bi'
import { DiAndroid } from 'react-icons/di'
import { FaLaptopCode } from 'react-icons/fa'
import { HiOutlineMailOpen } from 'react-icons/hi'
import { MdDesignServices } from 'react-icons/md'
import { TbUxCircle } from 'react-icons/tb'
import coryds from '@assets/img/coryds.webp'
import beautyHooked from '@assets/img/beautyHooked.webp'
import recoveryConsise from '@assets/img/recoveryConsise.webp'
import beFit from '@assets/img/beFit.webp'
import nettles from '@assets/img/nettles.webp'
import UKInsurance from '@assets/img/uk-1.webp'
import ceoImage from '@assets/img/Aamir-Bhai.png'
import androidDev from '@assets/img/Hamdullah-ch.png'
import webDev from '@assets/img/Nouman.png'
import designer from '@assets/img/profile-pics-try.png'

export const companyStats: CompanyStatsDataType[] = [
  { count: 200, title: 'Projects Completed', operator: '+' },
  { count: 99, title: "Client's Satisfaction", operator: '%' },
  { count: 20, title: 'Years Experience', operator: '+' },
]

export const ServicesData: ServicesDataType[] = [
  {
    title: 'Web Design',
    description:
      'Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt.',
    icon: MdDesignServices,
  },
  {
    title: 'Web Development',
    description:
      'Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt.',
    icon: FaLaptopCode,
  },
  {
    title: 'UI/UX Design',
    description:
      'Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt.',
    icon: TbUxCircle,
  },
  {
    title: 'Android Development',
    description:
      'Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt.',
    icon: DiAndroid,
  },
  {
    title: 'Digital Marketing',
    description:
      'Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt.',
    icon: HiOutlineMailOpen,
  },
  {
    title: 'Consultation',
    description:
      'Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt.',
    icon: BiSupport,
  },
]

export const PortfolioData: PortfolioDataType[] = [
  {
    title: 'Insurance Claims',
    description: 'Company for UK and Ireland',
    imageUrl: UKInsurance,
    href: '#',
    category: 'web',
  },
  {
    title: 'Consise Recovery',
    description: 'Address Addictions Holistically',
    imageUrl: recoveryConsise,
    href: '#',
    category: 'web',
  },
  {
    title: 'Nettles & Petals',
    description: 'Lanscape Garden Design',
    imageUrl: nettles,
    href: '#',
    category: 'web',
  },
  {
    title: 'Beauty Hooked',
    description: 'Beauty Services Marketplace',
    imageUrl: beautyHooked,
    href: '#',
    category: 'web',
  },
  {
    title: 'CoRyds',
    description: 'Carpooling/Ride sharing app',
    imageUrl: coryds,
    href: '#',
    category: 'mobile',
  },
  {
    title: 'Be Fit',
    description: 'Be Fit, Healthy Lifestyle',
    imageUrl: beFit,
    href: '#',
    category: 'web',
  },
]

export const TeamMembersData: TeamMemberData[] = [
  {
    id: 1,
    name: 'M. Aamir Naeem',
    designation: 'CEO & Founder',
    image: ceoImage,
    socialLinks: {
      facebook: '#',
      twitter: '#',
      instagram: '#',
      linkedin: '#',
    },
  },
  {
    id: 2,
    name: 'Hamdullah Ch',
    designation: 'Lead Developer',
    image: androidDev,
    socialLinks: {
      facebook: '#',
      twitter: '#',
      instagram: '#',
      linkedin: '#',
    },
  },
  {
    id: 3,
    name: 'Muhammad Nouman',
    designation: 'Project Manager',
    image: webDev,
    socialLinks: {
      facebook: '#',
      twitter: '#',
      instagram: '#',
      linkedin: '#',
    },
  },
  {
    id: 4,
    name: 'Adnan Yasir',
    designation: 'UX Designer',
    image: designer,
    socialLinks: {
      facebook: '#',
      twitter: '#',
      instagram: '#',
      linkedin: '#',
    },
  },
]
