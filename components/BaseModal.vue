<template>
  <section>
    <form action="">
      <div class="modal-card is-gapless" style="width: auto">
        <header class="modal-card-head">
          <p class="modal-card-title">新規作成画面</p>
          <button type="button" class="delete" @click="$emit('close')" />
        </header>

        <base-input
          v-model="message"
          placeholder="edit me"
          :isEdit="true"
          type="textbox"
        ></base-input>

        <p style="background-color: #ffffff">{{ message }}とは</p>
        <base-input
          v-model="detail"
          :isEdit="true"
          type="textarea"
        ></base-input>

        <b-field
          horizontal
          label="参考用のサイト名："
          class="app control column is-10 control columns is-centered"
        >
          <base-input
            v-model="detail"
            :isEdit="true"
            type="textbox"
          ></base-input>
        </b-field>

        <b-field horizontal label="参考用URL名：" class="app">
          <base-input
            v-model="detail"
            :isEdit="true"
            type="textbox"
          ></base-input>
        </b-field>

        <b-field horizontal label="参考用のサイト名：" class="app">
          <base-input
            v-model="detail"
            :isEdit="true"
            type="textbox"
          ></base-input>
        </b-field>

        <b-field horizontal label="参考用URL名：" class="app">
          <base-input
            v-model="detail"
            :isEdit="true"
            type="textbox"
          ></base-input>
        </b-field>

        <b-field horizontal label="参考用のサイト名：" class="app">
          <base-input
            v-model="detail"
            :isEdit="true"
            type="textbox"
          ></base-input>
        </b-field>

        <b-field horizontal label="参考用URL名：" class="app">
          <base-input
            v-model="detail"
            :isEdit="true"
            type="textbox"
          ></base-input>
        </b-field>

        <b-field horizontal label="参考用のサイト名：" class="app">
          <base-input
            v-model="detail"
            :isEdit="true"
            type="textbox"
          ></base-input>
        </b-field>

        <b-field horizontal label="参考用URL名：" class="app">
          <base-input
            v-model="detail"
            :isEdit="true"
            type="textbox"
          ></base-input>
        </b-field>

        <b-field horizontal label="参考用のサイト名：" class="app">
          <base-input
            v-model="detail"
            :isEdit="true"
            type="textbox"
          ></base-input>
        </b-field>

        <b-field horizontal label="参考用URL名：" class="app">
          <base-input
            v-model="detail"
            :isEdit="true"
            type="textbox"
          ></base-input>
        </b-field>

        <footer class="modal-card-foot">
          <base-button text="送信"></base-button>
        </footer>
      </div>
    </form>
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

<style>
.app {
  margin: 0px !important; /*恐らくbuefyで使用されているCSSの優先度の方が高く、上手く修正できなかったため、簡易的に最優先になる!importantを使用*/
  background-color: #ffffff;
}
</style>
