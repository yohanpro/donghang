<template>
  <section class="contents-area__container">
    <div class="contents-area__main-text">
      {{ detailObj.content }}
    </div>
    <div class="contents-area__time">
      <p>일시</p>
      <p>{{ getDateFormat(detailObj.meetingTime) }}</p>
    </div>
    <div class="contents-area__address">
      <p>주소</p>
      <p>{{ detailObj.address }}</p>
    </div>

    <Location :lat-lng="detailObj.position" />
  </section>
</template>

<script>
import format from 'date-fns/format'
import locale from 'date-fns/locale/ko'

export default {
  name: 'ContentsArea',
  components: {
    Location: () => import('./Location'),
  },
  props: {
    detailObj: {
      type: Object,
      default: () => {},
    },
  },
  data () {
    return {}
  },
  methods: {
    getDateFormat (meetingTime) {
      const date = new Date(meetingTime)
      return format(date, 'yyyy. MM. dd EEEE hh:mm a', { locale })
    },
  },
}
</script>
<style lang="scss" scoped>
.contents-area {
  &__container {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    > div {
      padding: 1rem 2rem;
      font-size: 1.6rem;
      flex-wrap: nowrap;
      p {
        font-weight: 300;
      }
      p:first-child {
        font-weight: bold;
      }
    }
  }
  div &__main-text {
    padding: 1rem 2rem;
    font-size: 1.4rem;
    word-break: break-word;
    overflow-x: hidden;
    overflow-y: scroll;
    border: 1px solid #eeeeee;
    border-radius: 10px;
    width: 95%;
    margin: 0 auto;
    max-height: 30vh;
  }
  &__address {
    padding: 1rem 2rem;
    font-size: 1.6rem;
    flex-wrap: nowrap;
  }
}
</style>
