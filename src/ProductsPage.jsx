import React from "react";
import { useProducts } from "./context/ProductsContext";
import Card from "./components/Card";
import Loader from "./components/Loader";

function ProductsPage() {
  const products = useProducts();

  return (
    <div className="flex justify-between">
      <div className="w-full flex flex-wrap justify-between">
        {!products.length && <Loader />}
        {products.map((p) => (
          <p className="bg-white">
            <Card key={p.id} data={p} />
          </p>
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;
