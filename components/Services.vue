<template>
  <section
    id="services"
    aria-labelledby="services-heading"
    class="relative overflow-hidden  py-24 sm:py-8"
  >
    <div class="container mx-auto px-6 lg:px-20 py-8 overflow-clip">
      <header class="mb-12 ">
        <h2
          id="services-heading"
          class="text-4xl tracking-tight text-gray-900 sm:text-5xl font-medium"
        >
          <span>Our </span>
          <span class="text-[#0FB2B1]">Services.</span>
        </h2>
      </header>

      <div class="relative">
        <!-- this image is now clipped to the section bounds -->
        <img
          :src="BackgroundPicture"
          alt=""
          aria-hidden="true"
          class="
            absolute
            inset-y-0 -right-20      
            w-auto h-[40rem]                
            object-cover          
            pointer-events-none   
            select-none  
            -top-40
            
          "
        />

        <div class="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div v-for="service in services" :key="service.name">
            <ServiceCard :service="service" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import BackgroundPicture from '@/assets/images/4betterdevicesBackgroundPicture.png';
import ServiceCard from '@/components/cards/ServiceCard.vue';

interface Service {
  name: string;
  description: string;
}

const services: Service[] = [
  {
    name: 'Clinical strategy and clinical evaluation',
    description:
      'Aut illo quae. Ut et harum ea animi natus. Culpa maiores et sed sint et magnam exercitationem quia. Ullam voluptas nihil vitae dicta molestiae et. Aliquid velit porro vero.',
  },
  {
    name: 'Market access EU & US & International',
    description:
      'Mollitia delectus a omnis. Quae velit aliquid. Qui nulla maxime adipisci illo id molestiae. Cumque cum ut minus rerum architecto magnam consequatur. Quia quaerat minima.',
  },
  {
    name: 'Real world evidence and studies',
    description:
      'Aut repellendus et officiis dolor possimus. Deserunt velit quasi sunt fuga error labore quia ipsum. Commodi autem voluptatem nam. Quos voluptatem totam.',
  },
  {
    name: 'Post market surveillance and follow up',
    description:
      'Magnam provident veritatis odit. Vitae eligendi repellat non. Eum fugit impedit veritatis ducimus. Non qui aspernatur laudantium modi. Praesentium rerum error deserunt harum.',
  },
  {
    name: 'Risk management',
    description:
      'Magnam provident veritatis odit. Vitae eligendi repellat non. Eum fugit impedit veritatis ducimus. Non qui aspernatur laudantium modi. Praesentium rerum error deserunt harum.',
  },
  {
    name: 'Biocompatibility',
    description:
      'Magnam provident veritatis odit. Vitae eligendi repellat non. Eum fugit impedit veritatis ducimus. Non qui aspernatur laudantium modi. Praesentium rerum error deserunt harum.',
  },
];
</script>
