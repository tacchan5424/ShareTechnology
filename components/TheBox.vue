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
            :href="content.links[index]"
            target="_blank"
          >
            {{ linkTitle }}
          </a>
        </div>
      </div>
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
      iterator: 0
    };
  },
  props: {
    content: Object
  },
  methods: {
    incrementUsedCount() {
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
    }
  }
};
</script>
