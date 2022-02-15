<template>
  <div class="has-background-white-ter">
    <the-header
      :needSearch="true"
      @clickSearchButton="setTechnologyList"
    ></the-header>
    <the-box
      v-for="technology in paginatedTechnologyList"
      :key="technology._id"
      :content="technology"
    ></the-box>
    <div class="columns is-centered">
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
</template>

<script>
import TheBox from "~/components/TheBox.vue";
import TheHeader from "~/components/TheHeader.vue";

export default {
  components: {
    TheBox,
    TheHeader
  },
  data() {
    return {
      technologyList: [],
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
    const technologyList = [];
    // 技術情報取得
    // 画面更新時にコールされていない
    await app.$Axios
      .get("api/findAllOrderByUpdatedAtDesc")
      .then(response => {
        response.data.forEach(element => {
          technologyList.push(element);
        });
      })
      .catch(error => {});

    return {
      technologyList: technologyList
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
      console.log(this.technologyList);
    }
  }
};
</script>

<style scoped></style>
