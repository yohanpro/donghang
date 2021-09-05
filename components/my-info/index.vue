<template>
  <div class="my-info p-4 flex-col items-start">
    <base-header
      header-title="나의 동행"
    >
      <div
        slot="header-right"
        @click.prevent="handleSettings"
      >
        <img
          src="~/assets/images/icons/settings.svg"
          alt="Settings"
        >
      </div>
    </base-header>

    <Profile />
    <v-btn
      class="mt-4 w-full pl-0 pr-0"
    >
      프로필 보기
    </v-btn>

    <section>
      <div>동행 내역</div>
      <div>내역</div>
      <div>활동한 내역</div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'MyInfo',
  components: {
    BaseHeader: () => import('~/components/common/header/BaseHeader.vue'),
    Profile: () => import('~/components/auth/profile/index.vue'),
  },
  methods: {
    handleSettings (settings) {
      console.log('handleSettings', settings)
    },
  },
}
</script>
<style lang='scss'>
.my-info {
  width: 100%;

}
</style>
