<template>
  <div class="columns is-centered">
    <div class="column is-mobile is-half">
      <div class="box">
        <p class="title is-5">
          {{ this.content.technorogyName }}
        </p>
        <div class="">
          <span class="">初心者向け</span>
          <a
            v-for="(appName, index) in content.appName"
            :key="index"
            :href="content.appLink[index]"
            target="_blank"
          >
            {{ appName }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: Object
  }
};
</script>
