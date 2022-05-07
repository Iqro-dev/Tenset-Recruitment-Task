<template>
  <div class="flex flex-row mobile:flex-col-reverse w-full h-min">
    <div class="relative overflow-hidden">
      <GemsText />
      <Rocket />
    </div>
    <UpperArticle />
  </div>
</template>

<script setup>
import Rocket from "./Rocket.vue";
import Article from "./UpperArticle.vue";
import UpperArticle from "./UpperArticle.vue";
import GemsText from './GemsText.vue'
</script>
