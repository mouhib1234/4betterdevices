<template>
  <NuxtLink :to="`/`">
    <!--:to="`/service/${service.name}`-->
    <div
      class="relative group p-6 
            bg-white 
            hover:bg-gradient-to-br from-[#0ea2a1] hover:to-[#3fc1c1]
            rounded-2xl shadow-lg overflow-hidden h-full 
            transition-colors duration-300"
    >

      <div class="relative mb-4 w-14 h-14 flex items-center justify-center z-10">
        <div class="absolute inset-0 bg-[#0fb2b1]/10 rounded-full"></div>
        <component
          :is="service.icon"
          class="relative z-10 w-8 h-8 text-[#0ea2a1] 
                group-hover:text-white 
                transition-colors duration-300"
        />
      </div>

      <h5
        class="mb-2 text-xl font-semibold tracking-tight
              bg-clip-text text-black
            group-hover:text-white group-hover:bg-none
              transition-colors duration-300"
      >
        {{ service.name }}
      </h5>

      <p
        class="mb-4 font-normal
              bg-clip-text text-gray-500
            group-hover:text-white group-hover:bg-none
              transition-colors duration-300"
      >
        {{ service.description }}
      </p>
<!-- line-clamp-4-->
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { Service } from '@/composables/useService'

const { service } = defineProps<{ service: Service }>()
</script>
