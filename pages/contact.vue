<template>
  <div>
    <the-header></the-header>
    <div class="control column">
      <base-select :options="options"></base-select>
    </div>
    <div class="control column">
      <base-input value="test" :isEdit="true" type="textarea"></base-input>
    </div>
    <div class="control column">
      <base-button :func="this.test" text="送信"></base-button>
    </div>
  </div>
</template>

<script>
import TheHeader from "~/components/TheHeader.vue";
import BaseSelect from "~/components/BaseSelect.vue";
import BaseInput from "~/components/BaseInput.vue";
import BaseButton from "~/components/BaseButton.vue";

export default {
  components: {
    TheHeader,
    BaseSelect,
    BaseInput,
    BaseButton
  },

  data() {
    return {
      options: [
        { text: "ああああああ", name: "1" },
        { text: "いいいいいい", name: "2" },
        { text: "うううううう", name: "3" }
      ]
    };
  }
};
</script>

<style scoped></style>
