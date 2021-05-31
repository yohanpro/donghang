<template>
  <div>
    <Main />
    <FloatingButton />
  </div>
</template>
<script>

export default {
  name: 'MainArticlePage',
  components: {
    Main: () => import('~/components/main'),
    FloatingButton: () => import('~/components/main/FloatingButton'),
  },
  layout: 'with-header',
  middleware: 'authenticated',
}

</script>
