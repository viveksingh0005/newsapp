import axios from "axios"

const API_KEY = import.meta.env.VITE_NEWS_API_KEY

const API_URL = `https://newsdata.io/api/1/latest?apikey=${API_KEY}`

export const getNews = async () => {

  const response = await axios.get(API_URL)

  return response.data.results
}