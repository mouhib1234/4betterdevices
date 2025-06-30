<template>
  <section
    class="relative w-full bg-cover bg-center"
    :style="{ backgroundImage: `url(${props?.resource?.backgroundImg})` }"
  >
    <div class="absolute inset-0 bg-gradient-to-b from-black/50 to-black/25"></div>
    <div class="relative mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 md:py-20 max-w-6xl">
      <NuxtLink
        to="/"
        class="inline-flex items-center text-lg font-medium text-white/80 hover:text-white transition"
      >
        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
        HomePage
      </NuxtLink>

      <h1 class="text-white font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight mt-6">
        {{ props?.resource?.title }}
      </h1>
    </div>
  </section>
</template>

<script setup lang="ts">

const props = defineProps<{
  resource: Resource
}>()

</script>

<style scoped>
</style>
