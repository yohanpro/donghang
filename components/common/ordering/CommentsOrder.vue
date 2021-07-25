<template>
  <div class="flex pl-4 pr-4">
    <div
      v-for="orderType in orderTypes"
      :key="orderType.orderBy"
      class="order__buttons"
      :class="{ active: selectedOrderType === orderType.orderBy }"
      @click="$emit('button-click', orderType.orderBy)"
    >
      <div v-show="selectedOrderType === orderType.orderBy" />
      <p>{{ orderType.title }}</p>
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
      default: 'latest',
    },
  },
}
</script>

<style lang="scss" scoped>
.order__buttons {
  margin-right: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  &.active {
    font-weight: bold;
  }
  > div {
    width: 0.25rem;
    height: 0.25rem;
    border-radius: 50%;
    background-color: orange;
    margin-right: 0.5rem;
  }
}
</style>
