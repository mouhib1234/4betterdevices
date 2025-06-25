<template>
  <div v-if="!notFound" class="py-8 px-4 md:px-6 lg:px-8">
      <NuxtLink to="/" class="inline-flex items-center text-sm font-medium text-cyan-600 hover:text-cyan-700 transition">
        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M15 19l-7-7 7-7" />
        </svg>
        Back to Services
      </NuxtLink>

      <div class="max-w-3xl mx-auto">
      <article
        class="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r
               flex flex-col justify-between leading-normal shadow"
      >
        <header class="px-6 py-4">
          <div class="flex items-center gap-3">
            <component
              :is="service?.icon"
              class="icon w-10 h-10 text-cyan-500"
            />
            <h1 class="text-3xl font-bold text-gray-900">
              {{ service?.name }}
            </h1>
          </div>
        </header>

        <div class="border-t border-gray-200"></div>

        <section class="px-6 py-5">
          <p class="text-base leading-relaxed text-gray-700">
            {{ service?.description }}
          </p>
        </section>
      </article>
    </div>
  </div>

  <div v-else class="p-4 text-center">
    <h2 class="text-2xl font-semibold text-gray-800 mb-2">
      Service not found
    </h2>
    <p class="text-gray-600">
      We couldn’t find a service called “<strong>{{ nameParam }}</strong>”.
    </p>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useService } from '~/composables/useService'

const route = useRoute()
const nameParam = String(route.params.name)
const { service, notFound } = useService(nameParam)
</script>

<style scoped>
a:focus {
  outline: 2px solid #00bcd4;
  outline-offset: 2px;
}
</style>
