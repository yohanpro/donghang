<template>
  <div class="info-sections mt-4">
    <Country />
  </div>
</template>
<script>
export default {
  name: 'InfoSections',
  components: {
    Country: () => import('./Country.vue'),
  },
  data () {
    return {}
  },
  methods: {

  },
}
</script>
<style lang='scss'>
.info-sections {
}
</style>
