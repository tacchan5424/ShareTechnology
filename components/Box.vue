<template>
  <div class="columns is-centered">
    <div class="column is-mobile is-half">
      <div class="box">
        <p class="title is-5">
          {{ this.content.name }}
        </p>
        <div class="">
          <span class="">初心者向け</span>
          <a
            v-for="(linkTitle, index) in content.linkTitles"
            :key="index"
            :href="content.links[index]"
            target="_blank"
          >
            {{ linkTitle }}
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
