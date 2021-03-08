<template>
  <div>
    <base-header
      is-back-button
      header-title="회원가입을 환영합니다"
      @close="$router.push('/')"
    />
    회원가입을 환영합니다~
  </div>
</template>

<script>
export default {
  name: 'WelcomePage',
  components: {
    BaseHeader: () => import('~/components/common/header/BaseHeader'),
  },
  layout: 'with-header',
}
</script>
