import React from 'react'
import {useProducts} from "./context/ProductsContext"

function ProductsPage() {
  const products = useProducts();
  console.log(products);
  return (
    <div>
        products page
    </div>
  )
}

export default ProductsPage