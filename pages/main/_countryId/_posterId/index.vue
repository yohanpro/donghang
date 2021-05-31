<template>
  <div>
    <MainDetail />
  </div>
</template>
<script >

export default {
  name: 'MainArticleDetailPage',
  components: {
    MainDetail: () => import('~/components/main/detail'),

  },
  layout: 'with-header',
}
</script>
