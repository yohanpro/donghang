<template>
  <section class="category">
    <div class="label">
      카테고리
      <span class="required">*</span>
    </div>
    <v-select
      :items="items"
      :menu-props="{ maxHeight: '400' }"
      multiple
      hint="카테고리를 설정하세요. (최대 3개)"
      persistent-hint
      @input="limiter"
      @change="handleCategoryChange"
    />
  </section>
</template>

<script>
import { getCategoryItem } from '~/utils/helplers'
import { CATEGORY_ITEMS } from '~/config/constants'

export default {
  name: 'CategoryInput',
  data () {
    return {
      items: getCategoryItem(),
    }
  },
  methods: {
    limiter (e) {
      if (e.length > 3) {
        alert('최대 3개까지 입니다', e)
        e.pop()
      }
    },
    handleCategoryChange (events) {
      const catergoryCodeName = events.map(event => CATEGORY_ITEMS.find(item => item.name === event).index)
      this.$emit('category-update', catergoryCodeName)
    },
  },
}
</script>

<style lang="scss" scoped>
::v-deep .v-list-item__content .v-list-item__title {
  font-size: 1.3rem;
}
::v-deep .v-select .v-select__selection {
  font-size: 1.2rem;
  font-weight: bold;
  color: var(--aqua-blue);
}
.category {
  width: 100%;
}
</style>
