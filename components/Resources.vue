<template>
  <section
    id="resources"
    aria-labelledby="services-heading"
    class="relative overflow-hidden py-24 sm:py-16 bg-[#e7f7f7]"
  >

    <div class="mx-auto px-6 lg:px-20">
      <header class="mb-12 relative">
        <h2
          id="services-heading"
          class="relative z-10 text-4xl tracking-tight text-gray-900 sm:text-5xl font-medium"
        >
          <span>Our</span>
          <span class="bg-gradient-to-r from-[#a20e68] to-[#0fb2b1] bg-clip-text text-transparent">
            Resources.
          </span>
        </h2>
      </header>

      <div class="relative z-10 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-6">
        <div v-for="resource in resources" :key="resource.title">
          <ResourceCard :resource="resource"   watermark-width="80%" watermark-height="70%" />
        </div>
      </div>
    </div>
  </section>
</template>



<script setup lang="ts">
import ResourceCard from './cards/ResourceCard.vue';

</script>
