<template>
  <section
    id="testimonials"
    class="relative isolate overflow-hidden bg-gray-50 px-6 py-24 sm:py-10 lg:px-[70px] border-b border-gray-100"
  >
    <div class="mx-auto lg:mx-0 space-y-3 pb-16">
      <div
        class="text-4xl tracking-tight text-pretty text-gray-900 sm:text-5xl font-medium"
      >
        <span>What Our Clients Say</span>
        <span class="text-[#0FB2B1]"> About us.</span>
      </div>
    </div>

    <div class="flex items-center justify-between space-x-4">
      <button
        @click="prevPage"
        :disabled="currentPage === 0"
        class="p-3 rounded-full shadow bg-[#1E40AF] text-white hover:bg-[#152D7C] transition disabled:opacity-50"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
             viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/>
        </svg>
      </button>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div v-for="testimonial in paginated" :key="testimonial.id">
          <TestimonialCard :testimonial="testimonial" />
        </div>
      </div>

      <button
        @click="nextPage"
        :disabled="currentPage >= pageCount - 1"
        class="p-3 rounded-full shadow bg-[#1E40AF] text-white hover:bg-[#152D7C] transition disabled:opacity-50"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
             viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
        </svg>
      </button>
    </div>

    <div class="flex justify-center mt-12 space-x-3">
      <span
        v-for="n in pageCount"
        :key="n"
        @click="currentPage = n - 1"
        class="h-2 w-6 rounded-full cursor-pointer transition-all duration-300"
        :class="currentPage === (n - 1) ? 'bg-blue-600' : 'bg-gray-300'"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import TestimonialCard from '@/components/cards/TestimonialCard.vue'
import { testimonials } from '@/composables/useTestimonial' 

const itemsPerPage = 2
const currentPage = ref(0)

const pageCount = computed(() =>
  Math.ceil(testimonials.length / itemsPerPage)
)

const paginated = computed(() => {
  const start = currentPage.value * itemsPerPage
  return testimonials.slice(start, start + itemsPerPage)
})

function prevPage() {
  if (currentPage.value > 0) currentPage.value--
}
function nextPage() {
  if (currentPage.value < pageCount.value - 1) currentPage.value++
}
</script>
