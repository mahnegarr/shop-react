import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ProductsPage from "./ProductsPage";
import DetailsPage from "./DetailsPage";
import CheckoutPage from "./CheckoutPage";
import PageNotFound from "./404";

function App() {
  return (
    <Routes>
      <Route path="/" to={<Navigate to="/products" replace />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/products/:id" element={<DetailsPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
