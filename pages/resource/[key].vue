<template>
     <div>
      <banner :resource="resource!" />
    </div>
    <div class="max-w-6xl mx-auto bg-white rounded-lg overflow-hidden">
      <section v-if="notFound" class="mt-12 text-center text-red-500">
        Resource not found.
      </section>

      <section
        v-else-if="resource?.posts && resource.posts.length"
        class="my-8 grid auto-rows-fr grid-cols-1 gap-4 lg:mx-0 lg:max-w-none lg:grid-cols-4"
      >
        <article
          v-for="post in resource.posts"
          :key="post.id ?? post.title"
          class="relative isolate flex flex-col justify-end overflow-hidden rounded-lg bg-gray-900 px-8 pt-80 pb-8 sm:pt-48 lg:pt-80"
        >
          <img
            :src="post.imageUrl"
            :alt="post.title"
            class="absolute inset-0 -z-10 w-full h-full object-cover"
          />
          <div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
          <div class="absolute inset-0 -z-10 rounded-lg ring-1 ring-gray-900/10 ring-inset" />

          <h3 class="mt-3 text-lg/6 font-semibold text-white line-clamp-2">
            <a
              :href="post.href"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span class="absolute inset-0" />
              {{ post.title }}
            </a>
          </h3>
        </article>
      </section>

      <section
        v-else
        class="mt-12 flex flex-col items-center justify-center space-y-6 py-16 bg-gray-50 rounded-lg shadow-inner"
      >
        <svg
          class="w-16 h-16 text-gray-400 animate-pulse"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 8v4l2 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        <h2 class="text-5xl font-semibold text-gray-900">
          Coming Soon
        </h2>

        <p class="max-w-md text-center text-lg text-gray-600">
          We’re busy crafting content for this resource. Check back soon for updates!
        </p>

        <NuxtLink
            type="button"
            to="/"
            class="
              relative inline-flex items-center justify-center
              px-5 py-2 text-base font-semibold leading-7 font-sans
              bg-[#0fb2b1] text-white rounded-full
              border border-transparent
              shadow-[0_4px_15px_rgba(15,178,177,0.5)]
              ring-1 ring-[#0FB2B1] ring-opacity-50
              transition-all duration-300 transform
              hover:shadow-[0_6px_20px_rgba(15,178,177,0.7)]
              hover:ring-opacity-100
              hover:-translate-y-0.5
              active:translate-y-0.5
              focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[#0fb2b1] focus:ring-offset-secondary
            "
          >
          ← Back to Resources
        </NuxtLink>
      </section>

    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useResource } from '@/composables/useResource'
import Banner from '@/components/banners/resourcebanner.vue'

const route = useRoute()
const router = useRouter()
const key = route.params.key as string
const { resource, notFound } = useResource(key)

onMounted(() => {
  if (resource?.value?.link) {
    window.location.href = resource.value.link
  }
})
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
