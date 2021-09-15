<template>
  <b-button :type="type" :class="classes">{{ text }}</b-button>
</template>

<script>
export default {
  props: {
    type: String,
    classes: String,
    text: String
  }
};
</script>

<style scoped></style>
