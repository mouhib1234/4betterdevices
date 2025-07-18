import LivaNovaLogo from '@/assets/images/companyImages/LivaNovaLogo.png';
import EasyMedicalDevice from '@/assets/images/companyImages/EasyMedicalDevice.jpg';
import Enov from '@/assets/images/companyImages/Enov.png';
import Xitaso from '@/assets/images/companyImages/Xitaso.svg';
import SmithNephew from '@/assets/images/companyImages/SmithNephew.svg';
import Temedica from '@/assets/images/companyImages/Temedica.jpg';
import epmodex from '@/assets/images/companyImages/epmodex.jpeg';
import prehapp from '@/assets/images/companyImages/prehapp.png';
import physiomedgroup from '@/assets/images/companyImages/physiomedgroup.jpg';
import avort from '@/assets/images/companyImages/avort.png';
import radiomics from '@/assets/images/companyImages/radiomics.png';
import checkupLogo from '@/assets/images/companyImages/checkupLogo.png';

export interface Testimonial {
  id: number;
  quote: string;
  name: string;
  logo: string;
}

export const testimonials: Testimonial[] = [
    {
      id: 1,
      quote:
        "I have had the pleasure of collaborating with Cesare on numerous occasions as a senior colleague and reviewer of his work. Cesare has consistently demonstrated a commendable level of independence and proficiency as a Medical Writer for Clinical Evaluation Reports under EU MDR and related documents. His meticulous attention to detail and dedication to producing high-quality work are evident in every project we've worked on together. Cesare's professionalism and expertise make him a valuable asset to any team. I highly recommend him for his exceptional contributions in the field.",
      name: 'Kolja Boese',
      logo: SmithNephew,
    },
    {
    id: 2,
    quote:
      "Ceasare and his team were great to work with! They bring tremendous Clinical Med Device knowledge and experience to the table and helped us through multiple EU MDR Initiatives. Highly recommended!",
    name: 'Michael Strickler',
    logo: Enov,
    },
    {
    id: 3,
    quote:
      "I had the pleasure of working with Cesare’s team at 4BetterDevices during my time as Senior Manager of Clinical Evaluation at LivaNova. They consistently delivered high-quality, MDR-compliant clinical evaluation writing services with professionalism and precision. Their expertise, responsiveness, and ability to integrate seamlessly with our internal teams made them a trusted partner in meeting regulatory requirements. I highly recommend their services to any MedTech organization.",
    name: 'Durga Prasad Gaddam',
    logo: LivaNovaLogo,
    },
    {
    id: 4,
    quote:
      "Cesare joined my team as a medical writer contractor during our transition from MDD to MDR for our wound care portfolio. His contributions to CERs, CEPs, and SSCP documents have been invaluable, demonstrating a profound understanding of both the medical and regulatory aspects of the field, more specifically data analysis, state of the art, and benchmarking. Cesare’s meticulous attention to detail and ability to communicate complex information clearly make him a standout choice for any project in this area.",
    name: 'Lizz Boraczek',
    logo: SmithNephew,
  },
  {
    id: 5,
    quote:
      "Cesare Magri und sein Team haben uns über die letzten Jahre sehr erfolgreich unterstützt. Im Rahmen des MDR-Transfers unseres Produktportfolios konnten wir gemeinsam pragmatische und dennoch sehr detaillierte klinische Bewertungskonzepte entwickeln und umsetzen, die der überaus kritischen Bewertung unserer Benannten Stelle standhielten. Die Zusammenarbeit war offen, direkt und lösungsorientiert. Besten Dank dafür - die 4BetterDevices ist weiterhin ein zuverlässiger Partner für uns.",
    name: 'Jan Schneider',
    logo: physiomedgroup,
  },
  {
    id: 6,
    quote:
      "Ich möchte gerne eine 5-Sterne-Bewertung für 4BetterDevices abgeben, insbesondere für Cesare Magri. 4BetterDevices ist ein führender Partner für die Planung und Durchführung klinischer Studien, Literatur Reviews und regulatorischen Strategien. Ihre professionelle Expertisen für eine beschleunigte Time-to-Market, Präzision und zuverlässige Partnerschaft machen sie zu einem ausgezeichneten Unternehmen. Cesare und sein Team von hochqualifizierten Spezialisten haben schon viele erstklassige Dienstleistungen in unseren Projekten erbracht und ich empfehle 4BetterDevices deshalb uneingeschränkt.",
    name: 'Martin Epper',
    logo: epmodex,
  },
  {
    id: 7,
    quote:
      'I had the pleasure of collaborating with Dr. Cesare Magri on projects related to DIGA and BFARM fast track processes, as well as the clinical evaluation of SamD. His expertise in these areas is truly exceptional. Dr. Magri insights, dedication, and attention to detail greatly contributed to the success of our initiatives. I highly recommend Dr. Magri for his deep knowledge and professionalism in regulatory affairs and clinical evaluation.',
    name: 'Fabian Schwarz',
    logo: prehapp,
  },
  {
    id: 8,
    quote:
      "It was an enriching experience working with Cesare and his team on two clinical evaluations for medical software. Their competent support from medically trained specialists was impressive. They demonstrated their ability to guide a product idea through to market approval and beyond, provided they are given the opportunity to do so. Particularly commendable is Cesare and his team's early adaptation to the requirements of the Medical Device Regulation (MDR) and their corresponding adjustment of the level of clinical evaluations. As a result, the outcomes go far beyond a simple screening, as was often the case with the Medical Device Directive (MDD). Their insights and findings are extremely valuable for clinical application and evaluation.",
    name: 'Jonathan von Wittern',
    logo: Temedica,
  },
  {
    id: 9,
    quote:
      "Ich hatte das Vergnügen mit Cesare Magri, während meiner Zeit als Regulatory Affairs Manager bei dem Startup CheckUp Scout (2018-2022), zusammen zu arbeiten. Für die erfolgreiche Zulassung einer der ersten SaMD Klasse IIa nach MDR war seine Expertise und der sehr gute und hilfreiche Austausch maßgeblich mit verantwortlich. Herr Magri erstellte für das Produkt die komplette Systematische Literaturrecherche sowie alle Dokumente, die die Klinische Bewertung betrafen. Die Kooperation war sehr angenehm und ich kann die Zusammenarbeit mit Herrn Magri nur empfehlen.",
    name: 'Eva Haid',
    logo: checkupLogo,
  },

  {
    id: 10,
    quote:
      "I had the pleasure of working with Cesare who I consider my first mentor in the field of Clinical Evaluation for Software as a Medical Device (SaMD) in both the EU and the US markets. Cesare provided valuable guidance to establish the Clinical Evaluation process for the QMS, emphasising the distinctions between MDD and MDR and how to gather evidences for a specific SaMD product. He also demonstrated a deep understanding of Clinical Investigations and how to collect and manage clinical data. I highly recommend Cesare for his knowledge and contributions.",
    name: 'Tania Santos',
    logo: radiomics,
  },
  {
    id: 11,
     quote:
      "Cesare Magri worked on multiple projects with me at Easy Medical Device. He is really an expert on Clinical Evaluation for MDR and IVDR. He also participated to multiple podcast to share his knowledge to the community. He is the go to person for clinical projects. He also developed a software for management of clinical data. I enjoy working with him.",
    name: 'Monir El Azzouzi',
    logo: EasyMedicalDevice,
  },
  {
    id: 12,
    quote:
      "I had the fortune to collaborate with Cesare and I hope to have the opportunity to do so again in the future. Cesare prepared several clinical evaluations for a medical device software for us. But it didn't stop there at all. Cesare will help you integrate the individual aspects of medical device development and obtain a comprehensive clinical picture. He helps with the definition of medical claims, risk management, links everything with post-market surveillance, and only then covers it with clinical evaluation. Thanks to his many years of experience in the field, he will help you understand regulatory requirements, the certification process, and external audits by notified bodies. Cesare will quickly understand your needs and will strive to find tailor-made solutions for you. Working with Cesare is excellent and I can highly recommend him as an intelligent and experienced professional.",
    name: 'Vaclav Vlcek',
    logo: Temedica,
  },
  {
    id: 13,
    quote:
      "I had the pleasure to work with Cesare Magri during my time at Radiomics. He and his team were instrumental in helping us setting up our QMS system, giving clear advices and helpful indications to create our documentation, especially related to the Clinical Evaluation process for Medical Device Software. I had the chance to work closely with Cesare, which acted as a mentor for me and my team, guiding us in the compilation of two different Clinical Evaluations files for MDSW under MDD. He also provided keen insight and hands-on explanation on how to better address clinical data collection and presentation, also in the light of the challenging transition towards MDR. I would welcome the chance to work again with Cesare in the future!",
    name: 'Fabio Bottari',
    logo: radiomics,
  },
];
