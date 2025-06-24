<template>
  <section
    id="resources"
    aria-labelledby="services-heading"
    class="bg-white py-24 sm:py-16"
  >
    <div class="mx-auto px-6 lg:px-20">
      <header class="mb-12">
        <h2
          id="services-heading"
          class="text-4xl tracking-tight text-gray-900 sm:text-5xl font-medium"
        >
          <span>Our</span>
          <span class="text-[#0FB2B1]">
            Resources.
          </span>
        </h2>
      </header>

        <div class="relative z-10 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-6">
          <div
            v-for="resource in resources"
            :key="resource.title"
          >
            <ResourceCard :resource="resource" />
          </div>
        </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ResourceCard from './cards/ResourceCard.vue';



</script>
