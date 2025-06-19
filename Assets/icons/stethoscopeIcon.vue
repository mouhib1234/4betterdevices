<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    stroke-width="1.5"
    :class="props.class"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M6 4h-1a2 2 0 0 0-2 2v3.5h0a5.5 5.5 0 0 0 11 0v-3.5a2 2 0 0 0-2-2h-1"
    />
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M8 15a6 6 0 1 0 12 0v-3"
    />
    <path stroke-linecap="round" stroke-linejoin="round" d="M11 3v2" />
    <path stroke-linecap="round" stroke-linejoin="round" d="M6 3v2" />
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M20 10m-2 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0"
    />
  </svg>
</template>

<script setup lang="ts">
const props = defineProps<{ class?: string }>()
</script>
