<template>
  <div class="relative mobile:h-screen">
    <BackgroundSVG class="absolute mobile:bottom-0" />

    <div class="absolute mobile:hidden w-full h-full scale-75">
      <StarsSVG />
    </div>

    <MobileStarsSVG class="absolute md:hidden mobile:bottom-0 scale-75" />
  </div>
</template>

<script setup>
import BackgroundSVG from "../assets/background.svg?component";
import StarsSVG from "../assets/stars.svg?component";
import MobileStarsSVG from "../assets/mobileStars.svg?component";
</script>
