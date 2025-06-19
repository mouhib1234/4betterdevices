<template>
  <section
    id="aboutus"
    class="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-10 lg:px-[70px] border-b border-gray-100"
  >    <div class="mx-auto lg:mx-0 space-y-3 pb-16  max-w-md sm:max-w-lg lg:max-w-none">
  <div
    class="
      text-2xl     
      sm:text-4xl   
      lg:text-5xl  
      tracking-tight
      text-pretty text-gray-900
      gap-y-1   
      sm:gap-x-3 

      font-medium
      text-center       
      sm:text-left      
    "
  >
    <span>Our Expertise Propels Your</span>
    <span class="text-[#0FB2B1]"> Business.</span>
  </div>
</div>

    <div class="mx-auto px-6 lg:px-8 bg-[#1E40AF] py-10 rounded-3xl">
      <dl class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
        <div v-for="stat in stats" :key="stat.id" class="mx-auto flex max-w-xs flex-col gap-y-4">
          <dt class="text-base/7 text-white">{{ stat.name }}</dt>
          <dd class="order-first text-4xl font-semibold tracking-tight text-white sm:text-5xl">{{ stat.value }}</dd>
        </div>
      </dl>
    </div>
  </section>
</template>

<script setup lang="ts">
const stats = [
  { id: 1, name: 'Years of regulatory experience', value: '+10' },
  { id: 2, name: 'Trusted industry talks', value: '+30' },
  { id: 3, name: 'Medical devices supported and counting', value: '+100' },
]
</script>