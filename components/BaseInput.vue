<template>
  <div>
    <section v-if="isEdit">
      <b-input
        v-model="localValue"
        :type="type"
        :class="classes"
        :icon="icon"
        :placeholder="placeholder"
      ></b-input>
    </section>
    <span v-if="!isEdit">
      {{ componentValue }}
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
  },
  computed: {
    localValue: {
      get() {
        return this.value;
      },
      set(setValue) {
        this.$emit("input", setValue);
      }
    }
  }
};
</script>

<style scoped></style>
