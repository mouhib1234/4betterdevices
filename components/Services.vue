<template>
  <section
    id="services"
    aria-labelledby="services-heading"
    class="relative overflow-hidden py-8 sm:py-8 border-gray-300 bg-gray-50"
  >
    <div class="mx-auto px-6 lg:px-20 py-8 overflow-clip">
      <header class="mb-12 ">
        <h2
          id="services-heading"
          class="text-4xl tracking-tight text-gray-900 sm:text-5xl font-medium"
        >
          <span>Our </span>
          <span class="text-[#0FB2B1]">Services.</span>
        </h2>
      </header>
        <div class="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div v-for="service in services" :key="service.name">
            <ServiceCard :service="service" />
          </div>
        </div>
      </div>
  </section>
</template>

<script setup lang="ts">
import ServiceCard from '@/components/cards/ServiceCard.vue';


</script>
