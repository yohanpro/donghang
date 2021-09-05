<template>
  <section class="history mt-4 pt-2 pb-2 flex justify-around">
    <v-btn
      v-for="historyButton in historyButtons"
      :key="historyButton.item"
      @click="`$router.push(${historyButton.url})`"
    >
      {{ historyButton.item }}
    </v-btn>
  </section>
</template>
<script>
export default {
  name: 'HistoryButtons',
  data () {
    return {
      historyButtons: [
        { item: 'donghang', url: '/my-info/donghang-history' },
        { item: 'interesting', url: '/my-info/interesting-party' },
      ],
    }
  },
}
</script>
<style lang='scss'>
.history {
  &__item {
    width: 20%;
    overflow: hidden;
    img {
      width: 40px;
      height: auto;
    }
  }
}
</style>
