<template>
  <div>
    <NuxtLink
      :to="`/resource/${resource.key}`"
      class="group relative block bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      <!-- ALWAYS vertical now -->
      <div class="flex flex-col">
        <div class="flex-shrink-0 flex items-center justify-center p-5 bg-blue-50">
          <div class="w-24 h-24 flex items-center justify-center">
            <img
              :src="resource.logo"
              :alt="resource.title + ' logo'"
              class="w-16 h-16 object-contain"
            />
          </div>
        </div>

        <div class="p-5 flex flex-col justify-between flex-1">
          <div>
            <span class="text-xs font-medium text-blue-700 uppercase">
              {{ resource.key }}
            </span>
            <h2 class="mt-1 text-xl font-semibold text-gray-900">
              {{ resource.title }}
            </h2>
            <p class="mt-2 text-gray-600">
              {{ resource.description }}
            </p>
          </div>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import type { Resource } from '@/composables/useResource'

const { resource } = defineProps<{ resource: Resource }>()
</script>
