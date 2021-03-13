<template>
  <div>
    <base-header
      header-title="홈"
      is-back-button
    />
    <MainArticles />
    <BottomBar />
  </div>
</template>

<script>
export default {
  name: 'Main',
  components: {
    BaseHeader: () => import('~/components/common/header/BaseHeader'),
    BottomBar: () => import('~/components/common/bottom-bar'),
    MainArticles: () => import('./MainArticles'),
  },
}
</script>
