import React from "react";
import { Link } from "react-router-dom";
import { TbListDetails, TbShoppingBagCheck } from "react-icons/tb";
import { shortenText } from "../helpers/helper";

function Card({ data }) {
  const { id, title, image, price } = data;
  return (
    <div className="w-[270px] m-[10px] p-[20px] flex flex-col items-start justify-end bg-[#fff] border-[2px] border-dashed border-[#e2e2e2] rounded-[20px] ">
      <img
        src={image}
        alt={title}
        className="w-[230px] h-[230px] p-[20px] mb-[20px] bg-[#fff] "
      />
      <h3 className="text-[1.1rem] text-[#fe5d42] font-bold">
        {shortenText(title)}
      </h3>
      <p className="text-[#666] text-[0.9rem] font-semibold mt-[10px] mx-0 mb-[30px] ">
        {price} $
      </p>
      <div className="w-full flex justify-between items-center ">
        <Link
          className="text-[1.5rem] h-[25px] text-[#fe5d42] cursor-pointer "
          to={`/products/${id}`}
        >
          <TbListDetails />
        </Link>
        <div>
          <button>
            <TbShoppingBagCheck />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
