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
            v-model="message"
            placeholder="タイトル"
            :isEdit="true"
            type="textbox"
          ></base-input>
        </b-field>
        <b-field label="説明">
          <base-input
            v-model="detail"
            :isEdit="true"
            type="textarea"
          ></base-input>
        </b-field>
        <b-field horizontal label="参考用のサイト名：" class="noMargin">
          <base-input
            v-model="detail"
            :isEdit="true"
            type="textbox"
          ></base-input>
        </b-field>
        <b-field horizontal label="参考用URL名：" class="noMargin">
          <base-input
            v-model="detail"
            :isEdit="true"
            type="textbox"
          ></base-input>
        </b-field>
        <b-field horizontal label="参考用のサイト名：" class="noMargin">
          <base-input
            v-model="detail"
            :isEdit="true"
            type="textbox"
          ></base-input>
        </b-field>
        <b-field horizontal label="参考用URL名：" class="noMargin">
          <base-input
            v-model="detail"
            :isEdit="true"
            type="textbox"
          ></base-input>
        </b-field>
        <b-field horizontal label="参考用のサイト名：" class="noMargin">
          <base-input
            v-model="detail"
            :isEdit="true"
            type="textbox"
          ></base-input>
        </b-field>
        <b-field horizontal label="参考用URL名：" class="noMargin">
          <base-input
            v-model="detail"
            :isEdit="true"
            type="textbox"
          ></base-input>
        </b-field>
        <b-field horizontal label="参考用のサイト名：" class="noMargin">
          <base-input
            v-model="detail"
            :isEdit="true"
            type="textbox"
          ></base-input>
        </b-field>
        <b-field horizontal label="参考用URL名：" class="noMargin">
          <base-input
            v-model="detail"
            :isEdit="true"
            type="textbox"
          ></base-input>
        </b-field>
        <b-field horizontal label="参考用のサイト名：" class="noMargin">
          <base-input
            v-model="detail"
            :isEdit="true"
            type="textbox"
          ></base-input>
        </b-field>
        <b-field horizontal label="参考用URL名：" class="noMargin">
          <base-input
            v-model="detail"
            :isEdit="true"
            type="textbox"
          ></base-input>
        </b-field>
        <footer class="modal-card-foot">
          <base-button classes="is-primary" text="送信"></base-button>
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
    return {
      technology: null,
      technologyDetails: null,
      message: null
    };
  }
};
</script>

<style scoped></style>
