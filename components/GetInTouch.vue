<template>
  <section id="contact" class="relative isolate bg-white border-b border-gray-100">
    <div class="grid grid-cols-1 lg:grid-cols-2">

      <div
        class="relative px-6 py-12 sm:py-12 lg:px-20 overflow-hidden text-white
               bg-gradient-to-br from-cyan-800 to-cyan-500
               backdrop-blur-sm"
      >
        <div class="absolute top-0 -left-16 w-64 h-64 bg-gradient-to-tr from-cyan-400 to-cyan-200
                    rounded-full opacity-30 blur-3xl animate-blob animation-delay-2000"></div>
        <div class="absolute bottom-0 -right-16 w-64 h-64 bg-gradient-to-tr from-cyan-300 to-cyan-100
                    rounded-full opacity-30 blur-3xl animate-blob animation-delay-4000"></div>

        <img
          :src="CoverPicture"
          alt="Background cover"
          class="absolute bottom-0 left-[20rem] transform -translate-x-1/2 z-20 w-auto h-[25rem]
                 opacity-50 mix-blend-overlay"
        />

        <div class="relative z-30 mx-auto max-w-lg lg:mx-0">
          <h2 class="text-4xl font-semibold tracking-tight sm:text-5xl">
            Unlock Market Access, Contact Us.
          </h2>
          <p class="mt-6 text-lg leading-relaxed text-gray-200">
            Proin volutpat consequat porttitor cras nullam gravida at. Orci molestie a eu arcu.
            Sed ut tincidunt integer elementum id sem. Arcu sed malesuada et magna.
          </p>
        </div>
      </div>

      <form action="#" method="POST" class="px-6 py-10 lg:pt-12 lg:px-[70px]">
        <div class="mx-auto">
          <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <!-- First name -->
            <div>
              <label for="first-name" class="block text-sm font-semibold text-gray-900">
                First name
              </label>
              <div class="mt-2.5">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autocomplete="given-name"
                  class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900
                         outline-1 outline-gray-300 placeholder:text-gray-400
                         focus:outline-2 focus:outline-cyan-600"
                />
              </div>
            </div>
            <!-- Last name -->
            <div>
              <label for="last-name" class="block text-sm font-semibold text-gray-900">
                Last name
              </label>
              <div class="mt-2.5">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autocomplete="family-name"
                  class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900
                         outline-1 outline-gray-300 placeholder:text-gray-400
                         focus:outline-2 focus:outline-cyan-600"
                />
              </div>
            </div>
            <!-- Email -->
            <div class="sm:col-span-2">
              <label for="email" class="block text-sm font-semibold text-gray-900">
                Email
              </label>
              <div class="mt-2.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autocomplete="email"
                  class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900
                         outline-1 outline-gray-300 placeholder:text-gray-400
                         focus:outline-2 focus:outline-cyan-600"
                />
              </div>
            </div>
            <!-- Services -->
            <div class="sm:col-span-2">
              <label for="services" class="block text-sm font-semibold text-gray-900">
                Services
              </label>
              <div class="mt-2.5">
                <select
                  name="services"
                  id="services"
                  class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900
                         outline-1 outline-gray-300 focus:outline-2 focus:outline-cyan-600"
                >
                  <option value="clinical_strategy">Clinical strategy and evaluation</option>
                  <option value="market_access">Market access (EU/US/International)</option>
                  <option value="rwe_studies">Real world evidence & studies</option>
                  <option value="post_market">Post market surveillance</option>
                  <option value="risk_management">Risk management</option>
                  <option value="biocompatibility">Biocompatibility</option>
                </select>
              </div>
            </div>
            <!-- Phone -->
            <div class="sm:col-span-2">
              <label for="phone-number" class="block text-sm font-semibold text-gray-900">
                Phone number
              </label>
              <div class="flex items-center mt-2.5">
                <button
                  id="dropdown-phone-button"
                  data-dropdown-toggle="dropdown-phone"
                  type="button"
                  class="shrink-0 inline-flex items-center py-2.5 px-4 text-sm font-medium
                         text-gray-900 bg-white border border-gray-300 rounded-l-md hover:bg-gray-50
                         focus:outline-none focus:ring-2 focus:ring-gray-200"
                >
                  United States (+1)
                  <svg class="w-2.5 h-2.5 ml-2" aria-hidden="true" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                  </svg>
                </button>
                <input
                  type="tel"
                  id="phone-number"
                  name="phone-number"
                  placeholder="123-456-7890"
                  required
                  class="block flex-1 rounded-r-md bg-white px-3.5 py-2 text-base text-gray-900
                         border border-gray-300 focus:outline-2 focus:outline-cyan-600"
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
            <!-- Message -->
            <div class="sm:col-span-2">
              <label for="message" class="block text-sm font-semibold text-gray-900">
                Message
              </label>
              <div class="mt-2.5">
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900
                         outline-1 outline-gray-300 placeholder:text-gray-400
                         focus:outline-2 focus:outline-cyan-600"
                ></textarea>
              </div>
            </div>
          </div>
          <div class="mt-8 flex justify-end">
            <button
              type="submit"
              class="px-5 py-2 text-base font-normal leading-7 font-sans
                     bg-cyan-600 text-white rounded-full
                     border-transparent shadow-[0_4px_15px_rgba(0,183,195,0.5)]
                     ring-1 ring-cyan-600 ring-opacity-50
                     transition-all duration-300 transform
                     hover:shadow-[0_6px_20px_rgba(0,183,195,0.7)]
                     hover:ring-opacity-100 hover:-translate-y-0.5
                     active:translate-y-0.5
                     focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-cyan-600"
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
import CoverPicture from '@/assets/images/4betterdevicesBackgroundPicture.png'
</script>

<style scoped>
@keyframes blob {
  0%, 100% { transform: translate(0px, 0px) scale(1); }
  33%      { transform: translate(30px, -50px) scale(1.1); }
  66%      { transform: translate(-20px, 20px) scale(0.9); }
}
.animate-blob { animation: blob 8s infinite; }

/* Animation delays */
.animation-delay-2000 { animation-delay: 2s; }
.animation-delay-4000 { animation-delay: 4s; }
</style>
