<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    :class="props.class"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M2.036 12.322C3.183 8.685 6.028 5.5 12 5.5s8.817
         3.185 9.964 6.822a1.012 1.012 0 010 .255C20.817
         15.315 17.972 18.5 12 18.5S3.183 15.315 2.036
         12.322z"
    />
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
</template>

<script setup lang="ts">
const props = defineProps<{
  class?: string
}>()
</script>
