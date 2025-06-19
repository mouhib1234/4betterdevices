<template>
  <div class="p-6 bg-white shadow-lg border-gray-200 rounded-lg h-full">
    <h5 class="mb-2 text-xl font-semibold tracking-tight text-gray-900">
      {{ resource.name }}
    </h5>

    <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
      {{ resource.description }}
    </p>

    <a
      href="#"
      class="inline-flex font-medium items-center text-[#0FB2B1] hover:underline"
    >
      Explore more
      <svg
        class="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 18 18"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15 11v4.833A1.166 1.166 0 0 1 13.833
             17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166
             1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111
             8.889l7.778-7.778"
        />
      </svg>
    </a>
  </div>
</template>

<script setup lang="ts">
import type { Resource } from '@/composables/useResource'

const { resource } = defineProps<{ resource: Resource }>()
</script>
