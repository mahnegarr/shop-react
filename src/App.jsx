import { Navigate, Route, Routes } from "react-router-dom";
import ProductsPage from "./ProductsPage";
import DetailsPage from "./DetailsPage";
import CheckoutPage from "./CheckoutPage";
import PageNotFound from "./404";
import ProductsProvider from "./context/ProductsContext";
import  CartProvider from "./context/CartContext";
import "./style.css";

function App() {
  return (
    <CartProvider>
      <ProductsProvider>
        <Routes>
          <Route path="/" to={<Navigate to="/products" replace />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<DetailsPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </ProductsProvider>
    </CartProvider>
  );
}

export default App;
