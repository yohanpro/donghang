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
  name: 'Donghang',
  data () {
    return {
      countryMenuItems: [
        {
          icon: 'article',
          title: '동행 정보 글',
          route: '/my-info/donghang-article',
        },
        {
          icon: 'reply',
          title: '동행 정보 댓글',
          route: '/my-info/donghang-reply',
        },
        {
          icon: 'star',
          title: '참여한 동행 정보',
          route: '/topic/donghang-participated',
        },
      ],
    }
  },
}
</script>
<style lang='scss' scoped>
.menu-wrapper {
  border-top: none !important;
  margin-top: 0 !important;
}
</style>
