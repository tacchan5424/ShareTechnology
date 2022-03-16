<template>
  <div class="columns is-centered is-vcentered totalPageBackground">
    <div class="column is-mobile">
      <div class="box boxBackground">
        <p class="title is-5">{{ "★お知らせ★" }}</p>
        <div v-for="information in informationList" :key="information._id">
          {{ information.createdAt.substr(0, 10) }}
          {{ information.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    informationList: Array
  }
};
</script>

<style scoped>
.boxBackground {
  background-color: #fbf8f1;
}
</style>
