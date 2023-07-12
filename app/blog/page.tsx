import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Blog = () => {
  return (
    <div className="bg-white md:pt-20">
      <header className="max-w-3xl container mx-auto p-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
          <div className="flex items-center gap-5">
            <a href="./index.html"><Image src="/assets/images/profile.jpeg" width={500} height={500} className="inline-block w-28 md:w-32 rounded-full" alt="Lerian Febriana, A.Md.Kom" /></a>
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
        <Link href="/blog/satu" className="transition duration-150 ease-in-out md:hover:-translate-y-1 hover:bg-slate-50 cursor-pointer flex justify-between gap-5 items-center px-5 py-2 md:px-5 md:py-3 rounded-xl">
          <div className="space-y-2">
            <h2 className="text-base md:text-lg">Cara Hosting di cPanel</h2>
            <div className="space-x-1">
              <span className="text-xs border border-slate-300 text-slate-500 px-2 py-1 rounded-md"><i className="fa-solid fa-calendar-day mr-1" /> 23 April 2023</span>
              <span className="text-xs bg bg-slate-300 text-slate-700 px-2 py-1 rounded-md">DevOps</span>
            </div>
          </div>
          <button><i className="fa-regular fa-folder-open" /></button>
        </Link>
      </section>
    </div>
  )
}

export default Blog