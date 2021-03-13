<template>
  <section id="main-articles">
    <Filters />
    <ArticleEntity
      v-for="article in articles"
      :key="article.index"
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
          index: 1,
          title: '여행 같이가요',
        },
        {
          index: 2,
          title: '밥 같이 먹어요',
        },
        {
          index: 3,
          title: '숙소 같이 써요',
        },
        {
          index: 4,
          title: '여행 같이가요',
        },
        {
          index: 5,
          title: '여행 같이가요',
        },
        {
          index: 6,
          title: '여행 같이가요',
        },
        {
          index: 7,
          title: '여행 같이가요',
        },
      ],
    }
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
