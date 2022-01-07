<template>
  <div class="field is-grouped is-mobile">
    <div class="control column is-two-fifths"></div>
    <div class="control column">
      <base-input
        value="test"
        :isEdit="true"
        type="search"
        icon="magnify"
      ></base-input>
    </div>
    <div class="control column">
      <base-button :func="this.test" text="検索"></base-button>
    </div>
    <div class="control column">
      <a href="contact">お問い合わせ先</a>
    </div>
    <div class="control column">
      <a href="https://yahoo.co.jp">利用規約</a>
    </div>
  </div>
</template>

<script>
import BaseInput from "~/components/BaseInput.vue";
import BaseButton from "~/components/BaseButton.vue";

export default {
  components: {
    BaseInput,
    BaseButton
  }
};
</script>
