// resources.ts

import RaqaLogo from '@/assets/images/Raqalogo.png'
import evidenceLogo from '@/assets/images/evidenceLogo.png'
import GuidanceLogo from '@/assets/images/GuidanceLogo.png'

import image1 from '@/assets/images/guidanceImages/img1.jpg'
import image2 from '@/assets/images/guidanceImages/img2.jpg'
import image3 from '@/assets/images/guidanceImages/img3.jpg'
import image4 from '@/assets/images/guidanceImages/img4.jpg'
import image5 from '@/assets/images/guidanceImages/img5.jpg'
import image6 from '@/assets/images/guidanceImages/img6.jpg'
import image7 from '@/assets/images/guidanceImages/img7.jpg'

import { ref, type Ref } from 'vue'

export enum Software {
  Evidence  = 'evidence',
  RaqaStore = 'raqaStore',
  Guidances = 'Guidance',
}

export interface Post {
  id?: number
  title: string
  href: string
  imageUrl: string
}

export interface Resource {
  key: Software
  title: string
  logo: string
  description: string
  link: string
  posts?: Post[]
}

const guidancePosts: Post[] = [
  {
    id: 1,
    title: '4BetterDevices - EAA (v.1)',
    href: '#',
    imageUrl: image1,
  },
  {
    id: 2,
    title: '4BetterDevices - How to build an intended purpose (v.4)',
    href: '#',
    imageUrl: image2,
  },
  {
    id: 3,
    title: '4BetterDevices - How to use MDR Rule 11 - v.1.1',
    href: '#',
    imageUrl: image3,
  },
  {
    id: 4,
    title: '4BetterDevices - Medical background SOTA analyses (v.2)',
    href: '#',
    imageUrl: image4,
  },
  {
    id: 5,
    title: '4BetterDevices - Post-market searches - v2',
    href: '#',
    imageUrl: image5,
  },
  {
    id: 6,
    title: '4BetterDevices - Surveys - v.1',
    href: '#',
    imageUrl: image6,
  },
  {
    id: 7,
    title: '4BetterDevices - Well-established technology (v.1)',
    href: '#',
    imageUrl: image7,
  },
]

export const resources: Resource[] = [
  {
    key: Software.Evidence,
    title: 'Automated Review',
    logo: evidenceLogo,
    description:
      'Evidence is our lightweight client app for on the go data capture and verification.',
    link: 'https://evidence.systems/',
  },
  {
    key: Software.RaqaStore,
    title: 'Regulatory Search Engine',
    logo: RaqaLogo,
    description:
      'Raqa Store powers your full-stack regulatory listings, search, and analytics dashboard.',
    link: '',
  },
  {
    key: Software.Guidances,
    title: 'Guidance & Newsletter',
    logo: GuidanceLogo,
    description:
      'All the latest guidance documents and our periodic newsletters in one place.',
    link: '',
    posts: guidancePosts,
  },
]

export function getResourceByKey(key: string): Resource | null {
  return resources.find(r => r.key === key) ?? null
}

export function useResource(key: Ref<string> | string) {
  const resource = ref<Resource | null>(null)
  const k = typeof key === 'string' ? key : key.value
  resource.value = getResourceByKey(k)
  return {
    resource,
    notFound: resource.value === null,
  }
}
