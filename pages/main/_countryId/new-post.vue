<template>
  <PosterEdit
    edit-type="new"
  />
</template>

<script>

export default {
  name: 'NewPostPage',
  components: {
    PosterEdit: () => import('~/components/main/edit'),
  },
  layout: 'with-header',
  middleware: 'authenticated',
}

</script>
