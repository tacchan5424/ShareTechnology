<template>
  <b-button :type="type" :class="classes" @click="func">{{ text }}</b-button>
</template>

<script>
export default {
  props: {
    type: String,
    classes: String,
    text: String,
    func: Function
  }
};
</script>

<style scoped></style>
