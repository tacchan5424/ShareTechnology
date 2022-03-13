<template>
  <div class="totalPageBackground">
    <the-header :needSearch="false"></the-header>
    <div
      class="box"
      v-for="hasNotReplyContact in hasNotReplyContactList"
      :key="hasNotReplyContact._id"
    >
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

export default {
  components: {
    TheHeader,
    BaseInput
  },
  data() {
    return {
      hasNotReplyContactList: [],
      contactTags: require("~/assets/contactTags.json")
    };
  },
  async created() {
    const hasNotReplyContactList = [];

    await this.$Axios
      .get("api/findContactByNoReply")
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
    }
  }
};
</script>
