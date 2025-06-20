<template>
  <section
    id="aboutus"
    class="relative isolate overflow-hidden bg-gradient-to-b from-black via-black to-[#00c7c7] px-6 py-10 sm:py-10 lg:px-[70px] border-b border-gray-100 perspective-[1000px]"
  >
    <div class="mx-auto lg:mx-0 space-y-3 pb-4 lg:max-w-none">
      <div
        class="text-3xl sm:text-4xl lg:text-5xl tracking-tight text-pretty text-gray-900 gap-y-1 sm:gap-x-3 font-medium text-center sm:text-left"
      >
        <span class="text-white">Our Expertise Propels Your</span>
        <span class="text-white"> Business.</span>
      </div>
    </div>

    <div class="px-6 lg:px-0 py-10 space-y-8">
      <dl class="grid grid-cols-1 gap-x-4 gap-y-4 text-center lg:grid-cols-3">
        <div
          v-for="stat in stats"
          :key="stat.id"
          class="mx-auto flex w-full flex-col items-center gap-y-4 hover:scale-105 bg-white/10 backdrop-blur-lg border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.25)] rounded-3xl p-10 [transform-style:preserve-3d]"
        >
          <dt class="text-base/7 text-white">{{ stat.name }}</dt>
          <dd class="order-first text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            {{ stat.value }}
          </dd>
        </div>
      </dl>
    </div>

    <svg
      class="absolute inset-0 z-[15] pointer-events-none h-[100vh] mix-blend-screen opacity-40"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      width="100%"
      height="100%"
    >
      <defs>
        <pattern id="smallGrid" width="10" height="10" patternUnits="userSpaceOnUse">
          <path
            d="M10 0 L0 0 0 10"
            fill="none"
            stroke="#0FB2B1"
            stroke-width="0.5"
          />
        </pattern>
        <linearGradient id="fadeGradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#fff" stop-opacity="1" />
          <stop offset="60%" stop-color="#fff" stop-opacity="1" />
          <stop offset="100%" stop-color="#fff" stop-opacity="0" />
        </linearGradient>
        <mask id="fadeMask">
          <rect x="0" y="0" width="100%" height="100%" fill="url(#fadeGradient)" />
        </mask>
      </defs>
      <rect
        x="0"
        y="0"
        width="100%"
        height="100%"
        fill="url(#smallGrid)"
        mask="url(#fadeMask)"
      />
    </svg>
  </section>
</template>

<script setup lang="ts">
const stats = [
  { id: 1, name: 'Years of regulatory experience', value: '+10' },
  { id: 2, name: 'Trusted industry talks', value: '+30' },
  { id: 3, name: 'Medical devices supported and counting', value: '+100' },
]
</script>
