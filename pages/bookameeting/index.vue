<template>
  <section
    class="relative isolate overflow-hidden
           px-4 py-16 sm:px-6 lg:px-[70px] border-b border-gray-100"
  >
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div class="flex flex-col items-center lg:items-start">
        <div class="flex flex-col items-center sm:items-start gap-4 h-[600px]">
          <TestimonialCard
            v-if="slice[1]"
            :testimonial="slice[1]"
            class="w-full z-10 transform scale-105 shadow-lg transition"
          />

          <TestimonialCard
            v-if="slice[2]"
            :testimonial="slice[2]"
            class="hidden sm:block opacity-75 transform scale-90 transition"
          />
          <TestimonialCard
            v-if="slice[0]"
            :testimonial="slice[0]"
            class="hidden sm:block opacity-75 transform scale-90 transition"
          />
        </div>
        <div class="flex justify-center sm:justify-start mt-8 space-x-2">
          <span
            v-for="n in pageCount"
            :key="n"
            @click="currentPage = n - 1"
            class="h-2 w-5 sm:w-6 rounded-full cursor-pointer transition-all"
            :class="currentPage === (n - 1) ? 'bg-cyan-500' : 'bg-cyan-200'"
          />
        </div>
      </div>
      <div class="w-full bg-gray-200">
        <client-only>
          <CalendlyInline url="https://calendly.com/heartbeat-4betterdevices/erstgesprach" />
        </client-only>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import TestimonialCard from '@/components/cards/TestimonialCard.vue'
import CalendlyInline from '@/components/CalendlyInline.vue'
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
