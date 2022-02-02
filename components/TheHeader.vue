<template>
  <div class="field is-grouped is-mobile has-background-primary">
    <div class="control column is-3"></div>
    <div class="control column is-3">
      <base-input
        :value="query"
        :isEdit="true"
        type="search"
        icon="magnify"
      ></base-input>
    </div>
    <div class="control column is-1">
      <base-button :func="this.searchTechnology" text="検索"></base-button>
    </div>
    <div class="control column ">
      <b-navbar class="has-background-primary">
        <template #start>
          <b-navbar-item
            class="control column is-6 has-background-primary"
            @click="cardModal"
          >
            <b-icon icon="plus"></b-icon>
            新規作成
          </b-navbar-item>
          <b-navbar-item
            class="control column is-6 has-background-primary"
            href="contact"
          >
            <b-icon icon="email"></b-icon>
            お問い合わせ
          </b-navbar-item>
          <b-navbar-item
            class="control column is-6 has-background-primary"
            href="userPolicy"
          >
            <b-icon icon="note"></b-icon>
            利用規約
          </b-navbar-item>
        </template>
      </b-navbar>
    </div>
  </div>
</template>

<script>
import BaseInput from "~/components/BaseInput.vue";
import BaseButton from "~/components/BaseButton.vue";
import BaseModal from "~/components/BaseModal.vue";

export default {
  components: {
    BaseInput,
    BaseButton
  },
  data() {
    return {
      query: null
    };
  },
  methods: {
    searchTechnology() {},
    cardModal() {
      this.$buefy.modal.open({
        parent: this,
        component: BaseModal,
        hasModalCard: false,
        customClass: "custom-class custom-class-2",
        trapFocus: true
      });
    }
  }
};
</script>
