<template>
  <section>
    <b-field>
      <b-select v-model="localValue" selected>
        <option v-for="option in options" :value="option.id" :key="option.id">
          {{ option.label }}
        </option>
      </b-select>
    </b-field>
  </section>
</template>

<script>
export default {
  props: {
    value: Number,
    options: Array
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
