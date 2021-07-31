<template>
  <div class="country-info-detail">
    <base-header is-back-button>
      <div slot="header-right">
        <button
          v-for="headerButton in headerButtons"
          :key="headerButton.name"
          class="header-button"
          @click="headerButton.methods"
        >
          <img
            :src="
              require(`~/assets/images/icons/${getIcon(headerButton.icon)}.svg`)
            "
            :alt="headerButton.name"
          >
        </button>
      </div>
    </base-header>
    <section class="country-info-detail__body">
      <DetailWriter :detail-obj="detailObj" />
      <DetailMain :contents="detailObj.contents" />
    </section>
    <Reactions
      :post-writer="detailObj.writer_detail"
      :reaction-obj="detailObj.reactionObj"
    />
    <BottomBar />
  </div>
</template>

<script>
export default {
  name: 'CountryInfoDetail',
  components: {
    BottomBar: () => import('~/components/common/bottom-bar'),
    BaseHeader: () => import('~/components/common/header/BaseHeader'),
    DetailWriter: () => import('./elements/Writer'),
    DetailMain: () => import('./elements/Main'),
    Reactions: () => import('./reactions'),
  },
  data () {
    return {
      headerButtons: [
        {
          name: 'notifications',
          icon: 'alarm',
          methods: this.handleAlarm,
        },
        {
          name: 'share',
          icon: 'share',
          methods: this.shareArticle,
        },
        {
          name: 'more',
          icon: 'more',
          methods: this.moreAction,
        },
      ],
      isAlarmOn: false,
      detailObj: {
        id: 1,
        title: '파리 샤를 드골 공항 지금 입국 상황',
        contents: {
          text: '보시다시피 현 상황입니다. 사람들이 너무 많이 입국해서 대기시간만 거의 3시간이네요. 곧 입국하실 분들 참고하시길',
          imageURL: [
            'http://ojsfile.ohmynews.com/STD_IMG_FILE/2016/1130/IE002061065_STD.jpg',
            'https://img2.yna.co.kr/photo/etc/af/2021/02/01/PAF20210201207701055_P2.jpg',
          ],
        },

        writer: 148,
        writer_detail: {
          id: 3,
          profile_pic_bi: {
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1uENsfHX_t2wf1PJ9YL2jw8XkWV7UXK7uiuT9WDHhlZbZthwUVQVjz1kwkCZp2njRQN4&usqp=CAU',
          },
          nick_name: '주인장',
        },
        user_visiting_count: 29,
        country: 1,
        status: 1,
        meta: {},
        create_dt: '2021-07-16T14:45:39.910303+09:00',
        update_dt: '2021-05-29T10:21:57.456107+09:00',
        tag: '입국정보',
        reactionObj: {
          replies: [
            {
              id: 1,
              writerId: 3,
              writerPictures:
                'https://s3-ap-northeast-1.amazonaws.com/ojuz-attach/profile/images/GioChkhaidze',
              text: '샤를 드골은 지금 그런가요? 참고하겠습니다.',
              create_dt: '2021-07-16T15:45:39.910303+09:00',
              update_dt: '2021-05-29T10:21:57.456107+09:00',
              subReplies: [
                {
                  id: 148,
                  subReplyWriterId: 12,
                  subReplyPictures:
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Souvenir_silhouette_post_card._Toledo%27s_greatest_store%3B_Tiedtke%27s._The_store_for_all_the_people_-_DPLA_-_f00a78fe61c216236a13cdebf588d3c3_%28page_1%29.jpg/220px-Souvenir_silhouette_post_card._Toledo%27s_greatest_store%3B_Tiedtke%27s._The_store_for_all_the_people_-_DPLA_-_f00a78fe61c216236a13cdebf588d3c3_%28page_1%29.jpg',
                  text: '네 지금 중국인들 대거 입국해서 난리네요',
                  create_dt: '2021-07-16T15:48:39.910303+09:00',
                  update_dt: '2021-05-29T10:21:57.456107+09:00',
                },
                {
                  id: 2,
                  subReplyWriterId: 3,
                  subReplyPictures:
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Souvenir_silhouette_post_card._Toledo%27s_greatest_store%3B_Tiedtke%27s._The_store_for_all_the_people_-_DPLA_-_f00a78fe61c216236a13cdebf588d3c3_%28page_1%29.jpg/220px-Souvenir_silhouette_post_card._Toledo%27s_greatest_store%3B_Tiedtke%27s._The_store_for_all_the_people_-_DPLA_-_f00a78fe61c216236a13cdebf588d3c3_%28page_1%29.jpg',
                  text: '이제 더 들어오는 비행기가 없으니 괜찮겠죠? ㅠㅠ',
                  create_dt: '2021-07-16T15:55:39.910303+09:00',
                  update_dt: '2021-05-29T10:21:57.456107+09:00',
                },
              ],
            },
            {
              id: 2,
              writerId: 8,
              writerPictures:
                'https://s3-ap-northeast-1.amazonaws.com/ojuz-attach/profile/images/GioChkhaidze',
              text: '와 사람 개많네 ㄷㄷ',
              create_dt: '2021-07-23T15:45:39.910303+09:00',
              update_dt: '2021-07-23T10:21:57.456107+09:00',
              subReplies: [
                {
                  subReplyId: 179,
                  subReplyWriterId: 13,
                  subReplyPictures:
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Souvenir_silhouette_post_card._Toledo%27s_greatest_store%3B_Tiedtke%27s._The_store_for_all_the_people_-_DPLA_-_f00a78fe61c216236a13cdebf588d3c3_%28page_1%29.jpg/220px-Souvenir_silhouette_post_card._Toledo%27s_greatest_store%3B_Tiedtke%27s._The_store_for_all_the_people_-_DPLA_-_f00a78fe61c216236a13cdebf588d3c3_%28page_1%29.jpg',
                  text: '이 새벽에 웬 난리난리',
                  create_dt: '2021-07-23T15:48:39.910303+09:00',
                  update_dt: '2021-07-23T10:21:57.456107+09:00',
                },
              ],
            },
          ],
        },
      },
    }
  },
  methods: {
    getIcon (icon) {
      if (icon !== 'alarm') {
        return icon
      }
      const alarmIcon = 'alarm'
      return this.isAlarmOn ? alarmIcon + '-on' : alarmIcon + '-off'
    },
    handleAlarm () {
      console.log('handle Alarm')
    },
    shareArticle () {
      console.log('shareArticle')
    },
    moreAction () {
      console.log('moreAction')
    },
  },
}
</script>

<style lang="scss" scoped>
::v-deep
  .v-text-field.v-text-field--solo:not(.v-text-field--solo-flat)
  > .v-input__control
  > .v-input__slot {
  box-shadow: none;
}

::v-deep .v-text-field__details {
  display: none;
}

.header-button:not(:last-child) {
  margin-right: 1rem;
}

.country-info-detail {
  &__body {
    padding: 1rem;
  }
}
</style>
