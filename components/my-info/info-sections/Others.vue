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
          icon: 'email',
          title: '친구초대',
          route: '/my-info/invite-friend',
        },
        {
          icon: 'share',
          title: '동행 공유',
          route: '/my-info/donghang-reply',
        },
        {
          icon: 'announcement',
          title: '공지사항',
          route: '/announcement',
        },
        {
          icon: 'question',
          title: '자주 묻는 질문',
          route: '/faq',
        },
        {
          icon: 'settings',
          title: '설정',
          route: '/my-info/settings',
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
  border-bottom: none !important;
}
</style>
