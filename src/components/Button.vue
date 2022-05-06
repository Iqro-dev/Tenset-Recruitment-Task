<template>
  <a
    class="inline-block border rounded-lg border-pink text-pink text-sm capitalize px-4 py-2 cursor-pointer hover:text-black bg-gradient-to-r bg-no-repeat duration-300 from-pink to-pink bg-[length:0px] hover:bg-[length:100%]"
  >
    <div class="flex gap-4 items-center pr-4">
      <Diamond />
      <span class="font-['Poppins']">Button</span>
    </div>
  </a>
</template>

<script setup>
import Diamond from "../assets/diamond.svg?component";
</script>
