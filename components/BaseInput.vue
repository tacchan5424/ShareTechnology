<template>
  <div :class="divClass">
    <section>
      <b-input
        v-model="localValue"
        :type="type"
        :class="classes"
        :icon="icon"
        :placeholder="placeholder"
        :readonly="!isEdit"
      ></b-input>
    </section>
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
    isEdit: Boolean,
    divClass: String
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

<style scoped>
.headerBackground {
  background-color: #54bab9;
}

.header {
  padding-top: 10px;
}

div >>> .input {
  background-color: #fbf8f1;
}

div >>> .textarea {
  background-color: #fbf8f1;
}
</style>
