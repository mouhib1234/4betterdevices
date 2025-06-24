<template>
  <div class="max-w-lg mx-auto">
    <div
      v-for="post in posts"
      :key="post.id"
      class="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5"
    >
      <a :href="post.url">
        <img
          class="rounded-t-lg"
          :src="post.image"
          :alt="post.title"
        />
      </a>
      <div class="p-5">
        <a :href="post.url">
          <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2">
            {{ post.title }}
          </h5>
        </a>
        <p class="font-normal text-gray-700 mb-3">
          {{ post.excerpt }}
        </p>
        <a
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
          :href="post.url"
        >
          Read more
        </a>
      </div>
    </div>

    <p class="mt-6">
      This card component is part of a larger, open-source library of Tailwind CSS components. Learn more by going to the official
      <a
        class="text-blue-600 hover:underline"
        href="#"
        target="_blank"
      >
        Flowbite Documentation
      </a>.
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const posts = ref([
  {
    id: 1,
    title: 'Noteworthy technology acquisitions 2021',
    excerpt: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
    image: 'https://flowbite.com/docs/images/blog/image-1.jpg',
    url: '#'
  },
  {
    id: 2,
    title: 'How to build a Nuxt 3 app with Tailwind CSS',
    excerpt: 'Step-by-step guide to scaffold, style, and deploy your Nuxt 3 project using Tailwind CSS.',
    image: 'https://flowbite.com/docs/images/blog/image-2.jpg',
    url: '#'
  },
  {
    id: 3,
    title: 'Understanding Composition API in Vue 3',
    excerpt: 'A deep dive into the new Composition API and how it compares to the Options API.',
    image: 'https://flowbite.com/docs/images/blog/image-3.jpg',
    url: '#'
  }
])
</script>

<style scoped>
/* any component-specific overrides */
</style>
