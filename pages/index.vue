<template>
  <div>
    <base-input value="test" :isEdit="false"></base-input>
  </div>
</template>

<script>
import BaseInput from "~/components/BaseInput.vue";

export default {
  components: {
    BaseInput
  }
};
</script>

<style scoped></style>
