<template>
  <AgreeToTerms />
</template>

<script>
export default {
  name: 'AgreeToTermsPage',
  components: {
    AgreeToTerms: () => import('~/components/auth/agree-to-terms'),
  },
  layout: 'with-header',
}
</script>
