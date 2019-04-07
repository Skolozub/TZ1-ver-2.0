import axios from 'axios'

const url = 'https://newsapi.org/v2/'
const apiKey = '7fd45e35dc9349c8ad721a77101089d6'

class newsService {
  getNews = async () => {
    const queryLink = `${url}top-headlines?sources=bbc-news&apiKey=${apiKey}`
    const response = await axios.get(queryLink)

    if (response.data.status !== 'ok') {
      throw new Error(`newsService getNews() failed, HTTP status ${response.status}`)
    }

    const { articles, totalResults } = response.data

    return { articles, totalResults }
  }
}

export default new newsService()
