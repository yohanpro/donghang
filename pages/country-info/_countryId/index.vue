<template>
  <div>
    <CountryInfo />
    <FloatingButton target-edit-page="country-info" />
  </div>
</template>
<script>

export default {
  name: 'CountryInfoPage',
  components: {
    CountryInfo: () => import('~/components/country-info'),
    FloatingButton: () => import('~/components/common/FloatingButton'),

  },
  layout: 'with-header',
  middleware: 'authenticated',
}

</script>
