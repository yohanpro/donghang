<template>
  <div class="flex pl-4 pr-4">
    <div
      v-for="orderType in orderTypes"
      :key="orderType.type"
      class="order__buttons"
    >
      {{ orderType.title }}
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'CommentsOrder',
  props: {
    orderTypes: {
      type: Array,
      default: () => [],
    },
    selectedOrderType: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.order__buttons {
  margin-right: 1rem;
}
</style>
