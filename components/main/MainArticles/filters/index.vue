<template>
  <div class="filters">
    <div class="filters__left">
      <FilterEntity
        icon-name="world"
        filter-name="국가"
        :filter-list="countryList"
        @filter-select="selectCountry"
      />
      <FilterEntity
        icon-name="city"
        filter-name="도시"
        :filter-list="selectedCountiesCityList"
        :is-disabled="isCityDisabled"
        @filter-select="selectCity"
      />
    </div>
    <div class="filters__right">
      <FilterEntity
        icon-name="filter"
        filter-name="필터타입"
        :filter-list="filterType"
        @filter-select="selectFilter"
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
      filterType: [
        { type: 'recruiting', name: '모집 중' },
        { type: 'womanonly', name: '여자만' },
        { type: 'meal', name: '식사' },
        { type: 'friend', name: '동행 구함' },
        { type: 'vehicle', name: '차량 같이' },
      ],
      countryList: [
        { id: 'Korea', name: '대한민국' },
        { id: 'Japan', name: '일본' },
        { id: 'France', name: '프랑스' },
        { id: 'UK', name: '영국' },
        { id: 'Spain', name: '스페인' },
        { id: 'Italy', name: '이탈리아' },
        { id: 'Others', name: '기타 국가' },
      ],
      cityList: {
        Korea: [
          { id: 'Seoul', name: '서울' },
          { id: 'Busan', name: '부산' },
          { id: 'Daegu', name: '대구' },
          { id: 'Gwangju', name: '광주' },
        ],
        Japan: [
          { id: 'Tokyo', name: '도쿄' },
          { id: 'Osaka', name: '오사카' },
          { id: 'Fukuoka', name: '후쿠오카' },
          { id: 'Gobe', name: '고베' },
        ],
        France: [
          { id: 'Paris', name: '파리' },
          { id: 'Marseille', name: '마르세유' },
          { id: 'Avignon', name: '아비뇽' },
          { id: 'Giverny', name: '지르베니' },
        ],
        UK: [
          { id: 'London', name: '런던' },
          { id: 'Dublin', name: '더블린' },
          { id: 'Greenwich', name: '그리니치' },
          { id: 'Edinburgh', name: '에든버러' },
        ],
        Spain: [
          { id: 'Madrid', name: '마드리드' },
          { id: 'Barcelona', name: '바르셀로나' },
          { id: 'Seville', name: '세비야' },
          { id: 'Granada', name: '그라나다' },
        ],
        Italy: [
          { id: 'Rome', name: '로마' },
          { id: 'Venice', name: '베네치아' },
          { id: 'Florence', name: '피렌체' },
          { id: 'Milan', name: '밀라노' },
        ],
        Others: [
          { id: 'Prague', name: '프라하' },
          { id: 'Armsteradam', name: '암스테르담' },
          { id: 'Budapest', name: '부다페스트' },
          { id: 'Belgium', name: '벨기에' },
        ],
      },
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
  width: 100%;
  height: 4rem;
  border-bottom: 1.5px solid var(--border-light-gray);
  display: flex;
  align-items: center;
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
