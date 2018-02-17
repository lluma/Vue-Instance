import * as types from './mutation-types'

export const createNews = ({commit}, news_payload) => {
  commit(types.CREATE_NEWS, news_payload)
}
