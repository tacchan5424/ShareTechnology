<template>
  <div class="totalPageBackground">
    <div class="column">
      <div class="box is-mobile boxBackground">
        <p class="title is-5 dummyLink" @click="cardModal">
          {{ this.content.name }}
        </p>
        <div v-for="(linkTitle, index) in initialLinkTitles" :key="index">
          <span class="wordBreak">{{ linkTitle }}</span> <br />
          <a href="javascript:void(0)" @click="redirect(content.links[index])">
            {{ content.links[index] }}
          </a>
        </div>
        <base-button
          :text="String(content.usedCount + this.iterator)"
          icon="thumb-up-outline"
          :func="this.incrementUsedCount"
          classes="buttonBackground"
          v-if="false"
        ></base-button>
        <b-collapse
          :open="false"
          position="is-bottom"
          aria-id="contentIdForA11y1"
          v-if="needCollapse()"
        >
          <template #trigger="props">
            <a aria-controls="contentIdForA11y1">
              <b-icon :icon="!props.open ? 'menu-down' : 'menu-up'"></b-icon>
              {{ !props.open ? "もっと見る" : "閉じる" }}
            </a>
          </template>
          <div v-for="(linkTitle, index) in collapseLinkTitles" :key="index">
            <span class="wordBreak">{{ linkTitle }}</span> <br />
            <a
              href="javascript:void(0)"
              @click="redirect(content.links[index + visibleLinkNumber])"
            >
              {{ content.links[index + visibleLinkNumber] }}
            </a>
          </div>
        </b-collapse>
      </div>
      <b-loading v-model="isLoading"></b-loading>
    </div>
  </div>
</template>

<script>
import BaseButton from "~/components/BaseButton.vue";
import TheEditTechnologyModal from "~/components/TheEditTechnologyModal.vue";

export default {
  components: {
    BaseButton
  },
  data() {
    return {
      iterator: 0,
      isLoading: false,
      visibleLinkNumber: 2
    };
  },
  props: {
    content: Object
  },
  computed: {
    // リンクは2つまで表示させる
    initialLinkTitles() {
      if (
        this.content.linkTitles !== null &&
        this.content.linkTitles.length > this.visibleLinkNumber - 1
      ) {
        return this.content.linkTitles.slice(0, this.visibleLinkNumber);
      }
      return this.content.linkTitles;
    },
    // 3つ目以降は別途表示させる
    collapseLinkTitles() {
      return this.content.linkTitles.slice(this.visibleLinkNumber);
    }
  },
  methods: {
    incrementUsedCount() {
      this.isLoading = true;
      this.$Axios
        .put("api/incrementUserCount", {
          technology: this.content
        })
        .then(response => {
          this.iterator = this.iterator + 1;
          this.isLoading = false;
        })
        .catch(() => {
          this.$buefy.dialog.alert({
            message: "エラーが発生しました。",
            type: "is-danger"
          });
          this.isLoading = false;
        });
    },
    async redirect(link) {
      this.isLoading = true;
      // 同じキーのクエリを作るためappend
      const params = new URLSearchParams();
      params.append("threatTypes", "MALWARE");
      params.append("threatTypes", "SOCIAL_ENGINEERING");
      params.append("threatTypes", "UNWANTED_SOFTWARE");
      params.append("key", "AIzaSyB1LTt_fFnGBKUdBe2opafUGFg_afMNcSo");
      params.append("uri", link);
      // 安全なリンクか否かチェック
      const isDangerLink = await this.$AxiosGoogle
        .get("", {
          params: params
        })
        .then(response => {
          this.isLoading = false;
          return Object.keys(response.data).length;
        })
        .catch(error => {
          this.isLoading = false;
          console.log(error);
        });

      if (isDangerLink) {
        this.$buefy.dialog.alert({
          message: "危険なリンクのため遷移できません。",
          type: "is-danger"
        });
      } else {
        // iosのsafariの場合、非同期処理周りでwindow.openが使えないため分岐させる
        if (!window.open(link, "_blank")) {
          location.href = link;
        } else {
          window.open(link, "_blank");
        }
      }
    },
    cardModal() {
      this.$buefy.modal.open({
        parent: this,
        component: TheEditTechnologyModal,
        hasModalCard: false,
        customClass: "custom-class custom-class-2",
        trapFocus: true,
        props: { id: this.content._id }
      });
    },
    needCollapse() {
      return (
        this.content.linkTitles !== null &&
        this.content.linkTitles.length > this.visibleLinkNumber
      );
    }
  }
};
</script>

<style scoped>
.totalPageBackground {
  background-color: #f7ecde;
}

.boxBackground {
  background-color: #fbf8f1;
}

.dummyLink {
  cursor: pointer;
}

a,
.wordBreak {
  word-break: break-all;
}
</style>
