<template>
  <div class="columns is-centered is-vcentered">
    <base-button
      :text="String(content.usedCount + this.iterator)"
      icon="thumb-up-outline"
      :func="this.incrementUsedCount"
    ></base-button>
    <div class="column is-mobile is-half">
      <div class="box">
        <p class="title is-5">
          {{ this.content.name }}
        </p>
        <div class="">
          <span class="">初心者向け</span>
          <a
            v-for="(linkTitle, index) in content.linkTitles"
            :key="index"
            href="javascript:void(0)"
            @click="redirect(content.links[index])"
          >
            {{ linkTitle }}
          </a>
        </div>
      </div>
      <b-loading v-model="isLoading"></b-loading>
    </div>
  </div>
</template>

<script>
import BaseButton from "~/components/BaseButton.vue";

export default {
  components: {
    BaseButton
  },
  data() {
    return {
      iterator: 0,
      isLoading: false
    };
  },
  props: {
    content: Object
  },
  methods: {
    incrementUsedCount() {
      this.isLoading = true;
      this.$Axios
        .put("api/incrementUserCount", {
          technology: this.content
        })
        .then(response => {
          this.iterator = this.iterator + 1;
          this.isLoading = false;
        })
        .catch(() => {
          this.$buefy.dialog.alert({
            message: "エラーが発生しました。",
            type: "is-danger"
          });
          this.isLoading = false;
        });
    },
    async redirect(link) {
      this.isLoading = true;
      // 安全なリンクか否かチェック
      await this.$AxiosGoogle
        .get("", {
          params: {
            key: "AIzaSyB1LTt_fFnGBKUdBe2opafUGFg_afMNcSo",
            uri: link,
            threatTypes: "MALWARE",
            threatTypes: "SOCIAL_ENGINEERING",
            threatTypes: "UNWANTED_SOFTWARE"
          }
        })
        .then(response => {
          this.isLoading = false;
          if (Object.keys(response.data).length) {
            this.$buefy.dialog.alert({
              message: "危険なリンクのため遷移できません。",
              type: "is-danger"
            });
          } else {
            window.open(link, "_blank");
          }
        })
        .catch(error => {
          this.isLoading = false;
          console.log(error);
        });
    }
  }
};
</script>
