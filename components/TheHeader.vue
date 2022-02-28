<template>
  <div class="columns is-mobile headerBackground">
    <div class="column is-3">
      <b-icon icon="home" size="is-large"></b-icon>
    </div>
    <div class="column is-3">
      <base-input
        v-model="query"
        :isEdit="true"
        type="search"
        icon="magnify"
        divClass="header"
        v-if="needSearch"
        classes="headerBackground"
      ></base-input>
    </div>
    <div class="column is-2">
      <base-button
        divClass="header"
        :func="this.searchTechnology"
        text="検索"
        v-if="needSearch"
        classes="buttonBackground"
      ></base-button>
    </div>
    <div class="column">
      <b-navbar class="headerBackground">
        <template #start>
          <b-navbar-item class="headerBackground" @click="cardModal">
            <b-icon icon="plus"></b-icon>
            新規作成
          </b-navbar-item>
          <b-navbar-item class="headerBackground" href="contact">
            <b-icon icon="email"></b-icon>
            お問い合わせ
          </b-navbar-item>
          <b-navbar-item class="headerBackground" href="userPolicy">
            <b-icon icon="note"></b-icon>
            利用規約
          </b-navbar-item>
        </template>
      </b-navbar>
    </div>
    <b-loading v-model="isLoading"></b-loading>
  </div>
</template>

<script>
import BaseInput from "~/components/BaseInput.vue";
import BaseButton from "~/components/BaseButton.vue";
import TheCreateTechnologyModal from "~/components/TheCreateTechnologyModal.vue";

export default {
  components: {
    BaseInput,
    BaseButton
  },
  props: {
    needSearch: Boolean
  },
  data() {
    return {
      query: null,
      isLoading: false
    };
  },
  methods: {
    searchTechnology() {
      if (this.query) {
        this.isLoading = true;
        // 全角スペースを半角スペースに変換、半角スペースでキーワードを区切る
        const queryList = this.query.replaceAll("　", " ").split(" ");
        // ひとまず1キーワードのみで検索する
        this.$Axios
          .get("api/findLikeByNameOrderByUsedCountDesc", {
            params: {
              query: this.query
            }
          })
          .then(response => {
            this.isLoading = false;
            this.$emit("clickSearchButton", response.data);
          })
          .catch(() => {
            this.$buefy.dialog.alert({
              message: "エラーが発生しました。",
              type: "is-danger"
            });
            this.isLoading = false;
          });
      } else {
        this.$buefy.dialog.alert("キーワードを設定してください。");
      }
    },
    cardModal() {
      this.$buefy.modal.open({
        parent: this,
        component: TheCreateTechnologyModal,
        hasModalCard: false,
        customClass: "custom-class custom-class-2",
        trapFocus: true
      });
    }
  }
};
</script>

<style scoped>
.headerBackground {
  background-color: #54bab9;
}

.headerBackground >>> .navbar-menu {
  background-color: #54bab9;
}
</style>
