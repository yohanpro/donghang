<template>
  <div class="location">
    <div class="label">
      장소
    </div>
    <div class="location__search">
      <input
        id="place-input"
        v-model="placeInput"
        type="text"
        placeholder="장소를 입력하세요"
      >
      <img
        src="~/assets/images/icons/search.svg"
        class="serach-icon"
        alt="검색"
      >
    </div>
    <div id="map" />
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
      marker: null,
      geocoder: null,
      infowindow: null,
      infowindowContent: null,
      src: '',
      placeName: '',
      address: '',
      placeInput: '',
    }
  },
  mounted () {
    this.initMap()
    this.initInfoWindow()
    this.initAutocomplete()
  },
  methods: {
    searchPlace (place) {
      console.log('place', place)
    },
    initMap () {
      const position = { lat: 37.5487074, lng: 127.074697 }
      this.map = new google.maps.Map(document.getElementById('map'), {
        center: position,
        zoom: 15,
        mapTypeControl: false,
      })
      this.marker = new google.maps.Marker({
        position,
        map: this.map,
      })

      const { map, marker } = this
      // eslint-disable-next-line new-parens
      this.geocoder = new google.maps.Geocoder

      google.maps.event.addListener(map, 'click', () => {
        this.infowindow.close()
      })

      google.maps.event.addListener(map, 'dragstart', () => {
        this.infowindow.close()
      })
      google.maps.event.addListener(map, 'dragend', () => {
        const center = map.getCenter()
        this.marker.setPosition(center)
        this.geocodeLatLng(center)
      })

      google.maps.event.addListener(map, 'center_changed', () => {
        const isInfowindowOpen = this.infowindow.getMap()

        if (!isInfowindowOpen) {
          window.setTimeout(() => {
            const center = map.getCenter()
            this.marker.setPosition(center)
          }, 100)
        }
      })

      google.maps.event.addListener(marker, 'click', () => {
        if (!this.address) {
          const center = map.getCenter()
          this.marker.setPosition(center)
          this.geocodeLatLng(center)
        }
        this.infowindow.open(map, marker)
      })
    },
    initInfoWindow () {
      this.infowindow = new google.maps.InfoWindow()
      this.infowindowContent = document.getElementById('infowindow-content')
      this.infowindow.setContent(this.infowindowContent)
    },
    initAutocomplete () {
      const { map } = this
      const input = document.getElementById('place-input')
      const autocomplete = new google.maps.places.Autocomplete(input)
      autocomplete.bindTo('bounds', map)
      autocomplete.setFields(['address_components', 'geometry', 'icon', 'name'])
      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace()
        if (!place.geometry) {
          // User entered the name of a Place that was not suggested and
          // pressed the Enter key, or the Place Details request failed.
          window.alert("No details available for input: '" + place.name + "'")
        }
        if (place.geometry.viewport) {
          map.fitBounds(place.geometry.viewport)
        } else {
          map.setCenter(place.geometry.location)
          map.setZoom(17) // Why 17? Because it looks good.
        }
        this.address = place.address_components?.map(addr => addr.short_name).join(' ')
        this.pacInput = this.address
        this.src = place.icon
        this.placeName = place.name
        const center = place.geometry.location
        this.marker.setPosition(center)
        this.infowindow.open(this.map, this.marker)
      })
    },
    geocodeLatLng (location) {
      const self = this
      const {
        infowindow,
        map,
        marker,
      } = this
      this.geocoder.geocode({ location }, function (results, status) {
        self.address = ''
        const [firstResult] = results
        if (status === 'OK') {
          if (firstResult) {
            const { formatted_address: formattedAddress } = firstResult
            self.address = formattedAddress
          } else {
            window.alert('No results found')
          }
        } else {
          window.alert('Geocoder failed due to: ' + status)
        }
        self.src = ''
        self.placeName = ''
        self.pacInput = self.address
        infowindow.open(map, marker)
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
      cursor: pointer;
    }
  }
}
#map {
  width: 100%;
  margin: 1rem auto;
  height: 25vh;
  min-height: 250px;
  border: 1px solid #ccc;
}
</style>
