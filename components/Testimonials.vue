<template>
  <section class="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-10 lg:px-[70px] border-b border-gray-100">
    <div class="mx-auto lg:mx-0 space-y-3 pb-16">
      <p class="mt-6 text-lg/8 uppercase text-blue-600 font-semibold">Testimonials</p>
      <h2 class="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">What Our Clients Say About Us.</h2>
    </div>

    <div class="flex items-center justify-between space-x-4">
      <button
        @click="prevPage"
        class="p-4 rounded-lg text-blue-500 items-center shadow hover:bg-gray-100 transition"
      >
        <span class="text-xl">&larr;</span>
      </button>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          v-for="testimonial in paginatedTestimonials"
          :key="testimonial.id"
          class="bg-white shadow-lg rounded-lg p-6 transition duration-300 hover:shadow-xl relative"
        >
          <div class="absolute top-4 left-4 text-blue-600 text-3xl">“</div>
          <blockquote class="text-base text-gray-700 mt-6 pl-6">
            <p>{{ testimonial.quote }}</p>
          </blockquote>
          <figcaption class="flex items-center justify-between mt-6 pl-6">
            <div class="font-semibold text-gray-900">{{ testimonial.name }}</div>
            <img :src="testimonial.logo" alt="Logo" class="h-6 w-auto" />
          </figcaption>
        </div>
      </div>

      <button
        @click="nextPage"
        class="p-4 rounded-lg text-blue-500 items-center shadow hover:bg-gray-100 transition"
      >
        <span class="text-xl">&rarr;</span>
      </button>
    </div>

    <div class="flex justify-center mt-12 space-x-3">
      <span
        v-for="(page, index) in Math.ceil(testimonials.length / 2)"
        :key="index"
        @click="currentPage = index"
        class="h-2 w-6 rounded-full cursor-pointer transition-all duration-300"
        :class="currentPage === index ? 'bg-blue-600' : 'bg-gray-300'"
      />
    </div>
  </section>
</template>

<script lang="ts">
import LivaNovaLogo from '@/assets/images/LivaNovaLogo.png';

export default {
  data() {
    return {
      currentPage: 0,
      testimonials: [
        {
          id: 1,
          quote: "I had the pleasure of working with Cesare’s team at 4BetterDevices during my time as Senior Manager of Clinical Evaluation at LivaNova. They consistently delivered high-quality, MDR-compliant clinical evaluation writing services with professionalism and precision. Their expertise, responsiveness, and ability to integrate seamlessly with our internal teams made them a trusted partner in meeting regulatory requirements. I highly recommend their services to any MedTech organization.",
          name: "Eva H.",
          logo: LivaNovaLogo
        },
        {
          id: 2,
          quote: "Cesare's attention to detail was unmatched. His team's clinical evaluation reports helped us accelerate our CE submissions significantly.",
          name: "Liam R.",
          logo: LivaNovaLogo
        },
        {
          id: 3,
          quote: "Professional, responsive, and accurate – Cesare and team feel like an extension of our own department.",
          name: "Sophia M.",
          logo: LivaNovaLogo
        },
        {
          id: 4,
          quote: "The quality and clarity of their writing made our technical files stand out to auditors. We’ll definitely work with them again.",
          name: "Daniel T.",
          logo: LivaNovaLogo
        }
      ]
    };
  },
  computed: {
    paginatedTestimonials() {
      const perPage = 2;
      const start = this.currentPage * perPage;
      return this.testimonials.slice(start, start + perPage);
    }
  },
  methods: {
    nextPage() {
      const maxPage = Math.floor((this.testimonials.length - 1) / 2);
      if (this.currentPage < maxPage) {
        this.currentPage++;
      }
    },
    prevPage() {
      if (this.currentPage > 0) {
        this.currentPage--;
      }
    }
  }
};
</script>
