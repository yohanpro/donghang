<template>
  <section id="main-articles">
    <div class="toolbar">
      <Filters />
      <div class="search">
        <img
          src="~/assets/images/icons/search.svg"
          alt="Search Icon"
        >
      </div>
    </div>
    <ArticleEntity
      v-for="article in articles"
      :key="article.id"
      :article-obj="article"
    />
  </section>
</template>

<script>
export default {
  name: 'InfoArticles',
  components: {
    ArticleEntity: () => import('./ArticleEntity'),
    Filters: () => import('./filters'),
  },
  data () {
    return {
      articles: [
        {
          id: 1,
          title: '지금 서울 날씨 어때?',
          content: '제곧내. 지금 서울 강북구 날씨 어떤지 아는 사람 있어?',
          writer: 1,
          writer_detail: {
            id: 1,
            profile_pic_bi: {
              url:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1uENsfHX_t2wf1PJ9YL2jw8XkWV7UXK7uiuT9WDHhlZbZthwUVQVjz1kwkCZp2njRQN4&usqp=CAU',
            },
            nick_name: '서울남자',
          },
          user_visiting_count: 3,
          country: 1,
          status: 1,
          meta: {},
          create_dt: '2021-03-26T16:27:39.910303+09:00',
          update_dt: '2021-05-29T10:21:57.456107+09:00',
          tags: ['서울', '강북구', '날씨'],
        },
        {
          id: 2,
          title: '경복궁, 창덕궁 투어 예약 질문',
          content: '경복궁 창덕궁 입장료 예약방법 잘 아는사람 알려줘',
          writer: 2,
          writer_detail: {
            id: 2,
            profile_pic_bi: {
              url:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1uENsfHX_t2wf1PJ9YL2jw8XkWV7UXK7uiuT9WDHhlZbZthwUVQVjz1kwkCZp2njRQN4&usqp=CAU',
            },
            nick_name: '핑핑',
          },
          user_visiting_count: 3,
          country: 1,
          status: 1,
          meta: {},
          create_dt: '2021-03-26T16:27:39.910303+09:00',
          update_dt: '2021-05-29T10:21:57.456107+09:00',
          tags: ['창덕궁', '경복궁', '입장료'],
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
  padding-bottom: 7rem;
  background-color: #ececec;
  flex: 1;
}
.toolbar {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  background-color: #fff;
  .search {
    margin-left: auto;
    margin-right: 1rem;
    cursor: pointer;
  }
}
</style>
