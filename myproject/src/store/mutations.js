import * as types from './mutation-types'

export const mutations = {
  [types.CREATE_NEWS] (state, news_payload) {
    state.news = news_payload
  }
}
