import React from "react";
import { useProducts } from "./context/ProductsContext";

function ProductsPage() {
  const products = useProducts();
  console.log(products);
  return (
    <div className="flex justify-between">
      <div className="w-full flex flex-wrap justify-between">
        {products.map((p) => (
          <p className="bg-white" key={p.id}>
            {p.title}
          </p>
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;
