import Link from 'next/link'
import React from 'react'

const ProductWithId = ({ params }) => {
  return (
    <div>
      <Link href='/'>Kembali</Link>
      <h2>Product {params.id}</h2>
    </div>
  )
}

export default ProductWithId