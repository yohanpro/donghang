import { MAIN_ARTICLE_STATUS } from '~/config/constants'

export const getArticleStatus = (status) => {
  switch (status) {
    case MAIN_ARTICLE_STATUS.RECRUITING:
      return '모집 중'
    case MAIN_ARTICLE_STATUS.FINISHED:
      return '마감'
    case MAIN_ARTICLE_STATUS.DELETED:
      return '삭제됨'
    default:
      return ''
  }
}
