<template>
  <v-app>
    <nuxt class="with-title-header" />
  </v-app>
</template>

<script>
// TODO: v-progress-circular 구현하기
export default {
  name: 'WithTitleHeaderLayout',

}
</script>

<style lang="scss">
.v-progress-circular {
  position: fixed !important;
  top: calc(50vh - 1rem);
  left: calc(50vw - 1rem);
  z-index: 10001;
  svg {
    color: $tealish;
  }
}
.with-title-header {
  margin-top: 5rem;
}
</style>
