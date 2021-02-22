<template>
  <v-app dark>
    <nuxt />
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {}
  },
}
</script>

<style lang="scss">
html {
  font-size: 8px !important;

  @media only screen and (min-width: $galaxyS5) {
    font-size: 10px !important;
  }
  @media only screen and (min-width: $tablet) {
    font-size: 14px !important;
  }
}
</style>
