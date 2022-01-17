<template>
  <div>
    <the-header></the-header>
    <div class="control column">
      <base-select v-model="tag" :options="contactTags"></base-select>
    </div>
    <div class="control column">
      <base-input v-model="detail" :isEdit="true" type="textarea"></base-input>
    </div>
    <div class="control column">
      <base-button :func="this.createContact" text="送信"></base-button>
    </div>
    <b-loading v-model="isLoading"></b-loading>
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
      contactTags: require("~/assets/contactTags.json"),
      tag: null,
      detail: null,
      isLoading: false
    };
  },

  methods: {
    createContact() {
      this.isLoading = true;
      this.$Axios
        .post("/api/createContact", {
          params: {
            tag: this.tag,
            detail: this.detail
          }
        })
        .then(response => {
          console.log(response);
          this.$buefy.dialog.alert("ご報告ありがとうございます。");
        })
        .catch(error => {});
      this.isLoading = false;
    }
  }
};
</script>

<style scoped></style>
