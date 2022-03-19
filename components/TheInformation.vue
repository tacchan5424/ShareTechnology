<template>
  <div class="columns is-centered is-vcentered totalPageBackground">
    <div class="column is-mobile">
      <div class="box boxBackground">
        <p class="title is-5">{{ "★お知らせ★" }}</p>
        <div v-for="information in informationList" :key="information._id">
          <a
            class="dummyLink"
            href="javascript:void(0)"
            @click="cardModal(information)"
          >
            {{ information.createdAt.substr(0, 10) }}
            {{ information.title }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheInformationDetailModal from "~/components/TheInformationDetailModal.vue";

export default {
  props: {
    informationList: Array
  },
  methods: {
    cardModal(information) {
      this.$buefy.modal.open({
        parent: this,
        component: TheInformationDetailModal,
        hasModalCard: false,
        customClass: "custom-class custom-class-2",
        trapFocus: true,
        props: { information: information }
      });
    }
  }
};
</script>

<style scoped>
.boxBackground {
  background-color: #fbf8f1;
}

.dummyLink {
  cursor: pointer;
}
</style>
