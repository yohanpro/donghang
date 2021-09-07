<template>
  <div class="info-sections mt-4">
    <Country />
    <Donghang />
    <Others />
  </div>
</template>
<script>
export default {
  name: 'InfoSections',
  components: {
    Country: () => import('./Country.vue'),
    Donghang: () => import('./Donghang.vue'),
    Others: () => import('./Others.vue'),
  },
  data () {
    return {}
  },
  methods: {},
}
</script>
<style lang='scss'>
.info-sections {
  .menu {
    &-wrapper {
      width: 100%;
      margin-top: 1rem;
      margin-bottom: 1rem;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;
      border-top: 1rem solid #ececec;
      border-bottom: 1rem solid #ececec;
      padding: 1rem;

      > li {
        display: flex;
        width: 100%;
        align-items: center;
        img {
          width: 2rem;
          height: auto;
          margin-right: 1rem;
        }
        height: 4.5rem;
        font-size: 1.5rem;
      }
    }
  }
}
</style>
