<template>
  <div>
    <CountryInfoDetail />
  </div>
</template>

<script>
export default {
  name: 'CountryInfoDetailPage',
  components: {
    CountryInfoDetail: () => import('~/components/country-info/detail/index'),
  },
}
</script>
