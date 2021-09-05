<template>
  <nav class="bottom-bar">
    <div class="menu-item-container">
      <div
        v-for="menu in menuItems"
        :key="menu.title"
        class="menu-item"
        @click="goToCountryInfo(menu.route)"
      >
        <img
          :src="require(`~/assets/images/icons/navbar/${getMenuIconImageSrc(menu.icon)}.svg`)"
          :alt="menu.title"
        >
        <p>{{ menu.title }}</p>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'BottomBar',
  data () {
    return {
      currentActiveMenuIcon: '',
      menuItems: [
        {
          title: '동행찾기',
          route: '/main',
          icon: 'group',
        },
        {
          title: '여행지 정보',
          route: '/country-info',
          icon: 'country-info',
        },
        {
          title: '채팅',
          route: '/chattings',
          icon: 'chattings',
        },
        {
          title: '나의 정보',
          route: '/my-info',
          icon: 'person',
        },
      ],
    }
  },

  mounted () {
    const currentIcon = this.menuItems.find(menuItem => this.$route.path.includes(menuItem.route)).icon
    this.currentActiveMenuIcon = currentIcon
  },
  methods: {
    getMenuIconImageSrc (icon) {
      return icon === this.currentActiveMenuIcon ? icon + '-active' : icon
    },
    goToCountryInfo (targetRoute) {
      const hasCountryIdTabsArr = ['main', 'country-info']
      const isNeedCountryIdRoute = hasCountryIdTabsArr.some(tab => targetRoute.includes(tab))

      let targetUrl = targetRoute

      if (isNeedCountryIdRoute) {
        const { countryId } = this.$route.params
        targetUrl += '/' + countryId
      }
      return this.$router.push(targetUrl)
    },
  },
}
</script>

<style lang="scss" scoped>
.bottom-bar {
  width: 100%;
  height: 6.5rem;
  max-height: 70px;
  position: fixed;
  bottom: 0;
  left: 0;
  border-top: var(--border-light-gray);
  background-color: #fff;
}
.menu-item-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .menu-item {
    flex-basis: 25%;
    height: 100%;
    font-size: 1.3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
}
</style>
