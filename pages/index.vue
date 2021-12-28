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
      this.$Axios
        .get("api/createContact")
        .then(response => {
          console.log("response body:", response.data);
        })
        .catch(err => {
          console.log("err:", err);
        });
    }
  }
};
</script>

<style scoped></style>
