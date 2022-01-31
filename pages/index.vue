<template>
  <div class="has-background-white-ter">
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
    return {
      technology: null,
      technologyDetails: null
    };
  },
  asyncData(context) {
    let technology = null;
    let technologyDetails = null;
    // 技術情報取得
    context.app.$Axios
      .get("")
      .then(response => {
        technology = response.body;
        // 技術詳細情報取得
        context.app.$Axios
          .get("")
          .then(response => {
            technologyDetails = response.body;
          })
          .catch(error => {});
      })
      .catch(error => {});

    return {
      technology: technology,
      technologyDetails: technologyDetails,
      contents: require("~/assets/dummyData/contents.json")
    };
  },
  methods: {
    searchTechnology(params) {
      // 技術情報取得
      this.$Axios
        .get("")
        .then(response => {
          this.technology = response.body;
          // 技術詳細情報取得
          this.$Axios
            .get("")
            .then(response => {
              technologyDetails = response.body;
            })
            .catch(error => {});
        })
        .catch(error => {});
    }
  }
};
</script>

<style scoped></style>
