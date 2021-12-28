<template>
  <div>
    <section v-if="isEdit">
      <b-input
        :value="value"
        :type="type"
        :class="classes"
        :icon="icon"
        :placeholder="placeholder"
      ></b-input>
    </section>
    <span v-if="!isEdit">
      {{ value }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    value: String,
    type: String,
    classes: String,
    icon: String,
    placeholder: String,
    isEdit: Boolean
  }
};
</script>

<style scoped></style>
