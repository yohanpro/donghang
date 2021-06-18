<template>
  <div class="location">
    <div class="label">
      장소
    </div>
    <div class="location__search">
      <input
        type="text"
        placeholder="장소를 입력하세요"
        @input="searchPlace"
      >
      <img
        src="~/assets/images/icons/search.svg"
        class="serach-icon"
        alt="검색"
      >
    </div>
    <div id="map">
      구글맵이 들어가요
    </div>
  </div>
</template>

<script>
const { google } = window
export default {
  name: 'LocationSelect',
  props: {},
  data () {
    return {
      map: null,
    }
  },
  mounted () {
    this.initMap()
  },
  methods: {
    searchPlace (place) {
      console.log('place', place)
    },
    initMap () {
      const position = { lat: 37.5487074, lng: 127.074697 }
      console.log('init map')

      this.map = new google.maps.Map(document.getElementById('map'), {
        center: position,
        zoom: 15,
        mapTypeControl: false,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.location {
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  .label {
    align-self: flex-start;
    padding-left: 1rem;
  }
  &__search {
    width: calc(100% - 2rem);
    border: 1px solid #ccc;
    border-radius: 4px;
    margin: 1rem auto 0;
    height: 4rem;
    max-height: 50px;
    font-size: 1.3rem;
    color: #eee;
    position: relative;

    input {
      width: 100%;
      height: 100%;
      padding: 0.5rem 1rem;
    }

    .serach-icon {
      width: 24px;
      position: absolute;
      right: 1rem;
      top: 50%;
      transform: translateY(-50%);
    }
  }
}
#map {
  width: 100%;
  margin: 1rem auto;
  height: 20vh;
  min-height: 200px;
  border: 1px solid #ccc;
}
</style>
