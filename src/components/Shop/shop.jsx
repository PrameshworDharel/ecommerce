import React from "react";
import Rectangle4 from "../../assets/photos/Rectangle16.png";
import { ReactComponent as MeubelIcon } from "../../assets/icons/A.svg";
import { ReactComponent as ArrowIcon } from "../../assets/icons/arrow.svg";
import { ReactComponent as MenuIcon } from "../../assets/icons/menu.svg";
import { ReactComponent as VectorIcon} from "../../assets/icons/vector.svg";
import { ReactComponent as VlineIcon} from "../../assets/icons/vline.svg";
import Tables from  "../Shop/Tables"
export const Shop = () => {
  return (
    <>
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
      <div className="bg-seventh flex justify-between p-5 font-semibold">
        <div className="flex ml-9 gap-5">
         <MenuIcon className="h-[80%]"/>
        <h3  className="mt-3">Filter</h3>
        <VectorIcon className="h-[80%]"/>
        <VlineIcon  className="h-[80%]"/>
        <h3 className="mt-3">Showing 1–16 of 32 results</h3>
        </div>
<div className="flex mr-16 gap-6">
  <h3 className="mt-3">Show</h3>
  <button className=" border text-fourth bg-primary  border-primary px-3 py-2">16</button>
  <h3 className="mt-3">Short by</h3>
  <button className="border text-fourth bg-primary  border-primary px-8 py-4 ">Default</button>
</div>
      </div>
    </div>
  
    <Tables/>
    <div className="flex justify-center gap-6 mb-12">
      <button className="border bg-secondary border-secondary px-3">1</button>
      <button className="border bg-fifth  border-fifth px-3">2</button>
      <button className="border bg-fifth  border-fifth px-3">3</button>
      <button className="border bg-fifth border-fifth px-4 py-2 b-16">Next</button>
    </div>
    <div className="bg-Tertiary flex justify-between p-16">
      <div>
        <h1 className=" text-2xl font-semibold"> Free Delivery</h1>
          <p className="text-fourth"><small>For all oders over $50, consectetur
            <br></br> adipim scing elit.</small></p>
      </div>
      <div>
      <h1 className=" text-2xl font-semibold">90 Days Return </h1>
          <p className="text-fourth"><small>If goods have problems, consectetur <br></br> adipim scing elit.</small></p>
      </div>
      <div>
      <h1 className=" text-2xl font-semibold">Secure Payment </h1>
          <p className="text-fourth"><small>100% secure payment, consectetur <br></br> adipim scing elit.</small></p>
      </div>

    </div>
    </>
  );
};
