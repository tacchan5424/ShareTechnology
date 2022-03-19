<template>
  <section>
    <div class="modal-card" style="width: auto">
      <header class="modal-card-head headerBackground"></header>
      <section class="modal-card-body totalPageBackground">
        <b-field>
          <base-input
            :text="information.title"
            placeholder="タイトル"
            :isEdit="isEdit"
            type="textbox"
          ></base-input>
        </b-field>
        <b-field>
          <base-input
            :text="information.detail"
            :isEdit="isEdit"
            type="textarea"
          ></base-input>
        </b-field>
      </section>
    </div>
  </section>
</template>

<script>
import BaseInput from "~/components/BaseInput.vue";

export default {
  components: {
    BaseInput
  },
  data() {
    return {
      isEdit: false
    };
  },
  props: {
    information: Object
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
