<template>
  <div
    class="flex flex-row mobile:flex-col justify-center items-center h-full gap-4"
  >
    <div
      v-for="item in items"
      :key="item"
      class="mobile:w-full w-1/3 2xl:w-1/4 lg:max-w-[25rem] h-full bg-[#171717] rounded-2xl"
    >
      <Item
        :heading="item.heading"
        :number="item.number"
        :content="item.content"
        :wallet="item.wallet"
      />
    </div>
  </div>
</template>

<script>
import Item from "./BottomItem.vue";
import Wallet from "../assets/wallet.svg?url";

export default {
  components: { Item },
  data() {
    return {
      items: [
        {
          heading: "Locked Balance",
          number: "23 565 000",
          content:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata",
        },
        {
          heading: "Ready to claim",
          number: "30 000 000",
          content:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam",
        },
        {
          heading: "Wallet Status",
          wallet: Wallet,
          content:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy",
        },
      ],
    };
  },
};
</script>
