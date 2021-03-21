<template>
  <section class="location-wrapper">
    <div id="map">
      지도
    </div>
  </section>
</template>

<script>
const { google } = window

export default {
  name: 'Location',
  props: {
    latLng: {
      type: Array,
      default: () => [],
    },
  },
  data () {
    return {
      map: null,
      marker: null,
    }
  },
  mounted () {
    this.initMap()
  },
  methods: {
    initMap () {
      const [lat, lng] = this.latLng
      const position = { lat, lng }
      this.map = new google.maps.Map(document.getElementById('map'), {
        center: position,
        zoom: 16,
        mapTypeControl: false,
      })
      this.marker = new google.maps.Marker({
        position,
        map: this.map,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.location-wrapper {
  width: 100%;
  height: 250px;
  overflow: hidden;
}

#map {
  width: 100%;
  height: 100%;
}
</style>
