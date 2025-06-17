<template>
  <div class="bg-gray-900">
    <div class="relative isolate overflow-hidden">
      <img
        :src="CoverPicture"
        alt="Medical professionals with equipment"
        class="absolute inset-0 -z-10 size-full object-cover transform transition-transform duration-700 hover:scale-105"
      />

      <div class="absolute inset-0 bg-black opacity-70 -z-10"></div>

      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-44 text-center">
          <span class="inline-block mb-4 rounded-full bg-[#0FB2B1]/20 px-3 py-1 text-sm font-semibold text-[#0FB2B1]">
            Trusted MedTech Experts
          </span>

           <h1 class="text-5xl font-bold tracking-tight text-white sm:text-7xl">
            We are experts in <span class="text-[#0FB2B1]">Medical Devices</span>
           </h1>

          <p class="mt-6 text-lg sm:text-xl text-gray-300 max-w-xl mx-auto">
            We handle compliance, so you can focus on innovation and growth.
          </p>

          <p class="mt-4 text-sm text-gray-400">
            Trusted by 10+ MedTech startups worldwide
          </p>

          <div class="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="#contact"
              class="rounded-md bg-[#0FB2B1] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#0FB2B1]/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0FB2B1]"
            >
              Talk to an expert
            </a>
            <a
              href="#services"
              class="text-sm font-medium text-gray-300 hover:text-white"
            >
              Learn more about our services &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CoverPicture from '@/assets/images/HeroCoverPicture.jpg';
</script>
