<template>
  <section
    id="testimonials-vertical"
    class="relative z-20 isolate overflow-hidden bg-black
           px-4 py-16 sm:px-[70px] mx-auto sm:py-24 border-b border-gray-100"
  >
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div>
        <div class="relative flex flex-col items-center">
          <div class="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4">
            <button
              @click="goPrev"
              class="p-2 sm:p-3 rounded-2xl shadow
                     bg-gradient-to-br from-[#a20e68] to-[#cb5ea1]
                     hover:from-[#0fb2b1] hover:to-[#5ecbcb]
                     text-white transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-6 sm:w-6" fill="none"
                   viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7"/>
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
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
          </div>

          <div class="flex flex-col items-center justify-center gap-4">
            <div
              v-for="(item, idx) in visibleTestimonials"
              :key="item.id"
              @click="idx === 0 ? goPrev() : idx === 2 ? goNext() : null"
              class="cursor-pointer transition"
              :class="idx === 1
                ? 'w-full z-20 transform -translate-x-2 scale-110 shadow-2xl opacity-100 rounded-2xl'
                : 'hidden sm:block sm:h-64 sm:w-[50rem] max-w-lg transform scale-90 opacity-60 rounded-2xl'
              "
            >
              <TestimonialCard :testimonial="item" />
            </div>
          </div>
          <div class="flex justify-center mt-8 space-x-2">
            <span
              v-for="(_, i) in testimonials.length"
              :key="i"
              @click="currentIndex = i"
              class="h-2 w-6 rounded-full cursor-pointer transition-all"
              :class="currentIndex === i ? 'bg-[#0fb2b1]' : 'bg-[#91cdcb]'"
            />
          </div>
        </div>
      </div>

      <div class="">
        <client-only>
          <CalendlyInline url="https://calendly.com/heartbeat-4betterdevices/erstgesprach" />
        </client-only>
      </div>
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
