'use client'

import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import axios from 'axios'

const ProductWithId = ({ params }) => {

  const [articles, setArticles] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const getArticles = async () => {
    await axios.get(`https://devlerian-article.vercel.app/list/${params.id}`)
      .then((res) => {
        setArticles(res.data.data);
        setIsLoaded(true);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  const listArticles = articles.map((article, i) =>
    <section key={i} className="max-w-3xl text-slate-900 text-base container mx-auto rounded-xl p-5">
      <h2 className="text-4xl font-bold text-slate-900 mb-4">{article.judul}</h2>
      <div className="flex gap-2 mb-3">
        <span className="text-xs border border-slate-300 text-slate-500 px-2 py-1 rounded-md"><i className="fa-solid fa-calendar-day mr-1" /> {article.tanggal}</span>
        <span className="text-xs bg bg-sky-300 text-sky-700 px-2 py-1 rounded-md">{article.kategori}</span>
      </div>
      <div className="mt-8 text-slate-700 leading-loose" dangerouslySetInnerHTML={{ __html: article.text }}></div>
    </section>
  )

  useEffect(() => {
    getArticles();
  }, [])

  return (
    <div className="bg-white md:pt-20">
      <header className="max-w-3xl container mx-auto p-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div className="flex items-center gap-5">
            <Link href="/blog" className="text-gray-800">
              <i className="fa-solid fa-chevron-left" />
            </Link>
            <Link href="/"><Image src="/assets/images/profile.jpeg" width={500} height={500} priority={true} className="inline-block h-16 w-16 rounded-full" alt="Lerian Febriana, A.Md.Kom" /></Link>
            <div>
              <h2 className="font-bold text-slate-800 text-base">Lerian Febriana, A.Md.Kom</h2>
              <h3 className="text-sm md:text-base text-slate-700">Software Developer 🇮🇩</h3>
            </div>
          </div>
        </div>
      </header>
      {listArticles}
    </div>
  )
}

export default ProductWithId