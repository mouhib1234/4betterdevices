<template>
  <section
    class="relative w-full bg-cover bg-center"
    :style="{ backgroundImage: `url(${props?.service?.imageUrl})` }"
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
        {{ props?.service?.name }}
      </h1>

      <div class="mt-6 flex flex-wrap items-center gap-3 text-sm sm:text-base text-white/80">
        <div class="flex items-center space-x-2">
          <img
            class="w-6 h-6 rounded-full object-fill"
            :src="props?.service?.authorAvatar"
            alt="Author avatar"
          />
          <span>{{ props?.service?.author }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

const props = defineProps<{
  service: Service
}>()

</script>

<style scoped>
/* your banner-specific styles */
</style>
