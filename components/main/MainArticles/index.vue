<template>
  <section id="main-articles">
    <Filters />
    <ArticleEntity
      v-for="article in articles"
      :key="article.id"
      :article-obj="article"
    />
  </section>
</template>

<script>

export default {
  name: 'MainArticles',
  components: {
    ArticleEntity: () => import('./ArticleEntity'),
    Filters: () => import('./filters'),
  },
  data () {
    return {
      articles: [
        {
          id: 1,
          title: '여행 같이가요',
          country: 1,
        },
        {
          id: 2,
          title: '밥 같이 먹어요',
          country: 1,
        },
        {
          id: 3,
          title: '숙소 같이 써요',
          country: 1,
        },
        {
          id: 4,
          title: '여행 같이가요',
          country: 1,
        },
        {
          id: 5,
          title: '여행 같이가요',
          country: 1,
        },
        {
          id: 6,
          title: '여행 같이가요',
          country: 1,
        },
        {
          id: 7,
          title: '여행 같이가요',
          country: 1,
        },
      ],
    }
  },
  computed: {
    countryId () {
      return this.$route.params.countryId
    },
  },
}
</script>

<style lang="scss" scoped>
#main-articles {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  overflow-y: scroll;
  padding: 1.5rem 1rem 7rem 1rem;
}

</style>
