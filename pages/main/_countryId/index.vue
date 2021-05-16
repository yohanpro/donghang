<template>
  <Main />
</template>
<script>

export default {
  name: 'MainArticlePage',
  components: {
    Main: () => import('~/components/main'),
  },
  layout: 'with-header',
  middleware: 'authenticated',
}

</script>
