<template>
  <div class="my-info flex-col items-start">
    <base-header header-title="나의 동행">
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
    <v-btn class="ml-auto mr-auto mt-4 w-10/12 d-block">
      프로필 보기
    </v-btn>
    <HistoryButtons />
    <InfoSections />
    <BottomBar />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'MyInfo',
  components: {
    BaseHeader: () => import('~/components/common/header/BaseHeader.vue'),
    Profile: () => import('~/components/auth/profile/index.vue'),
    HistoryButtons: () => import('./HistoryButtons.vue'),
    BottomBar: () => import('~/components/common/bottom-bar'),
    InfoSections: () => import('./info-sections'),
  },
  data () {
    return {

    }
  },
  computed: {
    ...mapState('auth', ['userId']),
  },
  async created () {
    await this.fetchProfile(this.userId)
  },
  methods: {
    ...mapActions('user', ['fetchProfile']),
    handleSettings (settings) {
      console.log('handleSettings', settings)
    },
  },
}
</script>
<style lang='scss' scoped>
.my-info {
  width: 100%;
  padding-bottom: 6.5rem;
}
</style>
