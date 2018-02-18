import * as types from './mutation-types'

export const mutations = {
  [types.SET_NEWS] (state, newsPayload) {
    state.news = newsPayload
  },

  [types.SIGN_IN] (state, userPayload) {
    state.user = userPayload
    state.status = 'signin'
  },

  [types.SIGN_OUT] (state) {
    state.user = {}
    state.status = 'signout'
  }
}
