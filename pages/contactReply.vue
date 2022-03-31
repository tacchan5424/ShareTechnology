<template>
  <div class="totalPageBackground">
    <the-header :needSearch="false"></the-header>
    <base-input v-model="contactId" :isEdit="true"></base-input>
    <base-button text="完了" :func="this.fixContact"></base-button>
    <div
      class="box"
      v-for="hasNotReplyContact in hasNotReplyContactList"
      :key="hasNotReplyContact._id"
    >
      {{ hasNotReplyContact._id }}
      {{ getContactTag(hasNotReplyContact.tag) }}
      <base-input
        v-model="hasNotReplyContact.detail"
        :isEdit="false"
        type="textarea"
      ></base-input>
    </div>
  </div>
</template>

<script>
import TheHeader from "~/components/TheHeader.vue";
import BaseInput from "~/components/BaseInput.vue";
import BaseButton from "~/components/BaseButton.vue";

export default {
  components: {
    TheHeader,
    BaseInput,
    BaseButton
  },
  data() {
    return {
      contactId: null,
      hasNotReplyContactList: [],
      contactTags: require("~/assets/contactTags.json")
    };
  },
  async created() {
    const hasNotReplyContactList = [];

    await this.$Axios
      .get("api/findContactByNotFixed")
      .then(response => {
        response.data.forEach(element => {
          hasNotReplyContactList.push(element);
        });
      })
      .catch(error => {});
    this.hasNotReplyContactList = hasNotReplyContactList;
  },
  methods: {
    getContactTag(tag) {
      // タグのIDは1始まりのため
      return this.contactTags[tag - 1].label;
    },
    fixContact() {
      this.$Axios
        .put("api/fixContact", {
          id: this.contactId
        })
        .then(response => {
          this.$buefy.dialog.alert("完了しました。");
          this.isLoading = false;
        })
        .catch(error => {
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
