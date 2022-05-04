<template>
  <div class="relative h-full w-full mobile:top-24">
    <BackgroundSVG class="absolute mobile:bottom-0" />

    <div class="absolute scale-75 mobile:hidden w-full h-full">
      <StarsSVG />
    </div>

    <MobileStarsSVG class="absolute md:hidden mobile:bottom-0 scale-75" />

    <div class="md:absolute flex flex-col">
      <div class="flex flex-row mobile:flex-col-reverse">
        <div class="mobile:w-full overflow-hidden">
          <img
            src="../assets/rocket.png"
            class="md:w-[50vw] mobile:scale-125 select-none"
          />
        </div>

        <div
          class="relative md:mt-[15%] lg:mt-[20%] mobile:gap-4 lg:gap-4 flex flex-col w-1/2 mobile:w-full mobile:px-[48px] md:pl-[3vw]"
        >
          <span
            class="md:text-[calc(4vw-7px)] lg:text-[48px]  mobile:text-[48px] text-white font-['Poppins'] font-semibold tracking-wide leading-[59px]"
          >
            Gem
            <span class="text-pink">Launch Platform</span>
          </span>

          <p
            class="text-white mobile:text-[14px] md:text-[calc(2vw-7px)] lg:text-[14px] 4k:text-2xl font-['Poppins'] font-normal mobile:w-full md:max-w-[65%]"
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
        <p class="text-white">Hemlo</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import BackgroundSVG from "../assets/background.svg?component";
import StarsSVG from "../assets/stars.svg?component";
import MobileStarsSVG from "../assets/mobileStars.svg?component";
</script>
