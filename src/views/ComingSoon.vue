<template>
  <div
    class="bg-beach min-h-screen min-w-xs bg-cover bg-center bg-no-repeat antialiased md:bg-top lg:bg-top-16"
  >
    <div
      class="relative grid h-screen grid-cols-1 items-center py-8 text-white md:grid-cols-2 md:py-0"
    >
      <div>
        <img
          class="mx-auto w-56 lg:w-64"
          src="/images/experientialist-logotype-alt.png"
          alt="Experientialist"
        />
      </div>
      <div class="md:relative md:h-full">
        <div
          class="inset-0 hidden bg-secondary-500/50 md:absolute md:block"
          aria-hidden="true"
          aria-label="Half screen background overlay"
        ></div>
        <div class="md:relative md:flex md:h-full md:flex-col md:justify-center">
          <h1 class="text-center text-5xl uppercase tracking-tight">
            Great things
            <br />
            are coming
          </h1>
          <div class="mt-4 flex justify-center">
            <button
              class="mx-auto inline-block bg-primary-300 px-4 py-3"
              @click="showLearnMore(true)"
            >
              Learn more
            </button>
          </div>
          <div class="mt-4 flex items-center justify-center gap-4">
            <a href="https://www.facebook.com/ExperientialistTravel" target="_blank">
              <span class="sr-only">Facebook</span>
              <span class="fab fa-facebook text-2xl"></span>
            </a>
            <a href="https://www.instagram.com/experientialist_travel/" target="_blank">
              <span class="sr-only">Instagram</span>
              <span class="fab fa-instagram text-2xl"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="sticky-0 fixed top-0 hidden h-full w-full bg-opacity-80" id="learn-more">
      <div class="flex items-center justify-center py-48 px-4 md:px-28 2xl:mx-auto">
        <div
          class="relative flex w-96 flex-col items-center justify-center bg-secondary-500 py-16 px-4 md:w-auto md:px-24 xl:py-24 xl:px-36"
        >
          <div>
            <img
              class="mx-auto w-56 lg:w-64"
              src="/images/experientialist-logotype-alt.png"
              alt="Experientialist"
            />
          </div>
          <div class="mt-12">
            <h1
              role="main"
              class="text-center font-display text-5xl font-bold text-secondary-50 lg:text-6xl"
            >
              Our Blog is Launching Soon.
            </h1>
          </div>
          <div class="mt">
            <p class="mt-8 text-center text-lg font-light text-secondary-100 sm:w-96">
              Sign up for our latest blog posts and to be the first to know when we go live!
            </p>
          </div>
          <div class="mt-16 flex grid-cols-2 items-center justify-center">
            <label class="relative block">
              <input
                class="block w-full bg-white py-4 pl-2 pr-0 text-sm text-secondary-200 shadow-sm placeholder:italic placeholder:text-secondary-100 focus:border-primary-300 focus:outline-none focus:ring-1 focus:ring-primary-300 sm:pr-8 md:pl-4 md:pr-16"
                type="email"
                placeholder="Enter your email here*"
                v-model="email"
              />
            </label>
            <button
              class="inline-flex items-center gap-1 bg-primary-300 px-4 py-4 text-sm capitalize text-secondary-50 hover:bg-primary-500"
              @click="saveEmail()"
            >
              <span>Notify me!</span>
              <svg
                class="hidden h-5 w-5 md:inline-block"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="m17 8 4 4m0 0-4 4m4-4H3" />
              </svg>
            </button>
          </div>
          <p class="mt-2 hidden text-secondary-50" id="success-msg">Thanks for submitting!</p>
          <button
            class="absolute top-8 right-8 text-white hover:text-secondary-50"
            @click="showLearnMore(true)"
          >
            <span class="sr-only">Close</span>
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24">
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.667"
                d="M18 6 6 18M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      email: '',
      newsletterData: [],
    }
  },
  async created() {
    try {
      const res = await axios.get(`http://localhost:3000/emails`)
      this.emails = res.data
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
    }
  },
  methods: {
    showLearnMore() {
      const menu = document.getElementById('learn-more')
      menu.classList.toggle('hidden')
    },
    async saveEmail() {
      const message = document.getElementById('success-msg')
      const res = await axios.post(`http://localhost:3000/emails`, {
        email: this.email,
      })
      this.emails = [...this.emails, res.data]
      this.email = ''
      message.classList.toggle('hidden')
    },
  },
}
</script>
