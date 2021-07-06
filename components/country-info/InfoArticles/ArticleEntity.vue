<template>
  <article
    class="article"
    @click="goToArticleDetail"
  >
    <div class="writer">
      <img
        class="writer__profile-image"
        :src="articleObj.writer_detail.profile_pic_bi.url"
      >
    </div>
    <div class="article__content">
      <p class="article__title">
        {{ shortenText(articleObj.title, 22) }}
      </p>
      <p class="article__description">
        {{ articleObj.content }}
      </p>

      <div class="article__tags">
        <p
          v-for="tag in articleObj.tags"
          :key="tag"
        >
          #{{ tag }}&nbsp;
        </p>
      </div>
    </div>
    <div class="article__recruit-status font-weight-bold">
      <p>{{ getArticleStatus(articleObj.status) }}</p>
      <p>
        <span>
          {{ articleObj.applied_user_count }} /
          {{ articleObj.expecting_user_count }}
        </span>
      </p>
    </div>
  </article>
</template>

<script>
import { shortenText } from '~/utils/helplers'
import { getArticleStatus } from '~/utils/main-aritcle-helper'

export default {
  name: 'ArticleEntity',
  props: {
    articleObj: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    shortenText,
    getArticleStatus,
    goToArticleDetail () {
      const { country, id } = this.articleObj
      this.$router.push(`/main/${country}/${id}`)
    },
  },
}
</script>

<style lang="scss" scoped>
.writer {
  width: 25%;
  display: flex;
  align-items: center;
  margin-right: 1rem;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;

  &__profile-image {
    width: 100%;
    height: auto;
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, 0.2);
  }
}
.article {
  width: 100%;
  height: 13rem;
  background-color: #fff;
  padding: 1rem;
  box-shadow: 0px 0px 1px rgb(123 123 222 / 24%),
    0px 1px 1px rgb(22 32 73 / 48%);
  margin-bottom: 1rem;
  border-radius: 10px;
  border: none;
  display: flex;
  &__title {
    font-size: 1.3rem;
    font-weight: 500;
    font-family: 'Khn-heading';
  }
  &__content {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  &__description {
    font-size: 1.1rem;
    margin-top: 1rem;
  }
  &__recruit-status {
    padding: 1rem 1.1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.25rem;
    margin-right: -1rem;
    font-family: 'Khn-heading';
    > p > span {
      font-size: 1em;
      color: $greeny-blue;
    }
  }

  &__tags {
    margin-top: auto;
    color: $greeny-blue;
    font-size: 1.2rem;
    font-weight: bold;
    display: flex;
    align-items: center;

  }
}
</style>
