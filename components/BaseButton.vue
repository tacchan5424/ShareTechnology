<template>
  <div :class="divClass" v-if="isEdit">
    <b-button :type="type" :class="classes" :icon-left="icon" @click="func">{{
      text
    }}</b-button>
  </div>
</template>

<script>
export default {
  props: {
    isEdit: { type: Boolean, default: true },
    type: String,
    classes: String,
    text: String,
    func: Function,
    divClass: String,
    icon: String
  }
};
</script>

<style scoped>
.header {
  padding-top: 10px;
}

.buttonBackground {
  background-color: #fbf8f1;
}
</style>
