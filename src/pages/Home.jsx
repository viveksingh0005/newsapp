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

    <div className="p-4 sm:p-6">

      <div className="grid gap-6 
                      grid-cols-1 
                      sm:grid-cols-2 
                      lg:grid-cols-3 
                      xl:grid-cols-4">

        {news.map((item, index) => (

          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
          >

            {item.image_url && (
              <img
                src={item.image_url}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
            )}

            <div className="p-4">

              <h2 className="font-bold text-lg mb-2 line-clamp-2">
                {item.title}
              </h2>

              <p className="text-sm text-gray-600 line-clamp-3">
                {item.description}
              </p>

              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-blue-600 font-medium hover:underline"
              >
                Read More →
              </a>

            </div>

          </div>

        ))}

      </div>

    </div>

  )
}