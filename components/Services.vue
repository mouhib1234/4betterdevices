<template>
  <div class="bg-gray-50 py-24 sm:py-16">
    <div class="mx-auto px-6 lg:px-[70px]">
      <div class="mx-auto max-w-2xl lg:mx-0 space-y-3">
        <p class="mt-6 text-lg/8 uppercase text-blue-600 font-semibold">Services</p>
        <h2 class="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">Our Expertise.</h2>
      </div>
      <dl class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base/7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
        <div class="divide-gray-200 overflow-hidden rounded-lg bg-white shadow-sm px-4 py-5 sm:p-6"  v-for="feature in features" :key="feature.name">
          <dt class="font-semibold text-gray-900 pb-4">{{ feature.name }}</dt>
          <dd class="mt-1 text-gray-600">{{ feature.description }}</dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<script setup>
const features = [
  {
    name: 'Push to deploy',
    description:
      'Aut illo quae. Ut et harum ea animi natus. Culpa maiores et sed sint et magnam exercitationem quia. Ullam voluptas nihil vitae dicta molestiae et. Aliquid velit porro vero.',
  },
  {
    name: 'SSL certificates',
    description:
      'Mollitia delectus a omnis. Quae velit aliquid. Qui nulla maxime adipisci illo id molestiae. Cumque cum ut minus rerum architecto magnam consequatur. Quia quaerat minima.',
  },
  {
    name: 'Simple queues',
    description:
      'Aut repellendus et officiis dolor possimus. Deserunt velit quasi sunt fuga error labore quia ipsum. Commodi autem voluptatem nam. Quos voluptatem totam.',
  },
  {
    name: 'Advanced security',
    description:
      'Magnam provident veritatis odit. Vitae eligendi repellat non. Eum fugit impedit veritatis ducimus. Non qui aspernatur laudantium modi. Praesentium rerum error deserunt harum.',
  },

]
</script>