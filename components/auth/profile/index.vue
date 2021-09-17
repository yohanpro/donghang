<template>
  <section class="profile">
    <div
      v-show="profileObj.verifiedUser"
      class="verified-user"
    >
      <img
        src="~/assets/images/icons/verified.svg"
        alt="인증마크"
      >
      <p>인증된 유저</p>
    </div>
    <div class="profile__photo-wrapper">
      <img
        :src="profileObj.userPicture"
        alt="Profile photo"
      >
    </div>
    <p class="profile__nickname">
      {{ profileObj.nickname }}
    </p>
  </section>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Profile',
  data () {
    return {

    }
  },
  computed: {
    ...mapState('user', ['profileObj']),
  },
}
</script>

<style lang="scss" scoped>
.verified-user {
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 1rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 18px;
    height: auto;
    margin-right: 3px;
  }
  p {
    font-weight: bolder;
    color: green;
  }
}

.profile {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  &__nickname {
    font-size: 1rem;
    font-weight: bold;
    text-align: center;
    margin-top: 1rem;
  }
  &__photo-wrapper {
    width: 10rem;
    height: 10rem;
    position: relative;
    overflow: hidden;
    margin: 0 auto;
    border-radius: 50%;
    img {
      width: auto;
      height: 100%;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>
