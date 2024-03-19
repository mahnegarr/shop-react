import React from "react";
import { useProducts } from "./context/ProductsContext";
import Card from "./components/Card";

function ProductsPage() {
  const products = useProducts();
  
  return (
    <div className="flex justify-between">
      <div className="w-full flex flex-wrap justify-between">
        {!products.length && <p>Loading ....</p>}
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
