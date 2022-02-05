<template>
  <section>
    <div class="modal-card" style="width: auto">
      <header class="modal-card-head">
        <p class="modal-card-title">新規作成画面</p>
        <button type="button" class="delete" @click="$emit('close')" />
      </header>
      <section class="modal-card-body">
        <b-field>
          <base-input
            v-model="technology.name"
            placeholder="タイトル"
            :isEdit="true"
            type="textbox"
          ></base-input>
        </b-field>
        <b-field label="説明">
          <base-input
            v-model="technology.detail"
            :isEdit="true"
            type="textarea"
          ></base-input>
        </b-field>
        <div v-for="(link, index) in linkList" :key="link" class="mb-3">
          <b-field horizontal label="参考用のサイト名：">
            <base-input
              v-model="linkTitleList[index]"
              :isEdit="true"
              type="textbox"
            ></base-input>
          </b-field>
          <b-field horizontal label="参考用URL名：">
            <base-input
              v-model="linkList[index]"
              :isEdit="true"
              type="textbox"
            ></base-input>
          </b-field>
        </div>
        <base-button
          classes="is-primary mb-3"
          divClass="has-text-right"
          text="追加"
          :func="this.addLinkInfo"
        ></base-button>
        <footer class="modal-card-foot">
          <base-button
            classes="is-primary"
            text="送信"
            :func="this.createTechnology"
          ></base-button>
        </footer>
      </section>
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
      linkList: [],
      linkTitleList: []
    };
  },
  methods: {
    addLinkInfo() {
      // リンク情報に空欄がない場合のみ追加できる
      if (!this.linkList.includes("") && !this.linkTitleList.includes("")) {
        this.linkList.push("");
        this.linkTitleList.push("");
      } else {
        this.$buefy.dialog.alert("リンク情報に空欄があります。");
      }
    },
    createTechnology() {
      this.technology.linkList = this.linkList;
      this.technology.linkTitleList = this.linkTitleList;
    }
  }
};
</script>

<style scoped></style>
