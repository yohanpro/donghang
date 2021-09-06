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
<style lang='scss'>
.menu {
  &-wrapper {
    width: 100%;
    margin-top: 1rem;
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    border-top: 1rem solid #ececec;
    border-bottom: 1rem solid #ececec;
    padding: 1rem 0;
    > li {
      display: flex;
      width: 100%;
      align-items: center;
      img {
        width: 2rem;
        height: auto;
        margin-right: 1rem;
      }
      height: 3.5rem;
      font-size: 1.5rem;
    }
  }
}
</style>
