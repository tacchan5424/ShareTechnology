<template>
  <div class="totalPageBackground top">
    <the-header :needSearch="false"></the-header>
    <div class="control columns">
      <div class="control column is-offset-2">
        <base-select v-model="contact.tag" :options="contactTags"></base-select>
      </div>
    </div>
    <div class="control columns is-centered">
      <div class="control column is-8">
        <base-input
          v-model="contact.detail"
          :isEdit="true"
          type="textarea"
        ></base-input>
      </div>
    </div>
    <div class="control columns">
      <div class="control column is-offset-2">
        <base-button
          classes="buttonBackground"
          :func="this.createContact"
          text="送信"
        ></base-button>
      </div>
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
      if (this.contact.tag && this.contact.detail) {
        this.isLoading = true;
        this.$Axios
          .post("api/createContact", {
            contact: this.contact
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
      } else {
        this.$buefy.dialog.alert(
          "問い合わせ区分あるいは内容が設定されていません。"
        );
      }
    }
  }
};
</script>

<style scoped>
.top {
  overflow: hidden;
}

.totalPageBackground {
  background-color: #f7ecde;
}
</style>
