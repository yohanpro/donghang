<template>
  <ul class="menu-wrapper">
    <li
      v-for="menuItem in countryMenuItems"
      :key="menuItem.title"
      class="menu-item"
      @click="$router.push(menuItem.route)"
    >
      <img
        :src="require(`~/assets/images/icons/${menuItem.icon}.svg`)"
        :alt="menuItem.title"
      >
      {{ menuItem.title }}
    </li>
  </ul>
</template>
<script>
export default {
  name: 'Country',
  data () {
    return {
      countryMenuItems: [
        {
          icon: 'article',
          title: '나라 정보 글',
          route: '/my-info/country-article',
        },
        {
          icon: 'reply',
          title: '나라 정보 댓글',
          route: '/my-info/country-reply',
        },
        {
          icon: 'star',
          title: '나라 정보 주제 목록',
          route: '/topic/country',
        },
      ],
    }
  },
}
</script>
<style lang='scss' scoped>

</style>
