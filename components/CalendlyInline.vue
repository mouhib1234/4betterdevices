<template>
  <div
    ref="container"
    class="calendly-inline-widget"
    :data-url="url"
    style="min-width:320px; height:700px;"
  ></div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const props = defineProps<{
  url: string
}>()

const container = ref<HTMLElement>()

onMounted(() => {
  if (!document.getElementById('calendly-widget-script')) {
    const script = document.createElement('script')
    script.id = 'calendly-widget-script'
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)
  }
})
</script>
