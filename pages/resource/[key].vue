<template>
  <div class="max-w-2xl mx-auto p-6">
    <NuxtLink to="/" class="text-indigo-600 hover:underline">
      ← Back
    </NuxtLink>

    <div v-if="notFound" class="mt-8 text-red-500">
      Resource not found.
    </div>

    <div v-else-if="resource" class="mt-8 bg-white p-6 rounded-lg shadow">
      <div class="flex items-center space-x-4">
        <img
          :src="resource.logo"
          :alt="resource.title"
          class="w-24 h-24 object-contain"
        />
        <h1 class="text-3xl font-bold">{{ resource.title }}</h1>
      </div>
      <p class="mt-4 text-gray-700">{{ resource.description }}</p>
      <a
        v-if="resource.link"
        :href="resource.link"
        target="_blank"
        class="mt-4 inline-block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
      >
        Visit Site
      </a>
    </div>

    <div v-else class="mt-8 text-gray-500">
      Loading…
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useResource } from '@/composables/useResource'

const route = useRoute()
const key = route.params.key as string

const { resource, notFound } = useResource(key)
</script>
