<template>
  <div class="main-detail">
    <base-header
      :header-title="detailObj.title"
      is-back-button
    >
      <div
        slot="header-right"
        class="participants-status"
      >
        <p class="participants-status__title">
          모집중
        </p>
        <p class="participants-status__count">
          2 / 4
        </p>
      </div>
    </base-header>
    <div class="detail__header">
      <p class="detail__cdt">
        <span v-show="detailObj.isKKleOL">끌올</span>
        {{ detailObj.createdTime }}
      </p>
      <div class="detail__header__view-count">
        <img
          src="~/assets/images/icons/view.svg"
          alt="조회수"
        >
        <p>{{ detailObj.viewCount }}</p>
      </div>
    </div>
    <section class="poster-section">
      <v-card
        class="poster-section__wrapper"
        shaped
      >
        <TagArea
          :tags="detailObj.tags"
          :is-only-woman="detailObj.isOnlyWoman"
        />
        <Profile />
      </v-card>
    </section>
    <ContentsArea :detail-obj="detailObj" />
    <hr class="divider">
    <ParticipantsArea />
    <BottomBar />
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'MainDetail',
  components: {
    BottomBar: () => import('~/components/common/bottom-bar'),
    BaseHeader: () => import('~/components/common/header/BaseHeader'),
    TagArea: () => import('./elements/TagArea'),
    Profile: () => import('~/components/auth/profile'),
    ContentsArea: () => import('./contents-area'),
    ParticipantsArea: () => import('./participants'),
  },
  data () {
    return {
      detailObj: {
        title: '마드리드에서 같이 놀아요',
        createdTime: '2021년 3월 14일 20:18 (금)',
        isKKleOL: true,
        currentMembers: {
          limit: 4,
          current: 2,
        },
        isOnlyWoman: true,
        tags: ['식사 같이해요', '같이 놀아요'],
        meetingTime: '2021-07-08T15:39:00+09:00',
        content:
          '우리 만나서 놉시다 그런데 사실 저는 조금 낯을 많이 가리는 성격이라 괜찮을련지 모르겠네요 그래도 용기내어서 글을 올립니다. ',
        address: '236 Gunja-dong, Gwangjin-gu, abcddeff,,,dfd Seoul',
        position: [37.5487074, 127.074697],
        viewCount: 20,
      },
    }
  },
  computed: {
    ...mapState('auth', ['userId']),
    isMyPoster () {
      return true
    },
  },
}
</script>

<style lang="scss" scoped>
.v-application p {
  margin-bottom: 0;
}
.poster-section__wrapper {
  width: 80%;
  display: flex;
  flex-direction: column;
  margin: 3rem auto 0 ;
  padding:2rem;
}
.participants-status {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 5rem;
  position: absolute;
  height: 49%;
  background-color: green;
  color: #fff;
  border-top-left-radius: 20%;
  border-bottom-left-radius: 20%;
  border-radius: 12px;
  right: 1rem;
  &__title {
    font-weight: bold;
  }
}
.divider {
  width: 90%;
  border-top: 1px solid var(--light-gray);
  margin: 1.5rem auto;
}
.detail__cdt {
  font-size: 1rem;
  font-weight: 400;
  margin-left: 1rem;
  color: var(--brown-grey);
}
.detail__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  > div {
    display: flex;
    align-items: center;
  }
  &__view-count {
    margin-right: 1rem;
    img {
      width: 18px;
      margin-right: 0.5rem;
    }
    p {
      font-size: 1.2rem;
    }
  }
}
</style>
