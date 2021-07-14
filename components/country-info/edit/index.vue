<template>
  <div class="country-info-edit">
    <base-header
      header-title="여행지 정보"
      is-back-button
    >
      <div slot="header-right">
        <button class="btn-complete">
          완료
        </button>
      </div>
    </base-header>
    <section class="country-info-edit__body">
      <div class="country-info-edit__subject">
        <SelectInput
          place-holder="게시글의 주제를 선택해주세요"
          :select-array="subjectArray"
          @inputSelect="handleInputChange($event, field)"
        />
      </div>
    </section>

    <BottomBar />
  </div>
</template>

<script>
export default {
  name: 'CountryInfoEdit',
  components: {
    BottomBar: () => import('~/components/common/bottom-bar'),
    BaseHeader: () => import('~/components/common/header/BaseHeader'),
    SelectInput: () => import('~/components/common/inputs/SelectInput'),
  },
  data () {
    return {
      subjectArray: ['주제1', '주제2', '주제3'],

    }
  },

  methods: {
    handleInputChange (value, field) {
      console.log('value,', value)
    },
  },
}
</script>

<style lang="scss" scoped>
::v-deep
  .v-text-field.v-text-field--solo:not(.v-text-field--solo-flat)
  > .v-input__control
  > .v-input__slot {
  box-shadow: none;
}
::v-deep .v-text-field__details {
  display: none;
}
.btn-complete {
  color: orange;
  font-size: 1.3rem;
  font-weight: bold;
}
.country-info-detail {
  &__body {
    padding: 1rem;
  }
  &__subject {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #ccc;
  }
}
</style>
