import { useState } from 'react'
import { Navigate, Route, Router, Routes } from 'react-router-dom';
import ProductsPage from './ProductsPage'



function App() {


  return (
    <Routes>
      <Route path="/" to={<Navigate to="/products" replace />} />
      <Route path='/products' element={<ProductsPage />} />
      <Route path='/products/:id' element={<ProductsPage />} />
    </Routes>
  )
}

export default App
