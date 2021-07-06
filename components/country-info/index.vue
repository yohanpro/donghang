<template>
  <div>
    <div class="country-info">
      <base-header
        header-title="여행지 정보"
        is-back-button
      />

      <InfoArticles />
    </div>
    <BottomBar />
  </div>
</template>

<script>
export default {
  name: 'CountryInfo',
  components: {
    BaseHeader: () => import('~/components/common/header/BaseHeader'),
    BottomBar: () => import('~/components/common/bottom-bar'),
    InfoArticles: () => import('~/components/country-info/InfoArticles'),
  },
}
</script>

<style lang="scss" scoped>

</style>
