<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <NuxtLink
      to="/"
      class="inline-flex items-center text-cyan-600 hover:underline text-sm font-medium"
    >
      ← Back to Resources
    </NuxtLink>

    <section v-if="notFound" class="mt-12 text-center text-red-500">
      Resource not found.
    </section>
    <section
      v-else
      class="mt-8 bg-white rounded-lg border border-gray-200 overflow-hidden"
    >
      <div class="flex flex-col sm:flex-row items-center sm:items-start p-6">
        <img
          :src="resource?.logo"
          :alt="resource?.title"
          class="w-24 h-24 sm:w-32 sm:h-32 object-contain rounded-md flex-shrink-0"
        />
        <div class="mt-4 sm:mt-0 sm:ml-6 text-center sm:text-left">
          <h1 class="text-2xl sm:text-3xl font-bold text-gray-900">
            {{ resource?.title }}
          </h1>
          <p class="mt-2 text-gray-700 leading-relaxed">
            {{ resource?.description }}
          </p>
          <a
            v-if="resource?.link"
            :href="resource?.link"
            target="_blank"
            rel="noopener"
            class="mt-4 inline-block px-5 py-2 bg-cyan-600 text-white font-medium rounded-md hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Visit Site
          </a>
        </div>
      </div>
    </section>
    <section
      v-if="resource?.posts && resource?.posts.length"
      class="my-16 grid auto-rows-fr grid-cols-1 gap-4 lg:mx-0 lg:max-w-none lg:grid-cols-4"
    >
      <article
        v-for="post in resource?.posts"
        :key="post?.id || post?.title"
        class="relative isolate flex flex-col justify-end overflow-hidden rounded-lg bg-gray-900 px-8 pt-80 pb-8 sm:pt-48 lg:pt-80"
      >
        <img
          :src="post?.imageUrl"
          :alt="post?.title"
          class="absolute inset-0 -z-10 w-full h-full object-cover"
        />
        <div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
        <div class="absolute inset-0 -z-10 rounded-lg ring-1 ring-gray-900/10 ring-inset" />

        <h3 class="mt-3 text-lg/6 font-semibold text-white line-clamp-2">
          <a :href="post?.href">
            <span class="absolute inset-0" />
            {{ post?.title }}
          </a>
        </h3>

        <p v-if="post?.description" class="mt-2 text-sm text-gray-300 line-clamp-3">
          {{ post?.description }}
        </p>
      </article>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useResource } from '@/composables/useResource'

const route = useRoute()
const key = route.params.key as string
const { resource, notFound } = useResource(key)
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
