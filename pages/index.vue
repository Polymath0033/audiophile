<script setup lang="ts">
import AppButton from "~/components/buttons/app-button.vue";
import SecondaryButton from "~/components/buttons/secondary-button.vue";
defineOptions({
  layout: "home",
  
});
</script>

<template>
  <section class="px-[140px] bg-[#0E0E0E] relative top-0 left-0 h-[729px]">
    <header
      class="flex justify-between w-full py-9 items-center fixed top-0 left-0 px-[140px] bg-[#0E0E0E] z-10"
    >
      <AppLogo />
      <nav>
        <ul class="flex items-center space-x-10">
          <li>
            <nuxt-link
              to="/"
              class="text-white text-[13px] font-bold !tracking-[2px] !leading-[192.308%] uppercase"
              >Home</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              to="/headphones"
              class="text-white text-[13px] font-bold !tracking-[2px] !leading-[192.308%] uppercase"
              >headphones</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              to="/speakers"
              class="text-white text-[13px] font-bold !tracking-[2px] !leading-[192.308%] uppercase"
              >speakers</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              to="/earphones"
              class="text-white text-[13px] font-bold !tracking-[2px] !leading-[192.308%] uppercase"
              >earphones</nuxt-link
            >
          </li>
        </ul>
      </nav>
      <button type="button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="20"
          viewBox="0 0 24 20"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.01883 13.1946H8.01776C7.64161 13.1955 7.33595 13.491 7.33595 13.8542C7.33595 14.2179 7.64268 14.5139 8.01954 14.5139H20.4154C20.793 14.5139 21.099 14.8092 21.099 15.1736C21.099 15.538 20.793 15.8333 20.4154 15.8333H19.25H9.25H8.01954C6.88876 15.8333 5.96876 14.9455 5.96876 13.8542C5.96876 13.0421 6.47843 12.343 7.20493 12.0382L4.73686 1.31944H1.18359C0.806016 1.31944 0.5 1.02412 0.5 0.659722C0.5 0.295329 0.806016 0 1.18359 0H5.28516C5.6056 0 5.88295 0.214753 5.95256 0.516611L6.44122 2.63889H23.1498C23.3643 2.63889 23.5663 2.73613 23.6956 2.9014C23.8246 3.06668 23.8659 3.28074 23.807 3.47986L21.0726 12.716C20.9888 12.9991 20.7205 13.1944 20.4154 13.1944H8.0215L8.01883 13.1946ZM9.25 15.8333C10.3987 15.8333 11.3333 16.7679 11.3333 17.9167C11.3333 19.0654 10.3987 20 9.25 20C8.10127 20 7.16667 19.0654 7.16667 17.9167C7.16667 16.7679 8.10127 15.8333 9.25 15.8333ZM19.25 15.8333C20.3987 15.8333 21.3333 16.7679 21.3333 17.9167C21.3333 19.0654 20.3987 20 19.25 20C18.1013 20 17.1667 19.0654 17.1667 17.9167C17.1667 16.7679 18.1013 15.8333 19.25 15.8333ZM19.8997 11.875L22.2435 3.95833H6.74492L8.56784 11.875H19.8997ZM9.94444 17.9167C9.94444 17.5338 9.63285 17.2222 9.25 17.2222C8.86715 17.2222 8.55556 17.5338 8.55556 17.9167C8.55556 18.2995 8.86715 18.6111 9.25 18.6111C9.63285 18.6111 9.94444 18.2995 9.94444 17.9167ZM19.25 17.2222C19.6328 17.2222 19.9444 17.5338 19.9444 17.9167C19.9444 18.2995 19.6328 18.6111 19.25 18.6111C18.8672 18.6111 18.5556 18.2995 18.5556 17.9167C18.5556 17.5338 18.8672 17.2222 19.25 17.2222Z"
            fill="white"
          />
        </svg>
      </button>
    </header>
    <div
      class="w-[calc(100%_-_280px)] left-0 mx-[140px] z-10 flex justify-center items-center h-[1px] bg-white opacity-20 fixed top-[97px]"
    ></div>
    <article class="flex h-full gap-10">
      <div class="w-4/5 flex flex-col gap-6 justify-center">
        <p class="opacity-[0.4964] text-overline text-white uppercase">
          NEW PRODUCT
        </p>
        <h1 class="text-h1 text-white uppercase">XX99 Mark II Headphones</h1>
        <p class="text-body text-start opacity-75 text-white">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <AppButton value="See Product" app-type="link" href="/" />
      </div>
      <div class="w-full h-full relative flex items-center">
        <nuxt-img
          src="./assets/bitmap-source.png"
          class="w-full object-fit"
        ></nuxt-img>
      </div>
    </article>
  </section>
  <section
    class="px-[140px] py-[120px] flex justify-center items-center gap-[30px] relative"
  >
    <div
      class="bg-grey rounded-lg w-full h-[204px] relative flex justify-end items-center pb-10 flex-col gap-3"
    >
      <nuxt-img
        class="absolute left-1/2 h-40 -top-14 -translate-x-1/2"
        src="/assets/shared/desktop/image-category-thumbnail-headphones.png"
      />
      <p class="text-black text-h6">HEADPHONES</p>
      <nuxt-link
        to="/headphones"
        class="text-black flex gap-[13.322px] uppercase text-[13px] !tracking-[1px] font-bold items-center"
        ><span class="opacity-50 hover:opacity-100">SHOP</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="7"
          height="12"
          viewBox="0 0 7 12"
          fill="none"
        >
          <path
            d="M1.3219 1L6.3219 6L1.3219 11"
            stroke="#D87D4A"
            stroke-width="2"
          />
        </svg>
      </nuxt-link>
    </div>
    <div
      class="bg-grey rounded-lg w-full h-[204px] relative flex justify-end items-center pb-10 flex-col gap-3"
    >
      <nuxt-img
        class="absolute left-1/2 h-40 -top-14 -translate-x-1/2"
        src="/assets/shared/desktop/image-category-thumbnail-speakers.png"
      />
      <p class="text-black text-h6">SPEAKER</p>
      <nuxt-link
        to="/headphones"
        class="text-black flex gap-[13.322px] uppercase text-[13px] !tracking-[1px] font-bold items-center"
        ><span class="opacity-50 hover:opacity-100">SHOP</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="7"
          height="12"
          viewBox="0 0 7 12"
          fill="none"
        >
          <path
            d="M1.3219 1L6.3219 6L1.3219 11"
            stroke="#D87D4A"
            stroke-width="2"
          /></svg
      ></nuxt-link>
    </div>
    <div
      class="bg-grey rounded-lg w-full h-[204px] relative flex justify-end items-center pb-10 flex-col gap-3"
    >
      <nuxt-img
        class="absolute left-1/2 h-40 -top-14 -translate-x-1/2"
        src="/assets/shared/desktop/image-category-thumbnail-earphones.png"
      />
      <p class="text-black text-h6">EARPHONES</p>
      <nuxt-link
        to="/headphones"
        class="text-black flex gap-[13.322px] uppercase text-[13px] !tracking-[1px] font-bold items-center"
        ><span class="opacity-50 hover:opacity-100">SHOP</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="7"
          height="12"
          viewBox="0 0 7 12"
          fill="none"
        >
          <path
            d="M1.3219 1L6.3219 6L1.3219 11"
            stroke="#D87D4A"
            stroke-width="2"
          /></svg
      ></nuxt-link>
    </div>
  </section>
  <section
    class="bg-primary h-[560px] mx-[140px] rounded-lg bg-[url('./assets/home/desktop/pattern-circles.svg')] [background-position-x:-200px] bg-no-repeat text-white flex gap-[30px]"
  >
    <div class="w-1/2 pl-24 flex items-end relative overflow-y-hidden">
      <nuxt-img
        src="./assets/home/desktop/image-speaker-zx9.png"
        height="493"
        alt="Speaker"
        class="absolute -bottom-2 overflow-hidden left-16"
      />
    </div>
    <div class="w-1/2 flex flex-col justify-center h-full px-8 gap-2">
      <h1 class="text-h1 uppercase">ZX9 SPEAKER</h1>
      <p class="text-body opacity-75">
        Upgrade to premium speakers that are phenomenally built to deliver truly
        remarkable sound.
      </p>
      <SecondaryButton
        value="See Product"
        class="mt-[31.5px] bg-black text-white hover:bg-transparent hover:text-black"
      />
    </div>
  </section>
  <section
    class="bg-[url('./assets/home/desktop/image-speaker-zx7.jpg')] bg-center mx-auto bg-cover mt-16 h-[320px] rounded-lg w-[calc(100%_-_280px)] pl-28 flex items-center"
  >
    <div class="flex flex-col gap-2">
      <h4 class="text-h4 uppercase text-black">ZX7 SPEAKER</h4>
      <SecondaryButton value="See Product" />
    </div>
  </section>
  <section
    class="flex gap-[30px] h-[320px] w-[calc(100%_-_280px)] mx-auto mt-16"
  >
    <div class="w-1/2">
      <nuxt-img
        src="./assets/home/desktop/image-earphones-yx1.jpg"
        class="w-full h-full rounded-lg"
      />
    </div>

    <div
      class="rounded-lg bg-grey flex flex-col gap-2 justify-center w-1/2 pl-24"
    >
      <h4 class="text-h4 uppercase text-black">YX1 EARPHONES</h4>
      <SecondaryButton value="See Product" />
    </div>
  </section>
  <!-- <article
    class="mt-20 flex gap-[30px] h-[588px] items-center w-[calc(100%_-_280px)] mx-auto"
  >
    <div class="w-1/2 flex flex-col gap-8">
      <h2 class="text-h2 text-black uppercase">
        Bringing you the <span class="text-primary">best</span> audio gear
      </h2>
      <p class="text-body text-black opacity-50">
        Located at the heart of New York City, Audiophile is the premier store
        for high end headphones, earphones, speakers, and audio accessories. We
        have a large showroom and luxury demonstration rooms available for you
        to browse and experience a wide range of our products. Stop by our store
        to meet some of the fantastic people who make Audiophile the best place
        to buy your portable audio equipment.
      </p>
    </div>
    <div class="w-1/2 bg-grey rounded-lg">
      <nuxt-img
        src="./assets/shared/desktop/image-best-gear.jpg"
        class="w-full h-full rounded-lg"
      ></nuxt-img>
    </div>
  </article> -->
</template>

<style scoped></style>
