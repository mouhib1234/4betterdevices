import ChemicalIcon from "~/assets/icons/ChemicalIcon.vue";
import HammerIcon from "~/assets/icons/HammerIcon.vue";
import RadarIcon from "~/assets/icons/RadarIcon.vue";
import StethoscopeIcon from "~/assets/icons/stethoscopeIcon.vue";
import SurgicalknifeIcon from "~/assets/icons/surgicalknifeIcon.vue";
import WarningIcon from "~/assets/icons/WarningIcon.vue";


export interface Service {
  icon: Component;
  name: string;
  description: string;
}

export const services: Service[] = [
  {
    icon: StethoscopeIcon,
    name: 'Clinical strategy & clinical evaluation',
    description:
      'The Clinical Evaluation is a critical element in the pathway for a new medical device. As a Regulatory and Clinical Consultant, our clinical strategy support helps ensure that your proposed Clinical Plan is sufficient to meet the requirements and also provides a competitive advantage by bringing your device to market faster and supporting unique claims with solid clinical evidence.',
  },
  {
    icon: HammerIcon,
    name: 'Market access EU & US & International',
    description:
      'We help medical device and IVD companies register their products in more than 20 countries, including Australia, Brazil, Europe (MDR), Japan and the U.S (FDA) by providing essential support for the product approval process of medical devices and in-vitro diagnostic devices, helping them enter both domestic and international markets. We systematically manage the entire process, including the preparation of technical documentation, submission, and response to audits, tailored to the regulatory requirements for each classification (Class 1, 2, 3) to ensure that our clients products demonstrate safety and efficacy while meeting regulatory requirements.',
  },
  {
    icon: SurgicalknifeIcon,
    name: 'Real world evidence and studies',
    description:
      'We design and execute real-world evidence studies for medical devices, including post-market clinical follow-up (PMCF), registries, and observational studies, to generate concrete data that supports regulatory compliance, stakeholder needs, and clinical adoption.',
  },
  {
    icon: RadarIcon,
    name: 'Post market surveillance and follow up',
    description:
      'Once your product is on the market, our team will handle the post-marketing surveillance to ensure that your product still follows quickly evolving regulations. We offer to determine a Post-Marketing Surveillance Plan to: Define the scope and plan of PMS system,the sources and the methods of data collection,as well as the methods to analyse data collected. Our teams also manage the Periodic Safety Update Report (PSUR), which resumes in : Post-Marketing Surveillance activities and the analyses of the Post-Market Surveillance data.',
  },
  {  
    icon: WarningIcon,
    name: 'Risk management',
    description:
      'Risk Management is a major requirement of the third edition of IEC 60601-1, our consultants work hand-in-hand with you and your team to develop strategic solutions in risk management for medical devices, from initial risk analysis to the maintenance of risk management files in accordance with ISO 14971. Our approach ensures proactive identification, evaluation, and control of risks throughout the device lifecycle.',
  },
  { icon: ChemicalIcon,
    name: 'Biocompatibility',
    description:
      'We offer strategic guidance on biocompatibility assessment in line with ISO 10993, including gap analysis, test planning, and coordination with certified laboratories, to ensure the biological safety of medical devices and meet regulatory expectations efficiently.',
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