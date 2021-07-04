<template>
  <div>
    <CountryInfo />
  </div>
</template>
<script>

export default {
  name: 'CountryInfoPage',
  components: {
    CountryInfo: () => import('~/components/country-info'),

  },
  layout: 'with-header',
  middleware: 'authenticated',
}

</script>
