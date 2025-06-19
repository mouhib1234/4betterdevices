<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
    :class="props.class"
  >
    <g transform="rotate(-20 12 12)">
      <line x1="2" y1="12" x2="6" y2="12" />

      <rect x="6" y="11" width="2" height="2" rx="0.5" />

      <rect x="8" y="9" width="10" height="6" rx="1" />

      <line x1="18" y1="9" x2="22" y2="5" />
      <line x1="18" y1="15" x2="22" y2="19" />

      <rect x="20" y="4" width="2" height="16" rx="1" />
    </g>
  </svg>
</template>

<script setup lang="ts">
const props = defineProps<{ class?: string }>()
</script>
