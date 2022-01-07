<template>
  <!--
  <select v-model="selected">
    <option v-for="option in options" v-bind:key="option.name">
      {{ text }}
    </option>
  </select>
-->

  <section>
    <b-field label="Simple">
      <b-select placeholder="問い合わせ内容">
        <option
          v-for="option in options"
          :value="option.name"
          :key="option.name"
        >
          {{ option.text }}
        </option>
      </b-select>
    </b-field>
  </section>
</template>

<script>
export default {
  props: {
    options: Array
  }
};

/*
new Vue({
  el: "selected",
  data: {
    options: [
      { text: "あ", name: "A" },
      { text: "い", name: "B" },
      { text: "う", name: "C" }
    ]
  }
});

const data = require("@/data/sample.json");

export default {
  data() {
    return { data };
  }
};
*/
</script>

<style scoped></style>
