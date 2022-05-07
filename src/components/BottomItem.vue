<template>
  <div class="flex flex-col items-center h-full w-full pb-12 pt-6">
    <div class="flex">
      <span class="text-base px-10 text-pink uppercase font-['Poppins']">{{
        heading
      }}</span>
    </div>
    <div class="flex items-center h-[5rem] py-20">
      <span class="text-4xl text-white font-semibold font-['Poppins']">
        {{ number }}
        <img :src="wallet" />
      </span>
    </div>
    <div class="flex">
      <span
        class="text-sm text-gray px-6 mobile:px-8 font-normal font-['Poppins']"
        >{{ content }}</span
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    heading: String,
    number: String,
    content: String,
    wallet: String,
  },
};
</script>
