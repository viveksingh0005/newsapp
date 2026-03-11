import React, { useEffect, useState } from "react"
import axios from "axios"

export default function Tech() {

  const [news, setNews] = useState([])

  useEffect(() => {

    const fetchTech = async () => {

      const res = await axios.get(
        "https://newsdata.io/api/1/latest?apikey=pub_27bf60823261417280af9dc5bc51989d&q=tech"
      )

      setNews(res.data.results)

    }

    fetchTech()

  }, [])

  return (

    <div className="p-6 grid grid-cols-3 gap-6">

      {news.map((item, index) => (

        <div key={index} className="bg-white rounded-lg shadow p-4">

          <img src={item.image_url} alt="" />

          <h2 className="font-bold mt-2">
            {item.title}
          </h2>

          <p className="text-sm">
            {item.description}
          </p>

          <a
            href={item.link}
            target="_blank"
            className="text-blue-600"
          >
            Read Full Article
          </a>

        </div>

      ))}

    </div>

  )
}