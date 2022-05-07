<template>
  <div class="relative h-full w-full mobile:top-24">
    <Background />

    <div class="md:absolute flex flex-col">
      <UpperSection />
    </div>
  </div>

  <div
    class="relative flex flex-row flex-wrap-reverse mobile:flex-col-reverse justify-center mobile:top-24 gap-12 md:top-[65vw] px-[37px] w-full h-full mobile:py-24 md:pb-24"
  >
    <BottomSection />
  </div>
</template>

<script setup>
import Background from "./Background.vue";
import UpperSection from "./UpperSection.vue";
import BottomSection from "./BottomSection.vue";
</script>
