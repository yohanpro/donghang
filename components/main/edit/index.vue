<template>
  <div class="edit">
    <base-header
      header-title="새 글 작성"
      is-back-button
    >
      <div slot="header-right">
        <button
          class="btn-complete"
          @click="handleComplete"
        >
          완료
        </button>
      </div>
    </base-header>

    <section class="title">
      <div class="label">
        제목
        <span class="required">*</span>
      </div>
      <input
        v-model="title"
        type="text"
        maxlength="15"
        placeholder="제목을 입력하세요"
      >
    </section>
    <CategoryInput @category-update="updateCategory" />
    <section class="date">
      <div class="label">
        일시
        <span class="required">*</span>
      </div>
      <DatePickerDialog
        @dateSelect="setDate"
      />
    </section>
    <LocationSelect />
    <Description
      :description="description"
      @description-input="inputDescription"
    />
  </div>
</template>

<script>
export default {
  name: 'PosterEdit',
  components: {
    BaseHeader: () => import('~/components/common/header/BaseHeader'),
    DatePickerDialog: () => import('./date-time-picker/DatepickerDialog'),
    LocationSelect: () => import('./location-select'),
    Description: () => import('./description'),
    CategoryInput: () => import('./category-input'),
  },
  props: {
    editType: {
      type: String,
      default: 'Edit',
    },
  },
  data () {
    return {
      title: '',
      location: '',
      description: '',
      categories: [],
      newMeetingTimeObj: {},
    }
  },
  methods: {
    inputDescription (data) {
      this.description = data
    },
    handleComplete () {
      const { countryId } = this.$route.params
      this.$router.push(`/main/${countryId}`)
    },
    updateCategory (event) {
      this.categories = event
    },
    setDate (value) {
      this.newMeetingTimeObj = Object.assign(this.newMeetingTimeObj, value)
    },
  },
}
</script>

<style lang="scss">
.edit {
  & section {
    width: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
  }
  .label {
    font-size: 1.5rem;
    font-weight: bold;
  }
}
</style>
<style lang="scss" scoped>
.btn-complete {
  color: orange;
  font-size: 1.4rem;
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  font-weight: bold;
}

.title {
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;

  input {
    margin-top: 1rem;
    flex: 1;
    border-radius: 6px;
    border: 1px solid #eee;
    padding: 1rem;
    color: black;
  }
}
</style>
