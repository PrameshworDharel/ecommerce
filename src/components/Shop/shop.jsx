import React from "react";
import Rectangle4 from "../../assets/photos/Rectangle16.png";
import { ReactComponent as MeubelIcon } from "../../assets/icons/A.svg";
import { ReactComponent as ArrowIcon } from "../../assets/icons/arrow.svg";
export const Shop = () => {
  return (
    <div>
      <img src={Rectangle4} alt="rectangle"></img>
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div>
        <MeubelIcon className="w-[90%]" />
        <h1 className="font-semibold text-4xl ml-2 mb-2">Shop</h1>
        <div className="flex gap-2">
        <h4 className="font-bold">Home</h4>
        <ArrowIcon className="mt-2" />
        <h4>Shop</h4>
        </div>
       
        </div>
        
      </div>
    </div>
  );
};
