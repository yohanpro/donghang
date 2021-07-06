<template>
  <div class="filters">
    <div class="filters__left">
      <FilterEntity
        icon-name="world"
        filter-name="국가"
        :filter-list="countryList"
        @filter-select="selectCountry"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: 'Filters',
  components: {
    FilterEntity: () => import('./FiltersEntity'),
  },
  data () {
    return {
      countryList: [
        { id: 'Korea', name: '대한민국' },
        { id: 'Japan', name: '일본' },
        { id: 'France', name: '프랑스' },
        { id: 'UK', name: '영국' },
        { id: 'Spain', name: '스페인' },
        { id: 'Italy', name: '이탈리아' },
        { id: 'Others', name: '기타 국가' },
      ],

      selectedCountry: 'Korea',
      selectedFilter: '모집 중',
    }
  },
  computed: {
    isCityDisabled () {
      return true
    },
    selectedCountiesCityList () {
      return this.cityList[this.selectedCountry]
    },
  },
  methods: {
    selectCountry (selectedCountryName) {
      this.selectedCountry = this.countryList.find(
        country => country.name === selectedCountryName,
      ).id
    },
    selectCity (city) {
      this.selectedCity = city
    },
    selectFilter (filter) {
      this.selectedFilter = filter
    },
  },
}
</script>

<style lang="scss" scoped>
.filters {
  width: auto;
  height: 4rem;
  border-bottom: 1.5px solid var(--border-light-gray);
  display: flex;
  align-items: center;
  align-self: flex-start;
  > div {
    display: flex;
    align-items: center;
    height: 100%;
  }
  &__left {
    flex-basis: 50%;
    margin-right: auto;
    .filters__select-option {
      margin-right: 0.8rem;
    }
  }
  &__right {
    margin-left: auto;
  }
  &__select-option {
    display: flex;
    align-items: center;
    > img {
      width: 18px;
      pointer-events: none;
    }
    p {
      font-size: 1.4rem;
      font-weight: 500;
      margin-left: 0.3rem;
    }
  }
}
</style>
