import ChemicalIcon from "~/assets/icons/ChemicalIcon.vue";
import HammerIcon from "~/assets/icons/HammerIcon.vue";
import RadarIcon from "~/assets/icons/RadarIcon.vue";
import StethoscopeIcon from "~/assets/icons/stethoscopeIcon.vue";
import SurgicalknifeIcon from "~/assets/icons/surgicalknifeIcon.vue";
import WarningIcon from "~/assets/icons/WarningIcon.vue";
import CesareImg from '@/assets/images/Cesare.jpg';


export interface Service {
  icon?: Component;
  name?: string;
  author:string;
  authorAvatar?: string
  imageUrl?: string
  description?: string;
}

export const services: Service[] = [
  {
    icon: StethoscopeIcon,
    name: 'Clinical strategy & clinical evaluation',
    author : 'Cesare Magri',
    authorAvatar : CesareImg,
    imageUrl : 'https://images.unsplash.com/photo-1630155923002-17db0f219f1f?q=80&w=1332&auto=format&fit=crop',
    description:
      'Clinical Evaluation is more than a regulatory obligation it’s a strategic lever. We support you in developing a focused clinical strategy that aligns with EU MDR, speeds up approval, and avoids costly detours. Whether you re planning a literature-based route or generating new data, we help you make smart, defensible choices from the start.'
      
  },
  {
    icon: HammerIcon,   
    name: 'Global Market Access for Medical Devices and IVDs',
    author : 'Cesare Magri',
    authorAvatar : CesareImg,
    imageUrl : 'https://images.unsplash.com/photo-1630155923002-17db0f219f1f?q=80&w=1332&auto=format&fit=crop',
    description:
      'We support manufacturers in bringing their medical devices and IVDs to market in over 20 countries, including the EU (MDR), U.S. (FDA), Japan, Brazil, and Australia. Our team manages the entire regulatory process—from strategy to submission—including technical documentation, authority interactions, and audit responses. Whether Class I or Class III, we tailor every step to national and product-specific requirements, ensuring your device is positioned for approval and long-term success.',
  },
  {
    icon: SurgicalknifeIcon,
    name: 'Real World Evidence for Medical Devices',
    author : 'Cesare Magri',
    authorAvatar : CesareImg,
    imageUrl : 'https://images.unsplash.com/photo-1630155923002-17db0f219f1f?q=80&w=1332&auto=format&fit=crop',
    description:
      'We design and run real world evidence studies—PMCF, registries, and observational studies—that deliver actionable data. Our focus: generating evidence that satisfies regulators, supports clinical adoption, and aligns with business goals.',
  },
  {
    icon: RadarIcon,
    name: 'Post Market Surveillance – End-to-End Compliance',
    author : 'Cesare Magri',
    authorAvatar : CesareImg,
    imageUrl : 'https://images.unsplash.com/photo-1630155923002-17db0f219f1f?q=80&w=1332&auto=format&fit=crop',
    description:
      'We manage your entire PMS system—from planning to execution to ensure ongoing compliance with MDR and international regulations. Our support covers all key activities, including complaint handling, incident reporting, trend analysis, PSURs, and PMCF integration. We tailor the PMS Plan to your device, define appropriate data sources and methods, and deliver clear, actionable reporting to keep your product on the market—and ahead of risk.',
  },
  {  
    icon: WarningIcon,
    name: 'Risk Management – Integrated and Compliant',
    author : 'Cesare Magri',
    authorAvatar : CesareImg,
    imageUrl : 'https://images.unsplash.com/photo-1630155923002-17db0f219f1f?q=80&w=1332&auto=format&fit=crop',
    description:
      'We help you build and maintain a risk management system aligned with ISO 14971 covering the full device lifecycle. From initial risk analysis to continuous file updates, we ensure risks are identified, evaluated, and controlled proactively. Whether as part of your design process or post-market activities, our support keeps your risk documentation audit-ready and defensible.',
  },
  { icon: ChemicalIcon,
    name: 'Biocompatibility',
    author : 'Cesare Magri',
    authorAvatar : CesareImg,
    imageUrl : 'https://images.unsplash.com/photo-1630155923002-17db0f219f1f?q=80&w=1332&auto=format&fit=crop',
    description:
      'We provide strategic support for biocompatibility assessments in accordance with ISO 10993. From gap analysis to test strategy and lab coordination, we help you demonstrate biological safety efficiently and without overtesting. Our approach ensures your documentation meets regulatory expectations while staying aligned with the device actual risk profile.',
  },
];

export function getServiceByName(name: string): Service | null {
  return services.find(service => service.name === name) || null
}

export function useService(name: Ref<string> | string) {
  const service = ref<Service | null>(
    getServiceByName(typeof name === 'string' ? name : name.value)
  )

  if (typeof name !== 'string') {
    watch(name, (newName) => {
      service.value = getServiceByName(newName)
    })
  }
  const notFound = computed(() => service.value === null)

  return { service, notFound }
}