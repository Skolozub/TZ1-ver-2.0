import * as types from './actionTypes'

const initialState = {
  news: {},
}

export const newsList = (state = initialState, action = {}) => {
  switch (action.type) {
  case types.NEWS_FETCHED:
    return  { news: action.news }

  default:
    return state
  }
}
