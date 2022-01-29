<template>
  <div>
    <the-header></the-header>
    <box
      v-for="technology in this.technologyList"
      :key="technology._id"
      :content="technology"
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
    return { technologyList: [] };
  },
  async asyncData(app) {
    const technologyList = [];
    // 技術情報取得
    // 画面更新時にコールされていない
    await app.$Axios
      .get("api/findAllTechnology")
      .then(response => {
        response.data.forEach(element => {
          technologyList.push(element);
        });
      })
      .catch(error => {});

    return {
      technologyList: technologyList
    };
  },
  methods: {
    // searchTechnology(params) {
    //   // 技術情報取得
    //   this.$Axios
    //     .get("")
    //     .then(response => {
    //       this.technology = response.body;
    //       // 技術詳細情報取得
    //       this.$Axios
    //         .get("")
    //         .then(response => {
    //           technologyDetails = response.body;
    //         })
    //         .catch(error => {});
    //     })
    //     .catch(error => {});
    // }
  }
};
</script>

<style scoped></style>
