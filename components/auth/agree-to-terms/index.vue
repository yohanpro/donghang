<template>
  <section>
    <base-header
      header-title="회원가입하기"
      is-back-button
    />
    <div class="terms-container">
      <div class="terms__agree-all">
        <BaseCheckbox
          :is-checked="isAllChecked"
          @change="checkAll()"
        />
        <p @click="checkAll()">
          모두 동의하기
        </p>
      </div>
      <div class="terms__item-wrapper">
        <div
          v-for="terms in termsAndConditions"
          :key="terms.index"
          class="terms__item"
          @click="checkCondition(terms.index)"
        >
          <BaseCheckbox
            :is-checked="terms.status"
            @change="checkCondition(terms.index)"
          />
          <p><span v-show="terms.required">(필수)</span>{{ terms.title }}</p>
          <img
            class="terms__link-arrow"
            src="~/assets/images/icons/arrow-right-light.svg"
            alt="Go to Terms Arrow"
            @click.self="
              $router.push(`/auth/sign-up/agree-to-terms/${terms.index}`)
            "
          >
        </div>
      </div>
    </div>
    <BottomButton
      button-text="다음"
      button-width="80%"
      :is-disabled="!isAllRequiredFieldChecked"
      @click="handleNext()"
    />
  </section>
</template>

<script>
export default {
  name: 'AgreeToTerms',
  components: {
    BaseHeader: () => import('~/components/common/header/BaseHeader'),
    BottomButton: () => import('~/components/common/buttons/BottomButton'),
    BaseCheckbox: () => import('~/components/common/inputs/BaseCheckbox'),
  },
  data () {
    return {
      termsAndConditions: [
        { index: 1, title: '이용약관', status: false, required: true },
        { index: 2, title: '개인정보 처리방침', status: false, required: true },
      ],
    }
  },
  computed: {
    isAllChecked () {
      const allChecked = this.termsAndConditions.every((terms) => {
        return terms.status === true
      })
      return allChecked
    },
    isAllRequiredFieldChecked () {
      return this.termsAndConditions.every(
        terms => terms.required && terms.status,
      )
    },
  },
  methods: {
    handleNext () {
      this.$router.push('/auth/sign-up/form')
    },
    checkCondition (itemIndex) {
      const targetCondition = this.termsAndConditions.find(
        terms => terms.index === itemIndex,
      )
      targetCondition.status = !targetCondition.status
    },
    checkAll () {
      const newCheckCondition = !this.isAllChecked

      this.termsAndConditions.forEach((terms) => {
        terms.status = newCheckCondition
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.terms-container {
  width: 80%;
  border: 1px solid #ececec;
  border-radius: 4px;
  margin: 8rem auto;
  min-height: 220px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.6rem;
}
.terms {
  &__agree-all {
    width: 100%;
    height: 65px;
    border-bottom: var(--border-light-gray);
    display: flex;
    align-items: center;
    padding: 1rem 2rem;
    p {
      font-size: 1.7rem;
      font-weight: 600;
      margin-left: 1rem;
      flex-grow: 1;
      height: 100%;
      display: flex;
      align-items: center;
    }
  }
  &__item-wrapper {
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 1rem 2rem;
    .terms__item {
      width: 100%;
      display: flex;
      height: 40px;
      align-items: center;
      > p {
        margin-left: 1rem;
        span {
          font-weight: bold;
          margin-right: 0.5rem;
        }
      }
      .terms__link-arrow {
        width: 30px;
        margin-left: auto;
      }
    }
  }
}
</style>
