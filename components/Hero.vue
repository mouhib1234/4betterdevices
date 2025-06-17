<template>
  <div>
    <div
      class="
        relative
        pt-30 pb-12
        xl:pt-40
        sm:pb-16
        lg:pb-32
        xl:pb-48
        2xl:pb-56
      "
    >
      <div class="absolute inset-0 z-0">
        <img
          class="object-cover w-full h-full"
          :src="CoverPicture"
          alt=""
        />
      </div>

      <div
        class="
          absolute inset-0 z-10
          bg-gradient-to-r
          from-black/100
          via-black/65
          to-transparent
        "
      ></div>

      <div class="relative z-20">
        <div class="mx-auto px-6 sm:px-8 lg:px-[100px]">
          <div class="w-full lg:w-2/3 xl:w-1/2">
            <span
              class="
                inline-block
                rounded-full
                bg-[#0FB2B1]/20
                px-3 py-1
                text-sm font-semibold
                text-[#0FB2B1]
              "
            >
              Trusted MedTech Experts
            </span>

            <p class="mt-6 tracking-tighter text-white">
              <span class="font-sans font-normal text-6xl">
                We are experts in
              </span>
              <br />
              <span class="font-serif italic font-normal text-7xl">
                Medical Devices.
              </span>
            </p>

            <p
              class="
                mt-6
                text-lg sm:text-xl
                font-sans font-normal
                leading-7
                text-white text-opacity-70
              "
            >
              We handle regulations, so you can focus on innovation and
              growth.
            </p>

            <p class="mt-4 text-lg text-gray-400">
              Trusted by 10+ MedTech startups worldwide
            </p>

            <div class="mt-10 flex flex-col sm:flex-row items-center gap-4">
              <a
                href="#"
                role="button"
                class="
                  inline-flex items-center justify-center
                  px-5 py-2
                  font-sans text-base font-semibold
                  transition-all duration-200
                  border-2 border-transparent
                  rounded-full
                  bg-white sm:text-lg text-black
                  hover:bg-opacity-90
                  focus:outline-none focus:ring-2
                  focus:ring-offset-2 focus:ring-primary
                  focus:ring-offset-secondary
                "
              >
                Talk to an expert
              </a>

              <a
                href="#services"
                class="text-lg text-gray-300 hover:text-white"
              >
                Learn more about our services &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CoverPicture from '@/assets/images/HeroBanner.jpg';
</script>
