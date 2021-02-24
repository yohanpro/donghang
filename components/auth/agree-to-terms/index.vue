<template>
  <base-header
    header-title="회원가입하기"
    is-back-button
  />
</template>

<script>

export default {
  name: 'AgreeToTerms',
  components: {
    BaseHeader: () => import('~/components/common/header/BaseHeader'),
  },
  layout: 'with-header',
}
</script>
