<template>
  <div class="main-detail">
    <base-header
      header-title="동행 찾기"
      is-back-button
    />
    디테일 페이지입니당
    <BottomBar />
  </div>
</template>

<script>
export default {
  name: 'MainDetail',
  components: {
    BottomBar: () => import('~/components/common/bottom-bar'),
    BaseHeader: () => import('~/components/common/header/BaseHeader'),
  },
}

</script>
