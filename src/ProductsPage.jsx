import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ImSearch } from "react-icons/im";
import { FaListUl } from "react-icons/fa";
import { useProducts } from "./context/ProductsContext";
import Card from "./components/Card";
import Loader from "./components/Loader";
import { useEffect } from "react";
import {
  createQueryObject,
  filterProducts,
  getInitialQuery,
  searchProducts,
} from "./helpers/helper";

function ProductsPage() {
  const products = useProducts();

  const [displayed, setDisplayed] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setDisplayed(products);

    setQuery(getInitialQuery(search));
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

  const searchHandler = () => {
    setQuery((query) => createQueryObject(query, { search }));
  };

  const categoryHandler = (event) => {
    const { tagName } = event.target;
    const category = event.target.innerText.toLowerCase();

    if (tagName !== "LI") return;
    setQuery((query) => createQueryObject(query, { category }));
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search ..."
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
        />
        <button onClick={searchHandler}>
          <ImSearch />
        </button>
      </div>
      <div className="flex justify-between">
        <div className="w-full flex flex-wrap justify-between">
          {!displayed.length && <Loader />}
          {displayed.map((p) => (
            <p className="bg-white">
              <Card key={p.id} data={p} />
            </p>
          ))}
        </div>
        <div>
          <div>
            <FaListUl />
            <p>Categories</p>
          </div>
          <ul onClick={categoryHandler}>
            <li>All</li>
            <li>Electronics</li>
            <li>Jewelery</li>
            <li>Men's Clothing</li>
            <li>women's Clothing</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default ProductsPage;
