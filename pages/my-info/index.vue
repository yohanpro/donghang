<template>
  <div>
    <MyInfo />
  </div>
</template>
<script>
export default {
  name: 'MyInfoPage',
  components: {
    MyInfo: () => import('~/components/my-info/index.vue'),
  },
  layout: 'with-header',
  // middleware: 'authenticated',
}
</script>
<style lang='scss' scoped>

</style>
