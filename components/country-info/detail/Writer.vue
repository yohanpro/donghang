<template>
  <div class="writer-container">
    <p class="tag bg-gray-50 w-max pl-2 pr-2">
      {{ detailObj.tag }}
    </p>
    <div class="writer">
      <div class="writer-image-container">
        <img
          :src="detailObj.writer_detail.profile_pic_bi.url"
          alt="Writer image"
        >
      </div>
      <div class="writer__detail">
        <p class="writer__detail__nickname">
          {{ detailObj.writer_detail.nick_name }}
        </p>
        <p class="writer__detail__current-state">
          {{ getTimeDiff(detailObj.create_dt) }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>

import { getTimeDiff } from '~/utils/dateHelpers'

export default {
  name: 'DetailWriter',
  props: {
    detailObj: {
      type: Object,
      default: () => {},
      required: true,
    },
  },
  methods: {
    getTimeDiff,

  },
}
</script>

<style lang="scss" scoped>
.writer {
  width: 100%;
  display: flex;
  align-items: center;

  &-image-container {
    width: 4rem;
    height: 4rem;
    max-width: 50px;
    border: 1px solid #ccc;
    border-radius: 50%;
    overflow: hidden;
    & > img {
      width: 100%;
    }
  }
  &-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 1rem 0.5rem;
    border-bottom: 1px solid #ececec;
    .tag {
      margin-bottom: 1rem;
    }
  }

  &__detail {
    margin-left: 1rem;
    &__nickname {
      font-size: 1.3rem;
    }
    &__current-state {
      color: #ccc;
    }
  }
}
</style>
