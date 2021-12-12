<template>
  <div>
    <the-header></the-header>
    <box
      v-for="content in contents.body"
      :key="content.technorogyName"
      :content="content"
    ></box>
  </div>
</template>

<script>
import Box from "~/components/Box.vue";
import TheHeader from "~/components/TheHeader.vue";

export default {
  components: {
    Box,
    TheHeader
    },
  data() {
    return {};
  },
  asyncData() {
    return {
      contents: require("~/assets/dummyData/contents.json")
    };
  },
  methods: {
    test() {
      console.log("呼ばれた");
    }
  }
};
</script>

<style scoped></style>
