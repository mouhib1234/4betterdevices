<template>
  <div>
    <component
      :is="resource.link ? 'a' : NuxtLink"
      v-bind="linkProps"
      class="group relative block bg-gradient-to-br from-white to-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0fb2b1]"
    >
      <div class="p-6 flex flex-col min-h-70">
        <div class="flex items-start justify-between mb-4">
          <div class="flex-shrink-0 bg-white rounded-full p-2">
            <img
              :src="resource.logo"
              :alt="`${resource.title} logo`"
              class="w-auto h-14 object-contain"
            />
          </div>
          <span class="inline-block px-3 py-1 text-xs font-semibold uppercase bg-[#f7e7f1] text-[#b20f72] rounded-full">
            {{ resource.key }}
          </span>
        </div>

        <h2 class="text-2xl font-bold text-gray-800 mb-2 group-hover:text-[#0fb2b1] transition-colors duration-200">
          {{ resource.title }}
        </h2>

        <p class="text-gray-600 flex-1">
          {{ resource.description }}
        </p>

        <div class="mt-4 flex items-center justify-end">
          <svg
            class="w-5 h-5 text-gray-400 group-hover:text-[#0fb2b1] transition-colors duration-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </div>
      </div>
    </component>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { NuxtLink } from '#components'
import type { Resource } from '@/composables/useResource'

const props = defineProps<{ resource: Resource }>()

const linkProps = computed(() =>
  props.resource.link
    ? {
        href: props.resource.link,
        target: '_blank',
        rel: 'noopener noreferrer',
      }
    : {
        to: `/resource/${props.resource.key}`,
      }
)
</script>
