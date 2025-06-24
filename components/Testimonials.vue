<template>
  <section
    id="testimonials"
    class="relative isolate overflow-hidden bg-white
           px-4 py-16 sm:px-6 lg:px-[70px] sm:py-24 border-b border-gray-100"
  >
    <div class="w-full">
      <!-- Header -->
      <div class="flex flex-col sm:flex-row items-center justify-between pb-12">
        <h2
          class="text-3xl sm:text-5xl font-medium tracking-tight text-gray-900 text-center sm:text-left"
        >
          <span>What Our Clients Say</span>
          <span
            class="text-cyan-500 bg-clip-text"
          >
            About us.
          </span>
        </h2>
        <div class="hidden sm:flex items-center space-x-2">
          <button
            @click="prevPage"
            :disabled="currentPage === 0"
            class="p-2 sm:p-3 rounded-full shadow
                   bg-gradient-to-br from-cyan-600 to-cyan-400
                   hover:from-cyan-500 hover:to-cyan-300
                   text-white transition disabled:opacity-50"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-6 sm:w-6" fill="none"
                 viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/>
            </svg>
          </button>
          <button
            @click="nextPage"
            :disabled="currentPage >= pageCount - 1"
            class="p-2 sm:p-3 rounded-full shadow
                   bg-gradient-to-br from-cyan-600 to-cyan-400
                   hover:from-cyan-500 hover:to-cyan-300
                   text-white transition disabled:opacity-50"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-6 sm:w-6" fill="none"
                 viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Cards -->
      <div class="flex items-center justify-center gap-2">
        <TestimonialCard
          v-if="slice[0]"
          :testimonial="slice[0]"
          class="hidden sm:block sm:w-1/3 opacity-75 transform scale-90 transition"
        />

        <TestimonialCard
          v-if="slice[1]"
          :testimonial="slice[1]"
          class="w-full sm:w-1/2 z-10 transform scale-105 shadow-lg transition"
        />

        <TestimonialCard
          v-if="slice[2]"
          :testimonial="slice[2]"
          class="hidden sm:block sm:w-1/3 opacity-75 transform scale-90 transition"
        />
      </div>

      <!-- Pagination dots -->
      <div class="flex justify-center mt-10 space-x-2">
        <span
          v-for="n in pageCount"
          :key="n"
          @click="currentPage = n - 1"
          class="h-2 w-5 sm:w-6 rounded-full cursor-pointer transition-all"
          :class="currentPage === (n - 1)
            ? 'bg-cyan-500'
            : 'bg-cyan-200'"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import TestimonialCard from '@/components/cards/TestimonialCard.vue'
import { testimonials } from '@/composables/useTestimonial'

const itemsPerPage = 3
const currentPage = ref(0)

const pageCount = computed(() =>
  Math.ceil(testimonials.length / itemsPerPage)
)

const slice = computed(() => {
  const start = currentPage.value * itemsPerPage
  return testimonials.slice(start, start + itemsPerPage)
})

function prevPage() {
  if (currentPage.value > 0) currentPage.value--
}
function nextPage() {
  if (currentPage.value < pageCount.value - 1) {
    currentPage.value++
  } else {
    currentPage.value = 0
  }
}

let intervalId: ReturnType<typeof setInterval>
onMounted(() => {
  intervalId = setInterval(nextPage, 4000)
})
onUnmounted(() => {
  clearInterval(intervalId)
})
</script>
