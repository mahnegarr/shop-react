import React from "react";
import { FaListUl } from "react-icons/fa";
import { createQueryObject } from "../helpers/helper";

function Sidebar({ setQuery }) {
  const categoryHandler = (event) => {
    const { tagName } = event.target;
    const category = event.target.innerText.toLowerCase();

    if (tagName !== "LI") return;
    setQuery((query) => createQueryObject(query, { category }));
  };
  return (
    <div className="sidebar w-[200px] h-fit m-[10px] p-[20px] ml-[30px] bg-[#fff] border-[2px] border-dashed border-[#e2e2e2] rounded-[20px] ">
      <div className="w-[200px] flex items-center mb-[10px] text-[#fe5d42] font-medium ">
        <FaListUl />
        <p className="ml-[10px]">Categories</p>
      </div>
      <ul onClick={categoryHandler}>
        <li>All</li>
        <li>Electronics</li>
        <li>Jewelery</li>
        <li>Men's Clothing</li>
        <li>women's Clothing</li>
      </ul>
    </div>
  );
}

export default Sidebar;
