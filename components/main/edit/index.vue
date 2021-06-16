<template>
  <div>
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
      <div class="title__label">
        제목
        <span class="required">*</span>
      </div>
      <input
        type="text"
        maxlength="15"
        placeholder="제목을 입력하세요"
      >
    </section>
  </div>
</template>

<script>
export default {
  name: 'PosterEdit',
  components: {
    BaseHeader: () => import('~/components/common/header/BaseHeader'),
  },
  props: {
    editType: {
      type: String,
      default: 'Edit',
    },
  },
}
</script>

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

  &__label {
    font-size: 1.5rem;
    font-weight: bold;
    padding-left: 0.5rem;
  }

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
