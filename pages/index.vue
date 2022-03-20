<template>
  <div class="totalPageBackground top">
    <the-header
      :needSearch="true"
      @clickSearchButton="setTechnologyList"
    ></the-header>
    <div class="columns">
      <div class="column is-one-quarter"></div>
      <div class="column is-half">
        <the-box
          v-for="technology in paginatedTechnologyList"
          :key="technology._id"
          :content="technology"
        ></the-box>
        <div class="columns is-centered columns is-gapless">
          <b-pagination
            :total="total"
            v-model="current"
            :range-before="rangeBefore"
            :range-after="rangeAfter"
            :order="order"
            :size="size"
            :simple="isSimple"
            :rounded="isRounded"
            :per-page="perPage"
            :icon-prev="prevIcon"
            :icon-next="nextIcon"
            aria-next-label="Next page"
            aria-previous-label="Previous page"
            aria-page-label="Page"
            aria-current-label="Current page"
          >
          </b-pagination>
        </div>
      </div>
      <div class="column is-one-quarter">
        <div class="column is-12">
          <the-information :informationList="informationList"></the-information>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheBox from "~/components/TheBox.vue";
import TheHeader from "~/components/TheHeader.vue";
import TheInformation from "~/components/TheInformation.vue";

export default {
  components: {
    TheBox,
    TheHeader,
    TheInformation
  },
  data() {
    return {
      technologyList: [],
      informationList: [],
      // total: 200,
      current: 1,
      perPage: 10,
      rangeBefore: 2,
      rangeAfter: 2,
      isSimple: false,
      isRounded: false,
      prevIcon: "chevron-left",
      nextIcon: "chevron-right",
      order: "",
      size: ""
    };
  },
  async asyncData(app) {
    // 技術情報取得
    const technologyList = [];
    await app.$Axios
      .get("api/findAllOrderByUpdatedAtDesc")
      .then(response => {
        response.data.forEach(element => {
          technologyList.push(element);
        });
      })
      .catch(error => {});

    // お知らせ情報取得
    const informationList = [];
    await app.$Axios
      .get("api/findInformation")
      .then(response => {
        response.data.forEach(element => {
          informationList.push(element);
        });
      })
      .catch(error => {});

    return {
      technologyList: technologyList,
      informationList: informationList
    };
  },
  computed: {
    total() {
      return this.technologyList.length;
    },
    paginatedTechnologyList() {
      // ページ数に応じた検索結果を返す
      const pageNumber = this.current - 1;
      return this.technologyList.slice(
        pageNumber * this.perPage,
        (pageNumber + 1) * this.perPage
      );
    }
  },
  methods: {
    setTechnologyList(res) {
      this.technologyList = res;
    }
  }
};
</script>

<style scoped>
.top {
  overflow: hidden;
}

.totalPageBackground {
  background-color: #f7ecde;
}

.boxBackground {
  background-color: #fbf8f1;
}
</style>
