import Link from 'next/link'
import React from 'react'

const Page = () => {
  return (
    <div>
      <h2>Daftar Produk:</h2>
      <ul>
        <li><Link href='/product/kerupuk'>Kerupuk</Link></li>
        <li><Link href='/product/kue'>Kue</Link></li>
      </ul>
    </div>
  )
}

export default Page