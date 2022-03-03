<template>
  <div class="totalPageBackground">
    <the-header :needSearch="false"></the-header>
    <div
      class="box"
      v-for="hasNotReplyContact in hasNotReplyContactList"
      :key="hasNotReplyContact._id"
    ></div>
  </div>
</template>

<script>
import TheHeader from "~/components/TheHeader.vue";

export default {
  components: {
    TheHeader
  },
  data() {
    return {
      hasNotReplyContactList: []
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
    return {
      hasNotReplyContactList: hasNotReplyContactList
    };
  }
};
</script>
