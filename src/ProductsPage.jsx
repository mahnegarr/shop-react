import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useProducts } from "./context/ProductsContext";
import Card from "./components/Card";
import Loader from "./components/Loader";
import { useEffect } from "react";
import {
  filterProducts,
  getInitialQuery,
  searchProducts,
} from "./helpers/helper";
import SearchBox from "./components/SearchBox";
import Sidebar from "./components/Sidebar";

function ProductsPage() {
  const products = useProducts();

  const [displayed, setDisplayed] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setDisplayed(products);

    setQuery(getInitialQuery(searchParams));
  }, [products]);

  useEffect(() => {
    console.log(query);
  }, [query]);

  useEffect(() => {
    setSearchParams(query);
    setSearch(query.search || "");
    let finalProducts = searchProducts(products, query.search);
    finalProducts = filterProducts(finalProducts, query.category);
    setDisplayed(finalProducts);
  }, [query]);

  return (
    <>
      <SearchBox search={search} setQuery={setQuery} setSearch={setSearch} />

      <div className="flex justify-between mx-16">
        <div className="w-full flex flex-wrap justify-between">
          {!displayed.length && <Loader />}
          {displayed.map((p) => (
            <p className="bg-white">
              <Card key={p.id} data={p} />
            </p>
          ))}
        </div>
        <Sidebar query={query} setQuery={setQuery} />
      </div>
    </>
  );
}

export default ProductsPage;
