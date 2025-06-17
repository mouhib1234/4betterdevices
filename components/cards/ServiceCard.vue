<template>
  <div
    class="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow p-6 h-full flex flex-col"
  >
    <dt class="text-lg font-semibold text-gray-900 mb-2">
      {{ service.name }}
    </dt>
    <dd class="text-gray-600 flex-grow">
      {{ service.description }}
    </dd>
  </div>
</template>

<script setup lang="ts">
interface Service {
  name: string
  description: string
}

const props = defineProps<{
  service: Service
}>()
</script>
