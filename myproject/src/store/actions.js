import * as types from './mutation-types'

export const setNews = ({commit}, newsPayload) => {
  commit(types.SET_NEWS, newsPayload)
}

export const signIn = ({commit}, userPayload) => {
  commit(types.SIGN_IN, userPayload)
}

export const signOut = ({commit}) => {
  commit(types.SIGN_OUT)
}
