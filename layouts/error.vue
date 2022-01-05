<template>
  <div>
    <div v-if="error.statusCode === 404">
      <span>
        {{ "お探しのページは存在しません。" }}
      </span>
    </div>
    <div v-if="error.statusCode !== 404">
      <span>
        {{ "エラーが発生しました。時間をおいて再度お願いいたします。" }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    error: Object
  }
};
</script>
