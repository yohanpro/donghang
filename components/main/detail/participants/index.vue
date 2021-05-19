<template>
  <section class="participants-area-container">
    <div
      v-show="!isOwner"
      class="participants-area__button-container"
    >
      <v-btn
        depressed
        height="30"
        width="100%"
        color="primary"
      >
        참여 희망
      </v-btn>
      <button />
    </div>
    <div class="participants-area__list-container">
      <ParticipantsEntity
        v-for="participant in participantsArr"
        :key="participant.id"
        :participant="participant"
        :is-allowed="true"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: 'ParticipantsArea',
  components: {
    ParticipantsEntity: () => import('./Entity'),
  },
  data () {
    return {
      isOwner: false,
      participantsArr: [
        {
          id: 1232313,
          email: 'bravo@abcd.com',
          nickname: '고민고민중',
          profile: {
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU',
          },
          detail: {
            textarea: '안녕하세요 저도 반갑습니다.안녕하세요 저도 반갑습니다.안녕하세요 저도 반갑습니다.안녕하세요 저도 반갑습니다.안녕하세요 저도 반갑습니다.안녕하세요 저도 반갑습니다.안녕하세요 저도 반갑습니다.안녕하세요 저도 반갑습니다.안녕하세요 저도 반갑습니다.안녕하세요 저도 반갑습니다.안녕하세요 저도 반갑습니다.',
          },
        },
        {
          id: 2222,
          email: 'talent@example.com',
          nickname: '복면가왕',
          profile: {
            imageUrl: 'http://thenewcode.com/assets/images/thumbnails/sarah-parmenter.jpeg',
          },
          detail: {
            textarea: '어 저도 그 때 시간이 맞아요',
          },
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
::v-deep .v-btn {
  height: 2rem;
}
.participants-area {
  &-container {
    width: 100%;
    height: 60vh;
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
  }
  &__button-container {
    width: 100%;
    border: 1px solid #eeeeee;
    border-radius: 7px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__list-container {
    display: flex;
    flex-direction: column;
    padding: 1rem 0 10rem;
    margin-bottom: 2rem;
  }
}
</style>
