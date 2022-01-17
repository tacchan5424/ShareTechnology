<template>
  <div>
    <the-header></the-header>
    <div class="control column">
      <base-select v-model="contact.tag" :options="contactTags"></base-select>
    </div>
    <div class="control column">
      <base-input
        v-model="contact.detail"
        :isEdit="true"
        type="textarea"
      ></base-input>
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
    const Contact = require("~/server/api/models/contact");
    return {
      contactTags: require("~/assets/contactTags.json"),
      contact: new Contact(),
      isLoading: false
    };
  },

  methods: {
    createContact() {
      this.isLoading = true;
      this.$Axios
        .post("api/createContact", {
          params: {
            detail: this.contact.detail,
            tag: this.contact.detail
          }
        })
        .then(response => {
          this.isLoading = false;
          this.$buefy.dialog.alert("ご報告ありがとうございます。");
        })
        .catch(() => {
          this.$buefy.dialog.alert({
            message: "エラーが発生しました。",
            type: "is-danger"
          });
          this.isLoading = false;
        });
    }
  }
};
</script>

<style scoped></style>
