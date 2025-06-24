<template>
  <div class="relative group futuristic-card p-6 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden h-full">
    <div class="absolute top-0 left-0 w-2 h-12 bg-[#0FB2B1] opacity-75 transform -translate-x-1 -translate-y-1 group-hover:opacity-100 transition-opacity"></div>
    <div class="absolute bottom-0 right-0 w-12 h-2 bg-[#0FB2B1] opacity-75 transform translate-x-1 translate-y-1 group-hover:opacity-100 transition-opacity"></div>

    <div class="absolute inset-0 pointer-events-none before:absolute before:content-[''] before:block before:w-[200%] before:h-[200%] before:bg-gradient-to-r before:from-transparent before:via-[#0FB2B1]/20 before:to-transparent before:top-[-50%] before:left-[-50%] before:transform before:rotate-45 before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-500"></div>

    <div class="relative mb-4 w-14 h-14 flex items-center justify-center z-10">
      <div class="absolute inset-0 bg-[#0FB2B1] opacity-10 rounded-full"></div>
      <component
        :is="service.icon"
        class="relative z-10 w-8 h-8 text-[#0FB2B1]"
      />
    </div>

    <h5 class="mb-2 text-xl font-semibold tracking-tight text-gray-900 z-10">
      {{ service.name }}
    </h5>
    <p class="mb-4 font-normal text-gray-600 z-10">
      {{ service.description }}
    </p>

    <a
      href="#"
      class="inline-flex font-medium items-center text-[#0FB2B1] hover:underline z-10"
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

<style scoped>
.futuristic-card {
  transform: perspective(800px) translateZ(0);
  transition: transform 0.3s ease;
}
.futuristic-card.group-hover {
  transform: perspective(800px) translateZ(10px) rotateX(1deg) rotateY(-1deg);
}
.futuristic-card::after {
  content: '';
  position: absolute;
  top: -100%;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%);
  animation: scan 3s linear infinite;
  pointer-events: none;
}
@keyframes scan {
  0%   { top: -100%; }
  50%  { top: 100%; }
  100% { top: -100%; }
}
</style>
