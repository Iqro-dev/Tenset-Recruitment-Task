<template>
  <div class="relative h-full w-full mobile:top-24">
    <BackgroundSVG class="absolute mobile:bottom-0" />

    <div class="absolute scale-75 mobile:hidden w-full h-full top-[3vw]">
      <StarsSVG />
    </div>

    <MobileStarsSVG class="absolute md:hidden mobile:bottom-0 scale-75" />

    <div class="md:absolute flex flex-col">
      <div class="flex flex-row mobile:flex-col-reverse">
        <div
          class="mobile:w-full w-[55vw] md:relative -top-[5vw] overflow-hidden"
        >
          <img src="../assets/rocket.png" class="w-full mobile:scale-125" />
        </div>

        <div
          class="flex flex-col gap-4 md:mt-[13vw] lg:mt-[18vw] w-[45vw] mobile:w-full px-[38px] md:max-w-[70ch] h-full"
        >
          <span
            class="md:text-4xl mobile:text-5xl lg:text-5xl 4k:text-7xl text-white font-['Poppins'] font-semibold tracking-tighter"
          >
            Gem
            <span class="text-pink">Launch Platform</span>
          </span>

          <p
            class="text-white md:text-xs mobile:text-sm lg:text-sm 4k:text-xl font-['Poppins'] font-normal mobile:w-full w-[75%]"
          >
            This exclusive launchpad offers 10set holders the lucrative
            opportunity to invest in projects with enormous potential at the
            presale, and allows the ETF portfolio to grow rapidly as Tenset will
            also invest. These project have the potential to grow 100x and more,
            as can be seen with our first Gem, Metahero, which experienced 130x
            in the first few months since launch.
          </p>
        </div>
      </div>

      <div>
        <p class="text-white">Hello</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import BackgroundSVG from "../assets/background.svg?component";
import StarsSVG from "../assets/stars.svg?component";
import MobileStarsSVG from "../assets/mobileStars.svg?component";
</script>
