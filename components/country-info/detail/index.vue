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
      <div class="country-info-detail__writer-container">
        <p class="tag">
          {{ detailObj.tag }}
        </p>
        <div class="country-info-detail__writer">
          <div class="country-info-detail__writer-image-container">
            <img
              :src="detailObj.writer_detail.profile_pic_bi.url"
              alt="Writer image"
            >
          </div>
          <p class="country-info-detail__writer__nickname">
            {{ detailObj.writer_detail.nick_name }}
          </p>
        </div>
      </div>
    </section>
    <BottomBar />
  </div>
</template>

<script>
export default {
  name: 'CountryInfoDetail',
  components: {
    BottomBar: () => import('~/components/common/bottom-bar'),
    BaseHeader: () => import('~/components/common/header/BaseHeader'),
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
        content:
          '보시다시피 현 상황입니다. 사람들이 너무 많이 입국해서 대기시간만 거의 3시간이네요. 곧 입국하실 분들 참고하시길 ',
        writer: 148,
        writer_detail: {
          id: 1,
          profile_pic_bi: {
            url:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1uENsfHX_t2wf1PJ9YL2jw8XkWV7UXK7uiuT9WDHhlZbZthwUVQVjz1kwkCZp2njRQN4&usqp=CAU',
          },
          nick_name: '주인장',
        },
        user_visiting_count: 29,
        country: 1,
        status: 1,
        meta: {},
        create_dt: '2021-03-26T16:27:39.910303+09:00',
        update_dt: '2021-05-29T10:21:57.456107+09:00',
        tag: '입국정보',
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
  .tag {
    margin-bottom: 1rem;
  }
  &__writer {
    width: 100%;
    display: flex;
    align-items: center;
    &-image-container {
      width: 4rem;
      height: 4rem;
      max-width: 50px;
      border: 1px solid #ccc;
      border-radius: 50%;
      overflow: hidden;
      & > img {
        width: 100%;
      }
    }
    &-container {
      width: 100%;
      display: flex;
      flex-direction: column;
      padding: 1rem 0.5rem;
      border-bottom: 1px solid #ececec;
    }

    &__nickname {
      font-size: 1.3rem;
      margin-left: 1rem;
    }
  }
}
</style>
