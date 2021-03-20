<template>
  <div class="main-detail">
    <base-header
      :header-title="detailObj.title"
      is-back-button
    />
    <p class="detail__cdt">
      <span v-show="detailObj.isKKleOL">끌올</span>
      {{ detailObj.createdTime }}
    </p>
    <section class="poster-section">
      <TagArea
        :tags="detailObj.tags"
        :is-only-woman="detailObj.isOnlyWoman"
      />
      <Profile />
    </section>
    <ContentsArea :detail-obj="detailObj" />
    <hr class="divider">
    <ParticipantsArea />
    <BottomBar />
  </div>
</template>

<script>
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
        content: '우리 만나서 놉시다 그런데 사실 저는 조금 낯을 많이 가리는 성격이라 괜찮을련지 모르겠네요 그래도 용기내어서 글을 올립니다. ',
        address: '236 Gunja-dong, Gwangjin-gu, abcddeff,,,dfd Seoul',
        position: [37.5487074, 127.074697],
      },
    }
  },
}
</script>

<style lang="scss" scoped>
 .v-application p {
  margin-bottom: 1rem;
}
.divider {
  width: 90%;
  border-top: 1px solid var(--light-gray);
  margin: 1.5rem auto;
}
.detail__cdt {
  font-size: 1rem;
  font-weight: bold;
  margin-left: 1rem;
  color: var(--brown-grey);
}
</style>
