<template>
  <section
    id="services"
    aria-labelledby="services-heading"
    class="relative overflow-hidden py-8 sm:py-8
           bg-white
           backdrop-blur-sm border border-gray-100"
  >
    <div
      class="absolute inset-y-0 right-0 w-full sm:w-1/2 lg:w-1/3 h-full pointer-events-none"
    >
      <img
        :src="CoverPicture"
        alt=""
        class="object-cover w-full h-full"
      />
    </div>

    <div class="relative z-20 mx-auto px-6 lg:px-20 py-8">
      <header class="mb-12">
        <h2
          id="services-heading"
          class="text-4xl tracking-tight sm:text-5xl font-medium text-black"
        >
          <span>Our </span>
          <span class="text-cyan-500">Services.</span>
        </h2>
      </header>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div v-for="service in services" :key="service.name">
          <ServiceCard :service="service" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ServiceCard from '@/components/cards/ServiceCard.vue'
import CoverPicture from '@/assets/images/4betterdevicesBackgroundPicture.png'
</script>
