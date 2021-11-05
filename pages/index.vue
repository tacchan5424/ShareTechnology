<template>
  <div>
    <base-input value="test" :isEdit="false"></base-input>
    <base-button :func="this.test"></base-button>
    <box
      v-for="content in contents.body"
      :key="content.technorogyName"
      :content="content"
    ></box>
  </div>
</template>

<script>
import BaseInput from "~/components/BaseInput.vue";
import Box from "~/components/Box.vue";
import BaseButton from "~/components/BaseButton.vue";

export default {
  components: {
    BaseInput,
    Box,
    BaseButton
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
