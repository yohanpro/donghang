<template>
  <div>
    <Main />
    <FloatingButton target-edit-page="main" />
  </div>
</template>
<script>

export default {
  name: 'MainArticlePage',
  components: {
    Main: () => import('~/components/main'),
    FloatingButton: () => import('~/components/common/FloatingButton'),
  },
  layout: 'with-header',
  middleware: 'authenticated',
}

</script>
