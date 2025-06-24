<template>
  <figure class="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl relative h-full">
    <div class="absolute top-4 left-4 text-cyan-600 text-5xl z-10" aria-hidden="true">
      “
    </div>

    <div class="relative mt-8 pl-2">
      <blockquote
        ref="quoteRef"
        :class="[
          'text-lg italic text-gray-700 transition-all',
          !expanded && 'line-clamp-4 overflow-hidden'
        ]"
      >
        <p>{{ testimonial.quote }}</p>
      </blockquote>

      <a
        v-if="isOverflowing && !expanded"
        @click="expanded = true"
        class="absolute bottom-0 right-0 bg-white pl-1 italic text-lg text-cyan-500 cursor-pointer"
      >
        ...Read more
      </a>
    </div>

    <a
      v-if="expanded"
      @click="expanded = false"
      class="mt-2 pl-1 inline-block italic text-lg text-cyan-500 cursor-pointer"
    >
      Show less
    </a>

    <figcaption class="flex items-center justify-between mt-6 px-2">
      <div class="font-semibold text-gray-900">{{ testimonial.name }}</div>
      <img :src="testimonial.logo" alt="Logo" class="h-6 w-auto" />
    </figcaption>
  </figure>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, nextTick } from 'vue'
import type { Testimonial } from '@/composables/useTestimonial'

const { testimonial } = defineProps<{ testimonial: Testimonial }>()
const expanded = ref(false)
const isOverflowing = ref(false)
const quoteRef = ref<HTMLElement|null>(null)

function checkOverflow() {
  const el = quoteRef.value
  if (el) {
    isOverflowing.value = el.scrollHeight > el.clientHeight + 1
  }
}

onMounted(() => nextTick(checkOverflow))
watch(
  () => testimonial.quote,
  () => nextTick(() => {
    expanded.value = false
    checkOverflow()
  })
)
</script>
