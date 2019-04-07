import * as types from './actionTypes'
import newsService from '../../services/news'

export const fetchTopics = () =>
  async dispatch => {
    const news = await newsService.getNews()
    dispatch({ type: types.NEWS_FETCHED, news })
  }
