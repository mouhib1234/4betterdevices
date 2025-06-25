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
        bg-black
        h-[100vh]
      "
    >
      <div class="absolute inset-0 z-0 lg:hidden">
        <video
          class="object-cover w-full h-full mix-blend-screen opacity-75"
          autoplay
          muted
          loop
          playsinline
        >
          <source :src="CoverVideo" type="video/mp4" />
        </video>
        <div
          class="
            absolute inset-0
            z-10
            bg-gradient-to-r
            from-black/100
            via-black/65
            to-transparent
          "
        ></div>
      </div>

      <div class="absolute inset-0 z-0 hidden lg:block">
        <div class="absolute inset-0 flex justify-end items-center">
          <div class="relative w-[75%] h-full overflow-hidden">
            <video
              class="object-cover object-left w-full h-full bg-blend-overlay"
              autoplay
              muted
              loop
              playsinline
            >
              <source :src="CoverVideo" type="video/mp4" />
            </video>
            <div
              class="
                absolute inset-0
                z-10
                bg-gradient-to-r
                from-black/100
                via-black/20
                to-transparent
              "
            ></div>
          </div>
        </div>
      </div>

      <svg
        class="
          absolute inset-0
          z-[15]
          pointer-events-none
          h-[100vh]
          mix-blend-screen
          opacity-40
        "
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

      <div class="relative z-20">
        <div class="mx-auto px-6 sm:px-8 lg:px-[70px]">
          <div class="w-full lg:w-2/3 xl:w-1/2 text-center sm:text-left">
            <p class="mt-10 tracking-tighter text-white">
              <span class="font-sans font-normal text-7xl">We are experts in</span><br />
              <span class="text-[#0fb2b1] font-semibold text-7xl">Medical Devices.</span>
            </p>
            <p
              class="
                mt-6
                text-lg
                sm:text-2xl
                font-sans
                font-normal
                leading-7
                text-white
                text-opacity-70
              "
            >
              We handle regulations. You focus on <span>growth.</span>
            </p>
            <div class="mt-10 flex flex-col sm:flex-row items-center gap-4">
              <a
                href="#contact"
                role="button"
                class="
                  inline-flex items-center justify-center
                  font-semibold font-sans
                  px-8 py-4             
                  text-lg sm:text-lg   
                  rounded-full
                  bg-white text-black
                  hover:bg-[#0fb2b1] hover:text-white hover:bg-opacity-90
                  focus:outline-none focus:ring-2 focus:ring-[#0fb2b1] focus:ring-offset-2
                  shadow-lg      
                  w-full sm:w-auto    
                  transition           
                "
              >
                Talk to an expert
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CoverVideo from '@/assets/videos/BackgroundLoop.mp4';
</script>
