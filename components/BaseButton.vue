<template>
  <div :class="divClass">
    <b-button :type="type" :class="classes" @click="func">{{ text }}</b-button>
  </div>
</template>

<script>
export default {
  props: {
    type: String,
    classes: String,
    text: String,
    func: Function,
    divClass: String
  }
};
</script>

<style scoped>
.header {
  padding-top: 10px;
}
</style>
