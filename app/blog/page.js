'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Blog = () => {
  const [articles, setArticles] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const getArticles = async () => {
    await axios.get(`https://devlerian-article.vercel.app/list`)
      .then((res) => {
        setArticles(res.data.data);
        setIsLoaded(true);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
  
  const listArticles = articles.map((article, i) =>
    <Link href={`/blog/` + article.id } key={i} className="transition duration-150 ease-in-out md:hover:-translate-y-1 hover:bg-slate-50 cursor-pointer flex justify-between gap-5 items-center px-5 py-2 md:px-5 md:py-3 rounded-xl">
      <div className="space-y-2">
        <h2 className="text-base md:text-lg text-gray-900">{article.judul}</h2>
        <div className="space-x-1">
          <span className="text-xs border border-slate-300 text-slate-500 px-2 py-1 rounded-md"><i className="fa-solid fa-calendar-day mr-1" /> {article.tanggal}</span>
          <span className="text-xs bg bg-slate-300 text-slate-700 px-2 py-1 rounded-md">{article.kategori}</span>
        </div>
      </div>
      <button><i className="fa-regular fa-folder-open" /></button>
    </Link>
  )

  useEffect(() => {
    getArticles();
  },[])

  return (
    <div className="bg-white md:pt-20">
      <header className="max-w-3xl container mx-auto p-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
          <div className="flex items-center gap-5">
          <Link href="/"><Image src="/assets/images/profile.jpeg" priority={true} width={500} height={500} className="inline-block w-28 md:w-32 rounded-full" alt="Lerian Febriana, A.Md.Kom" /></Link>
            <div>
              <h2 className="font-bold text-slate-800 text-md md:text-lg">Lerian Febriana, A.Md.Kom</h2>
              <h3 className="text-sm md:text-base text-slate-700">Software Developer 🇮🇩</h3>
            </div>
          </div>
          <div>
            <input type="text" className="border border-slate-200 px-3 py-2 rounded-lg text-sm" placeholder="Searching..." />
          </div>
        </div>
      </header>
      <hr className="block md:hidden" />
      <section className="max-w-3xl text-slate-900 text-base container mx-auto rounded-xl space-y-2 md:space-y-1 p-5">
        {isLoaded ? (
          <div>
            {listArticles.length > 0 ? (
              <div>{listArticles}</div>
            ) : (
              <div className='text-center'>Belum ada artikel.</div>
            )}
          </div>
        ) : (
          <div className="w-full flex flex-col bg-slate-100 rounded-lg animate-pulse p-5 gap-3">
            <div className='flex flex-col gap-3'>
              <div className='w-3/6 h-7 rounded-lg bg-slate-200'></div>
              <div className='flex gap-3'>
                <div className='w-1/6 h-7 rounded-lg bg-slate-200'></div>
                <div className='w-1/6 h-7 rounded-lg bg-slate-200'></div>
              </div>
            </div>
          </div>

        )}
      </section>
    </div>
  )
}

export default Blog