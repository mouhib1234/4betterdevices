<template>
  <section
    id="services"
    aria-labelledby="services-heading"
    class="relative overflow-hidden py-8 sm:py-8"
  >
    <div
      class="absolute inset-x-0 -bottom-60 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-40 blur-3xl"
      aria-hidden="true"
    >
      <div
        class="ml-[max(30%,38rem)] aspect-1313/771 w-328.25 bg-linear-to-tr from-[#91cdcb] to-[#0fb2b1]"
        style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
      />
    </div>

    <div
      class="absolute inset-x-0 bottom-0 top-40  -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-40 blur-3xl"
      aria-hidden="true"
    >
      <div
        class="ml-[max(30%,38rem)] aspect-1313/771 w-328.25 bg-linear-to-tr from-[#dc91be] to-[#b20f72]"
        style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
      />
    </div>

    <div
      class="absolute inset-y-0 right-0 w-full sm:w-1/2 lg:w-1/3 h-full pointer-events-none filter brightness-125 opacity-60 -z-10"
      aria-hidden="true"
    >
      <img
        :src="CoverPicture"
        alt=""
        class="object-cover w-full h-full mix-blend-overlay"
      />
    </div>

    <div class="relative z-20 mx-auto px-6 lg:px-20 py-8">
      <header class="mb-12">
        <h2
          id="services-heading"
          class="text-4xl tracking-tight sm:text-5xl font-medium text-black"
        >
          <span>Our </span>
          <span
            class="bg-gradient-to-r from-[#a20e68] to-[#0fb2b1] bg-clip-text text-transparent"
          >
            Services.
          </span>
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

<style scoped>
@keyframes blob {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
}

.animate-blob {
  animation: blob 10s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}
</style>
