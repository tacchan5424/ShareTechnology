<template>
  <b-input
    :type="type"
    :class="classes"
    :icon="icon"
    :placeholder="placeholder"
  ></b-input>
</template>

<script>
export default {
  props: {
    type: String,
    classes: String,
    icon: String,
    placeholder: String
  }
};
</script>

<style scoped></style>
