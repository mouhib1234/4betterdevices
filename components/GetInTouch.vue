<template>
  <section id="contact" class="relative isolate bg-white border-b border-gray-100">
    <div class="grid grid-cols-1 lg:grid-cols-2">

      <div
        class="relative px-6 py-8 sm:py-20 lg:px-[70px]
               text-white overflow-hidden bg-gradient-to-b
               from-black/100 via-black/40 to-[#00c7c7]/20"
      >
        <div class="absolute inset-x-0 bottom-0 -z-20 lg:h-full pt-80 bg-black">
          <video
            class="object-cover w-full h-full mix-blend-screen opacity-100"
            autoplay
            muted
            loop
            playsinline
          >
            <source :src="CoverVideo" type="video/mp4" />
          </video>
        </div>
        <div class="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-black to-transparent"></div>
        <svg
          class="absolute inset-0 z-10 pointer-events-none h-[100vh] mix-blend-screen opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          width="100%"
          height="100%"
        >
          <defs>
            <pattern id="smallGrid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M10 0 L0 0 0 10" fill="none" stroke="#0FB2B1" stroke-width="0.5" />
            </pattern>
            <linearGradient id="fadeGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stop-color="#fff" stop-opacity="1" />
              <stop offset="60%" stop-color="#fff" stop-opacity="1" />
              <stop offset="100%" stop-color="#fff" stop-opacity="0" />
            </linearGradient>
            <mask id="fadeMask">
              <rect x="0" y="0" width="100%" height="100%" fill="url(#fadeGradient)" />
            </mask>
          </defs>
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="url(#smallGrid)"
            mask="url(#fadeMask)"
          />
        </svg>
        <div class="relative mx-auto lg:mx-0 max-w-lg">
          <h2 class="text-4xl font-semibold tracking-tight sm:text-5xl">
            Unlock Market Access, Contact us.
          </h2>
          <p class="mt-6 text-lg leading-relaxed text-gray-200">
            Proin volutpat consequat porttitor cras nullam gravida at. Orci molestie a eu arcu. Sed ut tincidunt integer elementum id sem. Arcu sed malesuada et magna.
          </p>
        </div>
      </div>

      <form action="#" method="POST" class="px-6 py-10 lg:pt-20 lg:px-[70px]">
        <div class="mx-auto">
          <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">

            <div>
              <label for="first-name" class="block text-sm font-semibold text-gray-900">First name</label>
              <div class="mt-2.5">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autocomplete="given-name"
                  class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-blue-600"
                />
              </div>
            </div>

            <div>
              <label for="last-name" class="block text-sm font-semibold text-gray-900">Last name</label>
              <div class="mt-2.5">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autocomplete="family-name"
                  class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-blue-600"
                />
              </div>
            </div>

            <div class="sm:col-span-2">
              <label for="email" class="block text-sm font-semibold text-gray-900">Email</label>
              <div class="mt-2.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autocomplete="email"
                  class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-blue-600"
                />
              </div>
            </div>
            <div class="sm:col-span-2">
              <label for="services" class="block text-sm font-semibold text-gray-900">Services</label>
              <div class="mt-2.5">
                <select
                  name="services"
                  id="services"
                  class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 outline-gray-300 focus:outline-2 focus:outline-blue-600"
                >
                  <option value="clinical_strategy">Clinical strategy and clinical evaluation</option>
                  <option value="market_access">Market access EU &amp; US &amp; International</option>
                  <option value="rwe_studies">Real world evidence and studies</option>
                  <option value="post_market">Post market surveillance and follow up</option>
                  <option value="risk_management">Risk management</option>
                  <option value="biocompatibility">Biocompatibility</option>
                </select>
              </div>
            </div>
            <div class="sm:col-span-2">
              <label for="phone-number" class="block text-sm font-semibold text-gray-900">Phone number</label>
              <div class="flex items-center mt-2.5">
                <button
                  id="dropdown-phone-button"
                  data-dropdown-toggle="dropdown-phone"
                  type="button"
                  class="shrink-0 inline-flex items-center py-2.5 px-4 text-sm font-medium text-gray-900 bg-white border border-gray-300 rounded-l-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200"
                >
                  United States (+1)
                  <svg class="w-2.5 h-2.5 ml-2" aria-hidden="true" fill="none" viewBox="0 0 10 6" xmlns="http://www.w3.org/2000/svg">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                  </svg>
                </button>
                <input
                  type="tel"
                  id="phone-number"
                  name="phone-number"
                  placeholder="123-456-7890"
                  required
                  class="block flex-1 rounded-r-md bg-white px-3.5 py-2 text-base text-gray-900 border border-gray-300 focus:outline-2 focus:outline-blue-600"
                />
              </div>
              <div
                id="dropdown-phone"
                class="hidden z-10 bg-white divide-y divide-gray-200 rounded-lg shadow w-52 mt-1"
                aria-labelledby="dropdown-phone-button"
              >
                <ul class="py-2 text-sm text-gray-700">
                  <li>
                    <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-50">
                      United Kingdom (+44)
                    </button>
                  </li>
                  <li>
                    <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-50">
                      Australia (+61)
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div class="sm:col-span-2">
              <label for="message" class="block text-sm font-semibold text-gray-900">Message</label>
              <div class="mt-2.5">
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-blue-600"
                ></textarea>
              </div>
            </div>
          </div>
          <div class="mt-8 flex justify-end">
            <button
              type="submit"
              class="px-5 py-2 text-base font-normal leading-7 font-sans
                      bg-[#0FB2B1] text-white rounded-full
                      border-transparent shadow-[0_4px_15px_rgba(15,178,177,0.5)]
                      ring-1 ring-[#0FB2B1] ring-opacity-50
                      transition-all duration-300 transform
                      hover:shadow-[0_6px_20px_rgba(15,178,177,0.7)]
                      hover:ring-opacity-100 hover:-translate-y-0.5
                      active:translate-y-0.5
                      focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[#0FB2B1]"
            >
              Send message
            </button>
          </div>
        </div>
      </form>

    </div>
  </section>
</template>

<script setup lang="ts">
import CoverVideo from '@/assets/videos/BackgroundLoop.mp4';
</script>
