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
    name: 'Clinical strategy and clinical evaluation',
    description:
      'Aut illo quae. Ut et harum ea animi natus. Culpa maiores et sed sint et magnam exercitationem quia. Ullam voluptas nihil vitae dicta molestiae et. Aliquid velit porro vero.',
  },
  {
    icon: HammerIcon,
    name: 'Market access EU & US & International',
    description:
      'Mollitia delectus a omnis. Quae velit aliquid. Qui nulla maxime adipisci illo id molestiae. Cumque cum ut minus rerum architecto magnam consequatur. Quia quaerat minima.',
  },
  {
    icon: SurgicalknifeIcon,
    name: 'Real world evidence and studies',
    description:
      'Aut repellendus et officiis dolor possimus. Deserunt velit quasi sunt fuga error labore quia ipsum. Commodi autem voluptatem nam. Quos voluptatem totam.',
  },
  {
    icon: RadarIcon,
    name: 'Post market surveillance and follow up',
    description:
      'Magnam provident veritatis odit. Vitae eligendi repellat non. Eum fugit impedit veritatis ducimus. Non qui aspernatur laudantium modi. Praesentium rerum error deserunt harum.',
  },
  {  
    icon: WarningIcon,
    name: 'Risk management',
    description:
      'Magnam provident veritatis odit. Vitae eligendi repellat non. Eum fugit impedit veritatis ducimus. Non qui aspernatur laudantium modi. Praesentium rerum error deserunt harum.',
  },
  { icon: ChemicalIcon,
    name: 'Biocompatibility',
    description:
      'Magnam provident veritatis odit. Vitae eligendi repellat non. Eum fugit impedit veritatis ducimus. Non qui aspernatur laudantium modi. Praesentium rerum error deserunt harum.',
  },
];