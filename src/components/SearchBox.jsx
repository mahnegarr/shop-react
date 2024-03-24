import React from "react";
import { ImSearch } from "react-icons/im";
import { createQueryObject } from "../helpers/helper";

function SearchBox({ search, setSearch, setQuery }) {
  const searchHandler = () => {
    setQuery((query) => createQueryObject(query, { search }));
  };
  return (
    <div className="mt-4 mb-[50px] ml-20 ">
      <input
        type="text"
        placeholder="Search ..."
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
        className="border-[2px] border-dashed border-[#fe5d42] p-[10px] w-[250px] text-[0.9rem] text-[#fe5d42] rounded-[10px] mr-[10px] focus:outline-none "
      />
      <button
        onClick={searchHandler}
        className="p-[10px] text-[1rem] bg-[#fe5d42] text-[#fff] border-none rounded-[10px] cursor-pointer "
      >
        <ImSearch />
      </button>
    </div>
  );
}

export default SearchBox;
