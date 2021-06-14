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
    <section>
      <div class="title">
        <InputText
          is-required
          label-title="안녕"
          warning-message="warinng"
          prefilled-value="제목을 입력해 주세요"
        />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'PosterEdit',
  components: {
    BaseHeader: () => import('~/components/common/header/BaseHeader'),
    InputText: () => import('~/components/common/inputs/inputText'),
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
  padding: 1.5rem 1rem;
}

</style>
