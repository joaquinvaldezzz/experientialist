<template>
  <main class="bg-gray-50">
    <div class="grid min-h-screen grid-cols-1 items-center lg:grid-cols-2">
      <div class="px-8 pt-8">
        <div class="text-sm font-semibold uppercase tracking-wide text-danger-500">404 Error</div>
        <h1
          class="mt-2 text-[2rem] font-bold leading-tight tracking-tight text-secondary-500 lg:text-[2.25rem] xl:text-[3rem]"
        >
          Oops, page not found.
        </h1>
        <p class="mt-1 text-lg text-secondary-100">
          Sorry, we cannot find the page you are looking for.
        </p>
        <div class="mt-4">
          <a class="inline-block rounded-md bg-primary-500 px-4 py-2 text-white" href="/home">
            Return Home
          </a>
        </div>
      </div>

      <div
        class="hidden lg:block lg:h-full lg:bg-seashore lg:bg-cover lg:bg-center lg:bg-no-repeat"
      >
        <span class="sr-only">Background image</span>
      </div>
    </div>
  </main>
</template>

<script></script>
