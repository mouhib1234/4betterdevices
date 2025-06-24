import RaqaLogo from '@/assets/images/Raqalogo.png'
import evidenceLogo from '@/assets/images/evidenceLogo.png'
import GuidanceLogo from '@/assets/images/GuidanceLogo.png'


export enum Software {
  Evidence   = 'evidence',
  RaqaStore  = 'raqaStore',
  Guidances =  'Guidances'
}

export interface Resource {
  key: Software
  title: string        
  logo: string     
  description: string 
  link: string
}

export const resources: Resource[] = [
  {
    key: Software.Evidence,
    title: 'Automated Review',
    logo: evidenceLogo,
    description:
      'Evidence is our lightweight client app for on the go data capture and verification.',
    link:"https://evidence.systems/"
  },
  {
    key: Software.RaqaStore,
    title: 'Regulatory Search Engine',
    logo: RaqaLogo,
    description:
      'Raqa Store powers your full-stack regulatory listings, search, and analytics dashboard.',
    link:""
  },
  {
    key: Software.Guidances,
    title: 'Guidances & Newsletter',
    logo: GuidanceLogo,
    description:
      'Raqa Store powers your full-stack regulatory listings, search, and analytics dashboard.',
    link:""
  },
]

export function getResourceByKey(key: string): Resource | null {
  return resources.find(r => r.key === key) || null
}

import { ref, type Ref } from 'vue'
export function useResource(key: Ref<string> | string) {
  const resource = ref<Resource | null>(null)
  const k = typeof key === 'string' ? key : key.value
  resource.value = getResourceByKey(k)
  return {
    resource,
    notFound: resource.value === null
  }
}
