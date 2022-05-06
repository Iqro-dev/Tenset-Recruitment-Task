<template>
  <BackgroundSVG class="absolute mobile:bottom-0" />

  <div class="absolute scale-75 mobile:hidden w-full h-full top-[3vw]">
    <StarsSVG />
  </div>

  <MobileStarsSVG class="absolute md:hidden mobile:bottom-0 scale-75" />
</template>

<script setup>
import BackgroundSVG from "../assets/background.svg?component";
import StarsSVG from "../assets/stars.svg?component";
import MobileStarsSVG from "../assets/mobileStars.svg?component";
</script>
