<template>
  <div class="lg:w-3/4 xl:w-3/5 w-full flex flex-row justify-center gap-4">
    <Items />
  </div>
  <div class="flex flex-col gap-8 md:w-[25rem] mobile:w-full">
    <Headline />
    <div>
      <Button />
    </div>
  </div>
</template>

<script setup>
import Button from "./Button.vue";
import Headline from "./BottomHeadline.vue";
import Items from "./BottomItems.vue";
</script>
