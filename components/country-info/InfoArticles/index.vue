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
          id: 16,
          title: '대만여행 함께 갈 친구들 구해요! 나나나나나나나러아ㅓㄹ아러아',
          content: '나랑 같이 놀아용',
          writer: 148,
          writer_detail: {
            id: 148,
            profile_pic_bi: {
              url:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1uENsfHX_t2wf1PJ9YL2jw8XkWV7UXK7uiuT9WDHhlZbZthwUVQVjz1kwkCZp2njRQN4&usqp=CAU',
            },
            nick_name: '예림',
            tendency_degrees: {
              activity: 25,
              city_nature: 42,
              willingness: 35,
            },
          },
          user_visiting_count: 29,
          categories_detail: [
            {
              id: 1307,
              sn: 'moyeo_7',
              name: '함께 파티 해요',
              meta: {},
              flan: {
                bias: 0,
              },
              used_count: 0,
            },
          ],
          city_detail: {
            id: 183701,
            code: 'Tainan',
            position: null,
            images: {
              base: {
                title: '',
                banners: [
                  'https://flanb-data.travelflan.com/country-city/banner/tainan.jpg',
                ],
              },
              mobile: {
                title: '',
                banners: [
                  'https://flanb-data.travelflan.com/country-city/mobile_banner/tainan.jpg',
                ],
              },
            },
            meta: {},
            category: 'H-City',
          },
          meeting_time: null,
          expecting_user_count: 4,
          country: 182592,
          status: 1,
          applied_user_count: 2,
          meta: {},
          create_dt: '2021-03-26T16:27:39.910303+09:00',
          update_dt: '2021-05-29T10:21:57.456107+09:00',
          tags: ['호텔콕', '힐링', '저녁식사 콜'],
        },
        {
          id: 10,
          title: '코로나 끝나고 같이 대만가실분..',
          content: '빨리 코로나가 끝나서 대만여행 가서 놀고싶네요....',
          writer: 95,
          writer_detail: {
            id: 95,
            profile_pic_bi: {
              url:
                'https://organicthemes.com/demo/profile/files/2018/05/profile-pic.jpg',
            },
            nick_name: '호박이',
            email: 't***********@n****.com',
            user_tendency_id: 151,
            user_tendency: {
              name: '호텔방 지박령',
              tendency: 'SCP',
            },
            tendency_degrees: {
              activity: 22,
              city_nature: 50,
              willingness: 20,
            },
            friendship_details: {
              status: null,
              friended_dt: null,
              friends_days: null,
              requested_dt: null,
            },
          },
          user_visiting_count: 94,
          categories: [1311],
          categories_detail: [
            {
              id: 1311,
              sn: 'moyeo_8',
              name: '여행 동행',
              meta: {},
              flan: {
                bias: 0,
              },
              used_count: 0,
            },
          ],
          city_detail: {
            id: 183668,
            code: 'Taipei',
            position: null,
            images: {
              base: {
                title:
                  'https://flanb-data.travelflan.com/country-city/main/taipei.jpg',
                banners: [
                  'https://flanb-data.travelflan.com/country-city/banner/taipei2.png',
                ],
              },
              mobile: {
                title:
                  'https://flanb-data.travelflan.com/country-city/main/taipei.jpg',
                banners: [
                  'https://flanb-data.travelflan.com/country-city/mobile_banner/taipei.jpg',
                ],
              },
            },
            meta: {},
            category: 'H-City',
          },
          meeting_time: null,
          expecting_user_count: 6,
          country: 182592,
          status: 1,
          applied_user_count: 4,
          meta: {},
          create_dt: '2021-02-24T18:01:45.685535+09:00',
          update_dt: '2021-04-14T13:41:07.765914+09:00',
          tags: ['가이드 투어', '차량 대절', '몽생미셸'],
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
  padding: 1rem 1rem 7rem 1rem;
}
.toolbar {
  width: 100%;
  display: flex;
  align-items: center;
  .search {
    margin-left: auto;
    margin-right: 1rem;
    cursor: pointer;
  }
}
</style>
