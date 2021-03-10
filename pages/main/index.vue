<template>
  <Main />
</template>
<script>

export default {
  name: 'MainPage',
  components: {
    Main: () => import('~/components/main'),
  },
  layout: 'with-header',
}

</script>
