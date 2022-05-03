<template>
  <div class="relative h-full w-full">
    <BackgroundSVG class="absolute mobile:bottom-0" />

    <div class="absolute scale-75 mobile:hidden w-full h-full">
      <StarsSVG />
    </div>

    <MobileStarsSVG class="absolute md:hidden mobile:bottom-0 scale-75" />

    <div class="md:absolute flex flex-row mobile:flex-col-reverse">
      <div class="w-1/2 mobile:w-full overflow-hidden">
        <img src="../assets/rocket.png" class="mobile:scale-125" />
      </div>

      <div class="w-1/2 mobile:w-full p-8">
        <p class="text-white">
          This exclusive launchpad offers 10set holders the lucrative
          opportunity to invest in projects with enormous potential at the
          presale, and allows the ETF portfolio to grow rapidly as Tenset also
          will invest. These project have the potential to grow 100x and more,
          as can be seen with our first Gem, Metahero, which experienced 130x in
          the first few months since launch.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import BackgroundSVG from "../assets/background.svg?component";
import StarsSVG from "../assets/stars.svg?component";
import MobileStarsSVG from "../assets/mobileStars.svg?component";
</script>
