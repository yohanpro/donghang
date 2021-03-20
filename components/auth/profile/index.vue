<template>
  <section class="profile">
    <div class="verified-user">
      <img
        src="~/assets/images/icons/verified.svg"
        alt="인증마크"
      >
      <p>인증된 유저</p>
    </div>
    <div class="profile__photo-wrapper">
      <img
        :src="profileObj.photo"
        alt="Profile photo"
      >
    </div>
    <p class="profile__id">
      {{ profileObj.id }}
    </p>
  </section>
</template>

<script>
export default {
  name: 'Profile',
  data () {
    return {
      profileObj: {
        name: 'John Doe',
        id: 'abcd_john',
        photo:
          'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHw%3D&w=1000&q=80',
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.verified-user {
  width: 100%;
  margin-top: 1rem;
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
  &__id {
    font-size: 1rem;
    font-weight: bold;
    text-align: center;
  }
  &__photo-wrapper {
    width: 8.5rem;
    height: 8.5rem;
    position: relative;
    overflow: hidden;
    margin: 0 auto;
    background: orange;
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
