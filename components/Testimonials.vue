<template>
  <section
    id="testimonials"
    class="relative z-20 isolate overflow-hidden bg-[#e7f7f7] 
           px-4 py-16 sm:px-6 mx-auto lg:px-[70px] sm:py-24 border-b border-gray-100"
  >
      <div class="flex flex-col sm:flex-row items-center justify-between pb-20">
        <h2
          class="text-3xl sm:text-5xl font-medium tracking-tight text-gray-900 text-center sm:text-left"
        >
          <span>What Our Clients Say</span>
          <span
            class="bg-gradient-to-r from-[#a20e68] to-[#0fb2b1]
                   bg-clip-text text-transparent"
          >
            About us.
          </span>
        </h2>
        <div class="hidden sm:flex items-center space-x-2">
          <button
            @click="goPrev"
            class="p-2 sm:p-3 rounded-2xl shadow
                   bg-gradient-to-br from-[#a20e68] to-[#cb5ea1]
                   hover:from-[#0fb2b1] hover:to-[#5ecbcb]
                   text-white transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-6 sm:w-6" fill="none"
                 viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/>
            </svg>
          </button>
          <button
            @click="goNext"
            class="p-2 sm:p-3 rounded-2xl shadow
                   bg-gradient-to-br from-[#a20e68] to-[#cb5ea1]
                   hover:from-[#0fb2b1] hover:to-[#5ecbcb]
                   text-white transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-6 sm:w-6" fill="none"
                 viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>

      <div class="flex items-center justify-center gap-2">
        <div
          v-for="(item, idx) in visibleTestimonials"
          :key="item.id"
          @click="idx === 0 ? goPrev() : idx === 2 ? goNext() : null"
          class="cursor-pointer transition"
          :class="[
            idx === 1
              ? 'w-full sm:w-1/2 z-20 transform -translate-y-2 scale-110 shadow-2xl opacity-100 rounded-2xl'
              : 'hidden sm:block sm:w-1/3 transform scale-90 opacity-60 rounded-2xl'
          ]"
        >
          <TestimonialCard :testimonial="item" />
        </div>
      </div>

      <!-- Dots -->
      <div class="flex justify-center mt-10 space-x-2">
        <span
          v-for="(_, i) in testimonials.length"
          :key="i"
          @click="currentIndex = i"
          class="h-2 w-5 sm:w-6 rounded-full cursor-pointer transition-all"
          :class="currentIndex === i ? 'bg-[#0fb2b1]' : 'bg-[#91cdcb]'"
        />
      </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import TestimonialCard from '@/components/cards/TestimonialCard.vue'
import { testimonials } from '@/composables/useTestimonial'

const currentIndex = ref(0)
const len = testimonials.length

const prevIndex = computed(() => (currentIndex.value - 1 + len) % len)
const nextIndex = computed(() => (currentIndex.value + 1) % len)

const visibleTestimonials = computed(() => [
  testimonials[prevIndex.value],
  testimonials[currentIndex.value],
  testimonials[nextIndex.value],
])

function goPrev() {
  currentIndex.value = prevIndex.value
}
function goNext() {
  currentIndex.value = nextIndex.value
}
</script>
  