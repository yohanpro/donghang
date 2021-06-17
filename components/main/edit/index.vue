<template>
  <div class="edit">
    <base-header
      header-title="새 글 작성"
      is-back-button
    >
      <div slot="header-right">
        <button class="btn-complete">
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

    <section class="date">
      <div class="label">
        일시
        <span class="required">*</span>
      </div>
      <DatePickerDialog />
    </section>

    <section class="location">
      <div class="label">
        장소
      </div>

      <div class="location-map">
        구글맵이 들어가요
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'PosterEdit',
  components: {
    BaseHeader: () => import('~/components/common/header/BaseHeader'),
    DatePickerDialog: () => import('./date-time-picker/DatepickerDialog'),
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
    }
  },
}
</script>

<style lang="scss" scoped>

section {
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
}
.edit {
  .label {
    font-size: 1.5rem;
    font-weight: bold;
    padding-left: 0.5rem;
  }
}
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
.location-map{
  width: calc(100% - 1.5rem);
  margin: 1rem auto;
  height: 20vh;
  min-height: 200px;
  border: 1px solid #ccc;
  border-radius: 8px;
}
</style>
