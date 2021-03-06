<template>
  <section>
    <div class="modal-card" style="width: auto">
      <header class="modal-card-head headerBackground"></header>
      <section class="modal-card-body totalPageBackground">
        <b-field>
          <base-input
            v-model="technology.name"
            placeholder="タイトル"
            :isEdit="isEdit"
            type="textbox"
          ></base-input>
        </b-field>
        <b-field label="説明">
          <base-input
            v-model="technology.detail"
            :isEdit="isEdit"
            type="textarea"
          ></base-input>
        </b-field>
        <div v-for="(link, index) in linkList" :key="link" class="mb-3">
          <b-field horizontal label="参考用のサイト名：">
            <base-input
              v-model="linkTitleList[index]"
              :isEdit="isEdit"
              type="textbox"
            ></base-input>
          </b-field>
          <b-field horizontal label="参考用URL名：">
            <base-input
              v-model="linkList[index]"
              :isEdit="isEdit"
              type="textbox"
            ></base-input>
          </b-field>
        </div>
        <base-button
          classes="buttonBackground mb-3"
          divClass="has-text-right"
          text="追加"
          :func="this.addLinkInfo"
          :isEdit="isEdit"
        ></base-button>
        <b-tooltip
          label="編集する場合はここをクリック"
          size="is-small"
          position="is-right"
          v-if="!isEdit"
          always
        >
          <base-button
            classes="buttonBackground"
            text="編集"
            :func="this.changeMode"
            :isEdit="!isEdit"
          ></base-button>
        </b-tooltip>
        <base-button
          classes="buttonBackground"
          text="更新"
          :func="this.updateTechnology"
          :isEdit="isEdit"
        ></base-button>
      </section>
      <b-loading v-model="isLoading"></b-loading>
    </div>
  </section>
</template>

<script>
import BaseInput from "~/components/BaseInput.vue";
import BaseButton from "~/components/BaseButton.vue";

export default {
  components: {
    BaseInput,
    BaseButton
  },
  data() {
    const Technology = require("~/server/api/models/technology");
    return {
      technology: new Technology(),
      linkList: [""],
      linkTitleList: [""],
      hasNotNullLinkList: [],
      hasNotNullLinkTitleList: [],
      isLoading: false,
      isEdit: false
    };
  },
  props: {
    id: String
  },
  async created() {
    await this.$Axios
      .get("api/findOne", {
        params: {
          id: this.id
        }
      })
      .then(response => {
        this.technology = response.data;
        this.linkList = this.technology.links;
        this.linkTitleList = this.technology.linkTitles;
      })
      .catch(() => {
        this.$buefy.dialog.alert({
          message: "エラーが発生しました。",
          type: "is-danger"
        });
      });
  },
  methods: {
    changeMode() {
      this.isEdit = !this.isEdit;
    },
    addLinkInfo() {
      // リンク情報に空欄がない場合のみ追加できる
      if (
        !this.linkList.includes(null) &&
        !this.linkTitleList.includes(null) &&
        !this.linkList.includes("") &&
        !this.linkTitleList.includes("")
      ) {
        this.linkList.push(null);
        this.linkTitleList.push(null);
      } else {
        this.$buefy.dialog.alert("リンク情報に空欄があります。");
      }
    },
    async updateTechnology() {
      if (this.canSave()) {
        this.isLoading = true;

        // 事前チェックで片方のみnullのケースはエラーとしているので、両方nullのケースしか存在しない
        this.hasNotNullLinkList = this.linkList.filter(link => link);
        this.hasNotNullLinkTitleList = this.linkTitleList.filter(
          title => title
        );

        // 不正なリンクが存在しないかチェック
        const safeLinkList = [];
        for (let i = 0; i < this.hasNotNullLinkList.length; i++) {
          if (await this.isSafeLink(this.hasNotNullLinkList[i]))
            safeLinkList.push(this.hasNotNullLinkList[i]);
        }

        if (safeLinkList.length === this.hasNotNullLinkList.length) {
          this.technology.links = this.hasNotNullLinkList;
          this.technology.linkTitles = this.hasNotNullLinkTitleList;

          await this.$Axios
            .put("api/updateTechnology", {
              technology: this.technology
            })
            .then(response => {
              this.isLoading = false;
              this.$buefy.dialog.alert("保存されました。");
              this.$emit("close");
            })
            .catch(() => {
              this.$buefy.dialog.alert({
                message: "エラーが発生しました。",
                type: "is-danger"
              });
              this.isLoading = false;
            });
        } else {
          this.$buefy.dialog.alert({
            message: "危険なリンクが含まれています。",
            type: "is-danger"
          });
          this.isLoading = false;
        }
      }
    },
    canSave() {
      // タイトルが空の場合エラー
      if (!this.technology.name) {
        this.$buefy.dialog.alert("タイトルを入力してください。");
        return false;
      }
      // リンク関連が片方空になっているなどで対ではない場合エラー
      if (this.isEnptyLinkTitleOrLink()) {
        this.$buefy.dialog.alert(
          "未設定のリンクタイトルあるいはリンク欄が存在します。"
        );
        return false;
      }
      return true;
    },
    isEnptyLinkTitleOrLink() {
      // タイトルが空じゃないのにリンクが空のデータをカウント
      const isLinkEmptyCount = this.linkTitleList.filter((title, index) => {
        return title && !this.linkList[index];
      }).length;

      // リンクが空じゃないのにタイトルが空のデータをカウント
      const isLinkTitleEmptyCount = this.linkList.filter((link, index) => {
        return link && !this.linkTitleList[index];
      }).length;

      return isLinkEmptyCount + isLinkTitleEmptyCount;
    },
    async isSafeLink(link) {
      let isSafe = true;
      // 同じキーのクエリを作るためappend
      const params = new URLSearchParams();
      params.append("threatTypes", "MALWARE");
      params.append("threatTypes", "SOCIAL_ENGINEERING");
      params.append("threatTypes", "UNWANTED_SOFTWARE");
      params.append("key", "AIzaSyB1LTt_fFnGBKUdBe2opafUGFg_afMNcSo");
      params.append("uri", link);
      // 安全なリンクか否かチェック
      await this.$AxiosGoogle
        .get("", {
          params: params
        })
        .then(response => {
          if (Object.keys(response.data).length) {
            isSafe = false;
          }
        })
        .catch(error => {
          isSafe = false;
          console.log(error);
        });
      return isSafe;
    }
  }
};
</script>

<style scoped>
.totalPageBackground {
  background-color: #f7ecde;
}

.headerBackground {
  background-color: #54bab9;
}
</style>
