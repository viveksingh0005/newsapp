import React, { useEffect, useState } from "react"
import { getNews } from "../services/NewsApi"

export default function Home() {

  const [news, setNews] = useState([])

  useEffect(() => {

    const fetchNews = async () => {
      const data = await getNews()
      setNews(data)
    }

    fetchNews()

  }, [])

  return (

    <div className="grid grid-cols-3 gap-6 p-6">

      {news.map((item, index) => (

        <div key={index} className="bg-white rounded-lg shadow p-4">

          <img src={item.image_url} alt="" />

          <h2 className="font-bold mt-2">
            {item.title}
          </h2>

          <p className="text-sm">
            {item.description}
          </p>

          <a href={item.link} target="_blank">
            Read More
          </a>

        </div>

      ))}

    </div>

  )
}