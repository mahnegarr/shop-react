import React from "react";
import { RotatingLines } from "react-loader-spinner";

function Loader() {
  return (
    <div className="w-full text-center mt-[100px] h-[1000px] ">
      <RotatingLines width="100px" height="100px" strokeWidth="3" strokeColor="#fe5d42" />
    </div>
  );
}

export default Loader;
