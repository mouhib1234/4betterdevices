<template>
  <div
    class="relative group p-6 
           bg-gradient-to-br from-cyan-100 to-cyan-50 
           hover:from-cyan-600 hover:to-cyan-400 
           border border-cyan-500/20 
           rounded-lg shadow-lg overflow-hidden h-full 
           transition-colors duration-300"
  >
    <!-- Corner accents -->
    <div
      class="absolute top-0 left-0 w-2 h-12 
             bg-cyan-500/75 
             transform -translate-x-1 -translate-y-1 
             group-hover:bg-cyan-300/90 
             transition-colors"
    ></div>
    <div
      class="absolute bottom-0 right-0 w-12 h-2 
             bg-cyan-500/75 
             transform translate-x-1 translate-y-1 
             group-hover:bg-cyan-300/90 
             transition-colors"
    ></div>

    <!-- Icon -->
    <div class="relative mb-4 w-14 h-14 flex items-center justify-center z-10">
      <div class="absolute inset-0 bg-cyan-500/10 rounded-full"></div>
      <component
        :is="service.icon"
        class="relative z-10 w-8 h-8 text-cyan-600 
               group-hover:text-white 
               transition-colors duration-300"
      />
    </div>

    <!-- Title with gradient text -->
    <h5
      class="mb-2 text-xl font-semibold tracking-tight
             bg-clip-text text-transparent
             bg-gradient-to-r from-cyan-800 to-cyan-500
             group-hover:text-white group-hover:bg-none
             transition-colors duration-300"
    >
      {{ service.name }}
    </h5>

    <!-- Description with lighter gradient -->
    <p
      class="mb-4 font-normal
             bg-clip-text text-transparent
             bg-gradient-to-r from-cyan-800 to-cyan-500
             group-hover:text-white group-hover:bg-none
             transition-colors duration-300"
    >
      {{ service.description }}
    </p>

    <!-- Link with gradient underline text -->
    <a
      href="#"
      class="inline-flex font-medium items-center
             bg-clip-text text-transparent
             bg-gradient-to-r from-cyan-800 to-cyan-500
             group-hover:text-white group-hover:bg-none
             hover:underline transition-colors duration-300 z-10"
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
import type { Service } from '@/composables/useService'

const { service } = defineProps<{ service: Service }>()
</script>
