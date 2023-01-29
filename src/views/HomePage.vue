<template>
  <div class="min-h-screen min-w-xs antialiased">
    <header class="header" id="header">
      <div class="container">
        <div class="flex items-center justify-between py-8">
          <a class="inline-block" href="#">
            <img
              class="h-auto w-48"
              src="/images/experientialist-logotype-white.png"
              id="header-logo"
              alt="Experientialist"
            />
          </a>

          <div class="hidden md:block">
            <nav class="flex items-center gap-4 text-sm uppercase lg:gap-8">
              <a href="#">About</a>
              <a href="#">Services</a>
              <a href="#">News</a>
              <a href="#">Villas</a>
              <a
                class="border border-primary-300 px-4 py-3 text-primary-300 transition-colors hover:bg-primary-300 hover:text-white"
                href="#"
              >
                Plan your Experience
              </a>
            </nav>
          </div>

          <button class="md:hidden" type="button">
            <span class="sr-only">Open menu</span>
            <svg
              class="h-6 w-6"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>

    <main>
      <section class="min-h-screen bg-resort bg-cover bg-center bg-no-repeat"></section>

      <section class="bg-secondary-50 py-8 sm:py-12 md:py-16 lg:py-20">
        <div class="container">
          <div class="sm:max-w-md">
            <h2 class="font-display text-4xl tracking-tight text-primary-300 md:text-5xl">
              Elaborate your
              <br />
              travel experience
            </h2>
            <p class="mt-4 text-secondary-400 md:mt-8">
              We bring a world of possibilities closer to you by building customised bespoke
              itineraries to fit your corporate or family travel desires.
            </p>
            <p class="mt-4 text-secondary-400">
              Luxury experiences and unforgettable adventures await you without even lifting a
              finger.
            </p>
            <div class="mt-8">
              <a
                class="inline-flex items-center gap-1 bg-primary-300 px-4 py-3 text-sm tracking-wide text-white"
                href="#"
              >
                <span class="text-sm uppercase">Start planning now</span>
                <svg class="h-5 w-5" fill="none" viewBox="0 0 20 20">
                  <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    d="M1.25 10a.625.625 0 0 1 .625-.625h14.741l-3.934-3.933a.626.626 0 1 1 .886-.885l5 5a.625.625 0 0 1 0 .885l-5 5a.626.626 0 1 1-.886-.885l3.934-3.932H1.875A.625.625 0 0 1 1.25 10Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div class="aspect-h-9 aspect-w-16 mt-8 md:aspect-h-6 md:-ml-8 xl:aspect-h-4">
            <img
              class="object-cover object-center"
              src="/images/willian-justen-de-vasconcellos-lrPBS8b4G14-unsplash.jpg"
              alt="Sea shore"
            />
          </div>
        </div>
      </section>

      <section class="overflow-hidden py-8 sm:py-12 md:py-16 lg:py-20">
        <div class="container">
          <div class="flex flex-col gap-16 lg:flex-row lg:items-center lg:gap-8 xl:gap-16">
            <div class="lg:w-8/12">
              <h2 class="text-center font-display text-3xl tracking-tight lg:text-4xl">
                Bring Out the Adventurer
              </h2>
              <hr class="my-2 border-2 border-primary-200 md:my-4" />
              <h3 class="text-center font-display text-2xl tracking-tight lg:text-3xl">
                Everything is Possible
              </h3>
            </div>

            <div class="lg:w-4/12">
              <div class="logotype-line">
                <svg class="h-auto w-64" fill="none" viewBox="0 0 312 24">
                  <path
                    fill="#243a45"
                    fill-rule="evenodd"
                    d="M14.274 10.951V8.78H4.38l-1.8 2.171h11.693ZM2.58 9.787V2.205h12.26V.001H0v23.416h15.342v-2.185H2.582V9.787Zm85.273 1.164V8.779h-9.894L76.16 10.95h11.693ZM76.16 9.787V2.205h12.26V0H73.58v23.415h15.342V21.23H76.16V9.787Zm67.879 1.164V8.779h-9.894l-1.798 2.172h11.692Zm-11.692-1.164V2.205h12.259V0h-14.84v23.415h15.342V21.23h-12.761V9.787Zm-73.023 1.718h-5.69l-1.799 2.129h7.49a7.357 7.357 0 0 0 2.78-.458 7.139 7.139 0 0 0 2.376-1.463 6.816 6.816 0 0 0 1.595-2.237 6.586 6.586 0 0 0 0-5.314 6.816 6.816 0 0 0-1.595-2.237A7.138 7.138 0 0 0 62.106.462a7.359 7.359 0 0 0-2.782-.458h-10.07V23.42h2.607V2.133h7.49a4.99 4.99 0 0 1 3.456 1.375 4.604 4.604 0 0 1 1.431 3.32c0 1.246-.515 2.44-1.431 3.32a4.992 4.992 0 0 1-3.457 1.376l-.026-.019Z"
                    clip-rule="evenodd"
                  />
                  <path
                    fill="#243a45"
                    d="M100.188 11.515h5.689l.072.006c1.297 0 2.54-.495 3.457-1.375a4.606 4.606 0 0 0 1.431-3.32c0-1.246-.515-2.44-1.431-3.321a4.993 4.993 0 0 0-3.457-1.375H98.46V0h7.463a7.261 7.261 0 0 1 4.699 1.693 6.734 6.734 0 0 1 2.356 4.258 6.604 6.604 0 0 1-1.169 4.688 7.092 7.092 0 0 1-4.107 2.772l5.312 10.017h-2.894l-5.214-9.786h-6.517l1.799-2.128Z"
                  />
                  <path
                    fill="#243a45"
                    fill-rule="evenodd"
                    d="M120.036 23.416h2.62V.001h-2.62v23.415Zm82.7 0h2.62V.001h-2.62v23.415Zm58.862.26h2.62V.261h-2.62v23.415Zm-21.16 0h14.084v-2.204h-11.51V.261h-2.574v23.415Zm-69.825-.022h.43V.001h-2.405v15.802c0 1.002.183 2.655.183 2.655s-1.004-1.378-1.688-2.173L152.794.007h-.652v23.415h2.477V7.614c0-.995-.215-2.648-.215-2.648s1.003 1.377 1.688 2.166l14.554 16.528-.033-.006Zm109.24.334c4.373 0 7.56-2.342 7.56-6.199 0-3.512-2.079-5.44-6.126-7.162l-1.956-.864c-2.724-1.202-3.871-2.135-3.871-4.2 0-2.067 1.466-3.338 3.871-3.338a5.117 5.117 0 0 1 2.637.655 4.847 4.847 0 0 1 1.88 1.893l2.079-1.252a7.035 7.035 0 0 0-2.778-2.656 7.41 7.41 0 0 0-3.818-.856c-3.656 0-6.42 2.235-6.42 5.634 0 3.275 1.904 4.89 5.377 6.405l1.956.864c3.05 1.309 4.562 2.505 4.562 4.89 0 2.504-2.222 3.994-5.051 3.994-3.441 0-5.13-1.69-6.277-3.65l-2.15 1.102c1.303 2.504 3.839 4.752 8.473 4.752l.052-.012Zm-94.194-.572h2.581V2.205h7.495V0H178.17v2.204h7.489v21.211Zm116.265.26h2.581V2.465H312V.26h-17.565v2.204h7.489v21.211Zm-279.426-.26h2.83l6.165-9.39a9.71 9.71 0 0 0 .756-1.654c.236.568.51 1.12.821 1.653l6.205 9.391h2.94l-8.428-12.74L40.781 0h-2.836l-4.803 7.3a8.85 8.85 0 0 0-.75 1.615 12.31 12.31 0 0 0-.788-1.615L26.76.001h-2.94l7.027 10.675-8.35 12.74Z"
                    clip-rule="evenodd"
                  />
                  <path
                    fill="#b88746"
                    fill-rule="evenodd"
                    d="m229.338 14.926 3.748 8.734h-2.62l-3.663-8.734 1.975 4.708-.046-.075-6.113-14.419-7.6 18.52h-2.796l8.616-19.816.163-.382.228-.52.235-.538L222.514 0h.431l6.393 14.926Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <p class="mt-4 text-lg text-primary-500 lg:mt-6">
                The philosophy or approach to life that sees experience as the most valuable source
                of knowledge.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="overflow-hidden bg-secondary-50 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24">
        <div class="container">
          <div
            class="grid grid-cols-1 gap-12 sm:mx-auto sm:max-w-sm md:max-w-none md:grid-cols-2 lg:items-center lg:gap-16 xl:max-w-5xl xl:gap-y-24"
          >
            <div class="md:order1 lg:relative lg:pl-16">
              <div class="lg:absolute lg:bottom-0 lg:left-0 lg:z-20 lg:h-full lg:rotate-180">
                <h3
                  class="heading-line-1 font-display text-4xl uppercase tracking-tight text-secondary-200 lg:h-full lg:overflow-hidden lg:writing-rl"
                >
                  <span class="relative z-10 select-none bg-secondary-50 pr-4 lg:py-4 lg:pr-0"
                    >Welcome</span
                  >
                </h3>
              </div>
              <div class="img-bg mt-4 lg:mt-0">
                <img
                  class="relative z-10 rounded"
                  src="/images/to-experience-is-to-know.jpg"
                  alt="To experience is to know"
                />
              </div>
            </div>

            <div class="md:order-2">
              <h2
                class="font-display text-4xl tracking-tight text-primary-300 lg:text-5xl xl:text-6xl"
              >
                To experience is to know
              </h2>
              <p class="mt-4 text-lg text-secondary-300 lg:mt-6 xl:mt-8">
                We have been cultivating years of experiences and venturing into the most authentic
                places in the world in order to bring you the safest, most knowledgeable experiences
                your company and family can explore.
              </p>
              <p class="mt-4 text-lg text-secondary-300 lg:mt-6 xl:mt-8">
                When you work with us, you can rest easy knowing that every detail is taken care of,
                all the adventure without sacrificing luxury is thought through, you can truly
                elevate your travel.
              </p>
              <p class="mt-4 text-xl italic text-primary-500 lg:mt-6 xl:mt-8">
                We know exactly how to build the most lucrative itinerary that will engage even the
                most uncompromising spirit.
              </p>
            </div>

            <div class="md:order-4 lg:relative">
              <div>
                <h3
                  class="heading-line-2 select-none text-right font-display text-2xl uppercase tracking-tight text-secondary-200 lg:text-4xl"
                >
                  <span class="relative z-10 bg-secondary-50 pl-2">From farm, land,</span>
                </h3>
                <div class="lg:absolute lg:top-12 lg:right-0 lg:z-20">
                  <h3
                    class="select-none text-right font-display text-2xl uppercase tracking-tight text-secondary-200 lg:text-4xl lg:writing-rl"
                  >
                    sea, and culture
                  </h3>
                </div>
              </div>
              <div class="img-bg mt-4 lg:mr-16 lg:mt-8">
                <img
                  class="relative z-10 rounded"
                  src="/images/we-believe-in-generational-influence.jpg"
                  alt="To experience is to know"
                />
              </div>
            </div>

            <div class="md:order-3">
              <h2
                class="font-display text-4xl tracking-tight text-primary-300 lg:text-5xl xl:text-6xl"
              >
                We believe in generational influence;
              </h2>
              <p class="mt-4 text-lg text-secondary-300 lg:mt-6 xl:mt-8">
                We believe in insuring that your travel experience will give back to the local
                community with each visit. Our travel advisors make it a priority to visit each
                destination, resort, and activity that we recommend to our travellers.
              </p>
              <p class="mt-4 text-lg text-secondary-300 lg:mt-6 xl:mt-8">
                We ask the questions some fear to ask. We keep our partners accountable for the
                sustainability of its location. Your travel dollars are accountable and responsible
                for supporting the community you travel to.
              </p>
              <p class="mt-4 text-lg text-secondary-300 lg:mt-6 xl:mt-8">
                You can rest assured knowing that your money is well spent and that your influence
                will be felt in a positive way throughout the culture and generations to come when
                you travel the Experientialist way.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="py-8 sm:py-12 md:py-16 lg:py-20">
        <div class="container">
          <h2
            class="text-center font-display text-4xl tracking-tight text-[#243a45] md:text-5xl xl:text-6xl"
          >
            Each trip with us includes:
          </h2>
          <div
            class="mt-8 grid grid-cols-1 gap-8 sm:mx-auto sm:max-w-sm md:mt-12 md:max-w-none md:grid-cols-2 lg:mt-16 lg:max-w-3xl xl:max-w-none xl:grid-cols-4"
          >
            <div class="relative overflow-hidden rounded-xl">
              <img src="/images/bespoke-itineraries.jpg" alt="Bespoke Itineraries" />
              <div
                class="absolute inset-x-0 bottom-0 bg-black/50 bg-grain bg-cover bg-center bg-no-repeat p-8 text-white [@supports(backdrop-filter:blur(24px))]:backdrop-blur-xl"
              >
                <h3 class="text-2xl font-bold uppercase">Bespoke Itineraries</h3>
                <p class="mt-2 line-clamp-2">
                  Every trip is custom tailored for you. Once you begin booking with us you will
                  never want to go back to traveling the old way. We meet and get to know your needs
                  and desires!
                </p>
              </div>
            </div>

            <div class="relative overflow-hidden rounded-xl">
              <img src="/images/general-influence.jpg" alt="General Influence" />
              <div
                class="absolute inset-x-0 bottom-0 bg-black/50 bg-grain bg-cover bg-center bg-no-repeat p-8 text-white [@supports(backdrop-filter:blur(24px))]:backdrop-blur-xl"
              >
                <h3 class="text-2xl font-bold uppercase">General Influence</h3>
                <p class="mt-2 line-clamp-2">
                  We believe in building the world up through tourism. Protecting the natural and
                  cultural heritage of each location, and helping the local areas thrive through
                  travel and event dollars. We work with sustainable partners who care about the
                  place they do business.
                </p>
              </div>
            </div>

            <div class="relative overflow-hidden rounded-xl">
              <img src="/images/exclusive-benefits.jpg" alt="Exclusive Benefits" />
              <div
                class="absolute inset-x-0 bottom-0 bg-black/50 bg-grain bg-cover bg-center bg-no-repeat p-8 text-white [@supports(backdrop-filter:blur(24px))]:backdrop-blur-xl"
              >
                <h3 class="text-2xl font-bold uppercase">Exclusive Benefits</h3>
                <p class="mt-2 line-clamp-2">
                  We travel to some pretty adventuresome locations and we try EVERYTHING. This has
                  allowed us to secure some pretty offbeat VIP benefits, amenities, access, and
                  extras that you simply can't get on your own. We are happy to share with you!
                </p>
              </div>
            </div>

            <div class="relative overflow-hidden rounded-xl">
              <img src="/images/dedicated-agent.jpg" alt="Dedicated Agent" />
              <div
                class="absolute inset-x-0 bottom-0 bg-black/50 bg-grain bg-cover bg-center bg-no-repeat p-8 text-white [@supports(backdrop-filter:blur(24px))]:backdrop-blur-xl"
              >
                <h3 class="text-2xl font-bold uppercase">Dedicated Agent</h3>
                <p class="mt-2 line-clamp-2">
                  Booking with an Experientialist is like having that awesome family member who
                  knows just where to eat, sleep, and tour! Your experientialist will be with you
                  every step of the way and they are trained in all thing's events, meetings and
                  luxury travel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        class="relative bg-resort-2 bg-cover bg-center bg-no-repeat py-16 text-white lg:py-20 xl:py-28"
      >
        <div
          class="absolute inset-0 bg-secondary-500/50"
          aria-hidden="true"
          aria-label="Background overlay"
        ></div>
        <div class="container relative">
          <h2 class="text-center font-display text-4xl tracking-tight lg:text-5xl xl:text-6xl">
            Don't just take our word for it...
          </h2>
          <div class="swiper first-swiper mt-8">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <figure
                  class="rounded border border-white/30 bg-black/50 p-8 lg:mx-auto lg:max-w-prose [@supports(backdrop-filter:blur(12px))]:backdrop-blur-md"
                >
                  <!-- <img src="" alt=""> -->
                  <div
                    class="mx-auto h-32 w-32 rounded-full bg-white"
                    aria-label="Profile image placeholder"
                  ></div>
                  <figcaption>
                    <h3
                      class="mt-8 text-center font-display text-3xl tracking-tight text-primary-300"
                    >
                      Jenny Wilson
                    </h3>
                    <div class="mt-1.5 text-center text-lg italic text-secondary-50">Canada</div>
                    <p class="mt-2 text-center">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore error,
                      temporibus illum dolores cupiditate corrupti totam aperiam unde? Cum iste,
                      voluptates rerum id quidem officiis numquam tempore fugit labore dolorem.
                    </p>
                    <div class="mt-4 flex items-center justify-center gap-x-1.5">
                      <svg class="h-6 w-6 text-warning-300" fill="none" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M5.418 24.658c-.58.316-1.236-.239-1.12-.948l1.246-7.567-5.285-5.37c-.493-.502-.237-1.42.425-1.52L8.03 8.14l3.276-6.923c.295-.624 1.095-.624 1.39 0l3.276 6.923 7.347 1.113c.662.1.918 1.018.423 1.52l-5.283 5.37 1.245 7.567c.117.71-.54 1.264-1.119.948L12 21.048l-6.584 3.61h.002Z"
                        />
                      </svg>
                      <svg class="h-6 w-6 text-warning-300" fill="none" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M5.418 24.658c-.58.316-1.236-.239-1.12-.948l1.246-7.567-5.285-5.37c-.493-.502-.237-1.42.425-1.52L8.03 8.14l3.276-6.923c.295-.624 1.095-.624 1.39 0l3.276 6.923 7.347 1.113c.662.1.918 1.018.423 1.52l-5.283 5.37 1.245 7.567c.117.71-.54 1.264-1.119.948L12 21.048l-6.584 3.61h.002Z"
                        />
                      </svg>
                      <svg class="h-6 w-6 text-warning-300" fill="none" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M5.418 24.658c-.58.316-1.236-.239-1.12-.948l1.246-7.567-5.285-5.37c-.493-.502-.237-1.42.425-1.52L8.03 8.14l3.276-6.923c.295-.624 1.095-.624 1.39 0l3.276 6.923 7.347 1.113c.662.1.918 1.018.423 1.52l-5.283 5.37 1.245 7.567c.117.71-.54 1.264-1.119.948L12 21.048l-6.584 3.61h.002Z"
                        />
                      </svg>
                      <svg class="h-6 w-6 text-warning-300" fill="none" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M5.418 24.658c-.58.316-1.236-.239-1.12-.948l1.246-7.567-5.285-5.37c-.493-.502-.237-1.42.425-1.52L8.03 8.14l3.276-6.923c.295-.624 1.095-.624 1.39 0l3.276 6.923 7.347 1.113c.662.1.918 1.018.423 1.52l-5.283 5.37 1.245 7.567c.117.71-.54 1.264-1.119.948L12 21.048l-6.584 3.61h.002Z"
                        />
                      </svg>
                      <svg class="h-6 w-6 text-warning-300" fill="none" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M5.418 24.658c-.58.316-1.236-.239-1.12-.948l1.246-7.567-5.285-5.37c-.493-.502-.237-1.42.425-1.52L8.03 8.14l3.276-6.923c.295-.624 1.095-.624 1.39 0l3.276 6.923 7.347 1.113c.662.1.918 1.018.423 1.52l-5.283 5.37 1.245 7.567c.117.71-.54 1.264-1.119.948L12 21.048l-6.584 3.61h.002Z"
                        />
                      </svg>
                    </div>
                  </figcaption>
                </figure>
              </div>

              <div class="swiper-slide">
                <figure
                  class="rounded border border-white/30 bg-black/50 p-8 lg:mx-auto lg:max-w-prose [@supports(backdrop-filter:blur(12px))]:backdrop-blur-md"
                >
                  <!-- <img src="" alt=""> -->
                  <div
                    class="mx-auto h-32 w-32 rounded-full bg-white"
                    aria-label="Profile image placeholder"
                  ></div>
                  <figcaption>
                    <h3
                      class="mt-8 text-center font-display text-3xl tracking-tight text-primary-300"
                    >
                      Jenny Wilson
                    </h3>
                    <div class="mt-1.5 text-center text-lg italic text-secondary-50">Canada</div>
                    <p class="mt-2 text-center">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore error,
                      temporibus illum dolores cupiditate corrupti totam aperiam unde? Cum iste,
                      voluptates rerum id quidem officiis numquam tempore fugit labore dolorem.
                    </p>
                    <div class="mt-4 flex items-center justify-center gap-x-1.5">
                      <svg class="h-6 w-6 text-warning-300" fill="none" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M5.418 24.658c-.58.316-1.236-.239-1.12-.948l1.246-7.567-5.285-5.37c-.493-.502-.237-1.42.425-1.52L8.03 8.14l3.276-6.923c.295-.624 1.095-.624 1.39 0l3.276 6.923 7.347 1.113c.662.1.918 1.018.423 1.52l-5.283 5.37 1.245 7.567c.117.71-.54 1.264-1.119.948L12 21.048l-6.584 3.61h.002Z"
                        />
                      </svg>
                      <svg class="h-6 w-6 text-warning-300" fill="none" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M5.418 24.658c-.58.316-1.236-.239-1.12-.948l1.246-7.567-5.285-5.37c-.493-.502-.237-1.42.425-1.52L8.03 8.14l3.276-6.923c.295-.624 1.095-.624 1.39 0l3.276 6.923 7.347 1.113c.662.1.918 1.018.423 1.52l-5.283 5.37 1.245 7.567c.117.71-.54 1.264-1.119.948L12 21.048l-6.584 3.61h.002Z"
                        />
                      </svg>
                      <svg class="h-6 w-6 text-warning-300" fill="none" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M5.418 24.658c-.58.316-1.236-.239-1.12-.948l1.246-7.567-5.285-5.37c-.493-.502-.237-1.42.425-1.52L8.03 8.14l3.276-6.923c.295-.624 1.095-.624 1.39 0l3.276 6.923 7.347 1.113c.662.1.918 1.018.423 1.52l-5.283 5.37 1.245 7.567c.117.71-.54 1.264-1.119.948L12 21.048l-6.584 3.61h.002Z"
                        />
                      </svg>
                      <svg class="h-6 w-6 text-warning-300" fill="none" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M5.418 24.658c-.58.316-1.236-.239-1.12-.948l1.246-7.567-5.285-5.37c-.493-.502-.237-1.42.425-1.52L8.03 8.14l3.276-6.923c.295-.624 1.095-.624 1.39 0l3.276 6.923 7.347 1.113c.662.1.918 1.018.423 1.52l-5.283 5.37 1.245 7.567c.117.71-.54 1.264-1.119.948L12 21.048l-6.584 3.61h.002Z"
                        />
                      </svg>
                      <svg class="h-6 w-6 text-warning-300" fill="none" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M5.418 24.658c-.58.316-1.236-.239-1.12-.948l1.246-7.567-5.285-5.37c-.493-.502-.237-1.42.425-1.52L8.03 8.14l3.276-6.923c.295-.624 1.095-.624 1.39 0l3.276 6.923 7.347 1.113c.662.1.918 1.018.423 1.52l-5.283 5.37 1.245 7.567c.117.71-.54 1.264-1.119.948L12 21.048l-6.584 3.61h.002Z"
                        />
                      </svg>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </div>

            <button
              class="swiper-prev-button absolute top-1/2 left-0 z-10 -translate-y-1/2 disabled:text-white/50"
              type="button"
            >
              <svg
                class="h-8 w-8"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="m15 19-7-7 7-7" />
              </svg>
            </button>

            <button
              class="swiper-next-button absolute top-1/2 right-0 z-10 -translate-y-1/2 disabled:text-white/50"
              type="button"
            >
              <svg
                class="h-8 w-8"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="m9 5 7 7-7 7" />
              </svg>
            </button>
          </div>

          <div class="swiper-pagination"></div>
        </div>
      </section>

      <section class="">
        <div class="">
          <div class="grid grid-cols-1 lg:grid-cols-2">
            <div
              class="relative overflow-hidden bg-secondary-500 px-8 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 xl:px-16"
            >
              <div class="sm:mx-auto sm:max-w-sm lg:max-w-none">
                <h2 class="font-display text-4xl tracking-tight text-primary-200 lg:text-5xl">
                  Vacations, Meetings,
                  <br />
                  Incentives...
                </h2>
                <div class="aspect-h-1 aspect-w-1 mt-4 sm:mt-8 lg:mt-12 xl:mt-16">
                  <img
                    class="object-cover lg:mx-auto lg:max-w-xs"
                    src="/images/marisol-benitez-gWRur57M2HY-unsplash.jpg"
                    alt=""
                  />
                </div>
                <div
                  class="absolute -bottom-48 left-0 w-full sm:left-1/2 sm:w-8/12 sm:-translate-x-1/2 lg:w-10/12"
                >
                  <svg class="text-primary-500/40" fill="none" viewBox="0 0 696 856">
                    <path
                      fill="currentColor"
                      fill-rule="evenodd"
                      d="M292.719 53.618c-20.343 12.6-60.368 37.638-68.887 43.897a.99.99 0 0 1-1.16.012l-18.48-12.647a1 1 0 0 0-1.272.118l-1.294 1.29a1 1 0 0 0-.043 1.371l12.914 14.568a1 1 0 0 1-.118 1.438l-5.188 4.229c-.837.682-.15 2.022.892 1.74l6.192-1.676a1 1 0 0 1 1.219.68l5.469 18.379a1 1 0 0 0 1.183.689l1.623-.374c.471-.109.797-.538.775-1.021l-.995-21.707a.98.98 0 0 1 .588-.958c21.65-9.356 65.112-28.328 76.435-33.978a1.006 1.006 0 0 1 1.435.703l13.253 64.07a1 1 0 0 0 1.418.695l6.447-3.151a1 1 0 0 0 .561-.913l-.291-20.806a.994.994 0 0 1 .459-.855c1.218-.778 4.511-2.878 6.172-3.891 2.062-1.257.379-5.335-1.743-5.154-.959.081-2.311.253-3.252.38a1.007 1.007 0 0 1-1.142-.953l-.448-10.708a1.002 1.002 0 0 1 .476-.896c1.254-.774 4.505-2.801 5.56-3.67 1.317-1.087.413-5.64-1.955-5.733-1.043-.04-2.676.279-3.819.542-.656.15-1.294-.353-1.274-1.026l.554-18.703a.991.991 0 0 1 .63-.903c13.082-5.135 38.967-18.5 44.724-33.594a.925.925 0 0 0-.778-1.256c-5.613-.583-21.659-.756-52.535 16.104a1.02 1.02 0 0 1-1.001-.012l-17.701-10.51a1 1 0 0 1-.149-1.609l1.966-1.732a.901.901 0 0 0 .211-.267c.76-1.508 1.124-4.37-2.874-5.104a.951.951 0 0 0-.605.095l-5.271 2.72a1.002 1.002 0 0 1-.934-.008l-9.029-4.868a1 1 0 0 1-.289-1.525l2.177-2.576a.896.896 0 0 0 .223-.627c-.091-1.592-.975-4.187-3.993-4.357a.917.917 0 0 0-.565.166l-5.059 3.449a1 1 0 0 1-1.148-.015L254.958.188a1 1 0 0 0-.917-.131l-5.755 2.028a1 1 0 0 0-.401 1.624l45.025 48.388a.988.988 0 0 1-.191 1.521Zm127.309 782.947c107.517 0 204.96-43.333 275.968-113.562C623.008 804.615 516.787 856 398.538 856 178.431 856 0 677.966 0 458.351 0 309.91 81.517 180.466 202.323 112.155 96.426 182.973 26.646 303.983 26.646 441.367c0 218.262 176.123 395.198 393.382 395.198Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div class="bg-primary-50 px-8 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 xl:px-16">
              <div class="sm:mx-auto sm:max-w-sm lg:max-w-none">
                <div class="swiper second-swiper xl:-ml-32">
                  <div class="flex items-center justify-end gap-x-2">
                    <button class="swiper-prev-button disabled:text-black/25" type="button">
                      <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          fill-rule="evenodd"
                          d="M22.5 12a.75.75 0 0 0-.75-.75H4.06l4.721-4.719a.751.751 0 1 0-1.062-1.062l-6 6a.75.75 0 0 0 0 1.062l6 6a.751.751 0 0 0 1.062-1.062l-4.72-4.719H21.75a.75.75 0 0 0 .75-.75Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </button>

                    <button class="swiper-next-button disabled:text-black/25" type="button">
                      <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          fill-rule="evenodd"
                          d="M1.8 12.151a.75.75 0 0 1 .75-.75h17.69l-4.721-4.719A.751.751 0 0 1 16.58 5.62l6 6a.751.751 0 0 1 0 1.062l-6 6a.75.75 0 1 1-1.062-1.062l4.72-4.719H2.55a.75.75 0 0 1-.75-.75Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>

                  <div class="swiper-wrapper mt-4">
                    <div class="swiper-slide">
                      <div class="aspect-h-9 aspect-w-16">
                        <img
                          class="object-cover"
                          src="/images/aman-kVKnAV96_DI-unsplash.jpg"
                          alt=""
                        />
                      </div>
                    </div>

                    <div class="swiper-slide">
                      <div class="aspect-h-9 aspect-w-16">
                        <img
                          class="object-cover"
                          src="/images/aman-kVKnAV96_DI-unsplash.jpg"
                          alt=""
                        />
                      </div>
                    </div>

                    <div class="swiper-slide">
                      <div class="aspect-h-9 aspect-w-16">
                        <img
                          class="object-cover"
                          src="/images/aman-kVKnAV96_DI-unsplash.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div class="lg:mx-auto lg:max-w-md">
                  <h2
                    class="mt-8 font-display text-4xl tracking-tight text-primary-200 lg:text-5xl xl:-ml-16 xl:mt-16"
                  >
                    Bring the luxury
                  </h2>
                  <p class="mt-4 text-lg text-secondary-300 lg:mt-8">
                    Working with us for your company events, your personal luxury travel, or
                    building that tantalizing incentive for your team, we have the experience and
                    knowledge to make it one of the most unique experiences you could imagine.
                  </p>
                  <div class="mt-4 lg:mt-8">
                    <a
                      class="inline-flex items-center gap-1 border border-primary-500 px-4 py-2 text-sm text-primary-500"
                      href="#"
                    >
                      <span>Find out <span class="uppercase">why</span> you need us</span>
                      <svg class="h-5 w-5" fill="none" viewBox="0 0 20 20">
                        <path
                          fill="currentColor"
                          fill-rule="evenodd"
                          d="M1.25 10a.625.625 0 0 1 .625-.625h14.741l-3.934-3.933a.626.626 0 1 1 .886-.885l5 5a.625.625 0 0 1 0 .885l-5 5a.626.626 0 1 1-.886-.885l3.934-3.932H1.875A.625.625 0 0 1 1.25 10Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        class="relative bg-nature bg-cover bg-center bg-no-repeat py-16 sm:py-20 md:py-24 lg:py-28"
      >
        <div
          class="absolute inset-0 h-full w-full bg-gradient-to-r from-black/50 to-black/25"
          aria-hidden="true"
        ></div>
        <div class="container relative text-white">
          <div>
            <h2 class="font-display text-4xl lg:text-5xl xl:text-6xl">
              Let your inner
              <br />
              Adventurer out!
            </h2>
            <div class="mt-6">
              <a
                class="inline-block bg-primary-300 px-4 py-3 text-sm uppercase tracking-wide"
                href="#"
                >Let us help</a
              >
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="bg-secondary-500 py-12 text-secondary-50 md:py-16 lg:py-20">
      <div class="container">
        <div class="flex flex-col items-start gap-8 lg:flex lg:flex-row lg:justify-between">
          <div class="lg:max-w-md">
            <img
              class="w-40"
              src="/images/experientialist-logotype-alt.png"
              alt="Experientialist"
            />
            <p class="mt-8 text-lg">
              <span class="uppercase">Expieriantalist</span> is a dedicated
              <span class="uppercase">mice</span> and Luxury Travel planning agency. We are
              uncompromising in experience, adventure, and passion.
            </p>
          </div>

          <div class="flex flex-col items-start gap-8 lg:flex-row lg:gap-12">
            <nav aria-label="Experience">
              <div class="font-display text-xl uppercase tracking-tight text-primary-300">
                Experience
              </div>
              <div class="mt-4 flex flex-col items-start gap-3">
                <a
                  class="text-sm uppercase tracking-wide underline-offset-4 hover:underline"
                  href="#"
                  >About</a
                >
                <a
                  class="text-sm uppercase tracking-wide underline-offset-4 hover:underline"
                  href="#"
                  >FAQ</a
                >
                <a
                  class="text-sm uppercase tracking-wide underline-offset-4 hover:underline"
                  href="#"
                  >Service &amp; Fees</a
                >
                <a
                  class="text-sm uppercase tracking-wide underline-offset-4 hover:underline"
                  href="#"
                  >How we work</a
                >
              </div>
            </nav>

            <nav aria-label="Connect">
              <div class="font-display text-xl uppercase tracking-tight text-primary-300">
                Connect
              </div>
              <div class="mt-4 flex flex-col items-start gap-3">
                <a class="group flex items-center gap-3 text-sm uppercase tracking-wide" href="#">
                  <span class="fab fa-facebook"></span>
                  <span class="underline-offset-4 group-hover:underline">Facebook</span>
                </a>
                <a class="group flex items-center gap-3 text-sm uppercase tracking-wide" href="#">
                  <span class="fab fa-twitter"></span>
                  <span class="underline-offset-4 group-hover:underline">Twitter</span>
                </a>
                <a class="group flex items-center gap-3 text-sm uppercase tracking-wide" href="#">
                  <span class="fab fa-instagram"></span>
                  <span class="underline-offset-4 group-hover:underline">Instagram</span>
                </a>
                <a class="group flex items-center gap-3 text-sm uppercase tracking-wide" href="#">
                  <span class="fab fa-tiktok"></span>
                  <span class="underline-offset-4 group-hover:underline">TikTok</span>
                </a>
              </div>
            </nav>
          </div>
        </div>

        <div
          class="mt-12 flex flex-col gap-4 text-sm text-secondary-50/50 md:mt-16 lg:mt-20 lg:flex-row lg:justify-between"
        >
          <p>
            Copyright &copy; 2022. <span class="uppercase">Experientialist</span>. All rights
            reserved.
          </p>
          <div class="flex flex-col items-start gap-4 md:flex-row lg:gap-8">
            <a class="underline underline-offset-4 hover:text-secondary-50" href="#"
              >Terms &amp; Conditions</a
            >
            <a class="underline underline-offset-4 hover:text-secondary-50" href="#"
              >Privacy Policy</a
            >
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import Swiper, { Navigation, Pagination } from 'swiper'

const dynamicHeader = () => {
  const header = document.getElementById('header')
  const headerLogo = document.getElementById('header-logo')

  window.addEventListener('scroll', () => {
    if (window.scrollY > window.innerHeight / 2) {
      header.classList.add('scrolled')
      headerLogo.setAttribute('src', '/images/experientialist-logotype.png')
    } else {
      header.classList.remove('scrolled')
      headerLogo.setAttribute('src', '/images/experientialist-logotype-white.png')
    }
  })
}

const slider = () => {
  const swiper = new Swiper('.first-swiper', {
    modules: [Navigation, Pagination],
    spaceBetween: 32,
    navigation: {
      prevEl: '.swiper-prev-button',
      nextEl: '.swiper-next-button',
    },
    pagination: {
      el: '.swiper-pagination',
    },
  })

  const anotherSwiper = new Swiper('.second-swiper', {
    modules: [Navigation],
    spaceBetween: 32,
    navigation: {
      prevEl: '.swiper-prev-button',
      nextEl: '.swiper-next-button',
    },
  })

  swiper.init()
  anotherSwiper.init()
}

export default {
  mounted: () => {
    dynamicHeader()
    slider()
  },
}
</script>
