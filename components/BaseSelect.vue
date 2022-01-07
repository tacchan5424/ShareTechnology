<template>
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
</script>

<style scoped></style>
