import React from 'react'
// import * as Images from "../../assets/photos";
import ToppicksCard from "../shared/ToppicksCard";
import { Link } from "react-router-dom";
// const toppicksArray =[
//     {
//         image:Images.Sofa2,
//         title:"Trenton modular sofa_3",
//         price:"Rs. 25,000.00"
//     },
//     {
//         image:Images.Table2,
//         title:"Granite dining table with dining chair",
//         price:"Rs. 25,000.00"
//     },
//     {
        
//         image:Images.Table3,
//         title:"Outdoor bar table and stool",
//         price:"Rs. 25,000.00"
//     },
//     {
        
//         image:Images.Mirror1,
//         title:"Plain console with teak mirror",
//         price:"Rs. 25,000.00"
//     }

// ];
const TopPicks = ({ datas }) => {
  return (
    <>
      <div className="container py-14">
        <h3 className="text-title text-content-primary text-center">
          Top Picks For You
        </h3>
        <p className="text-body text-content-secondary text-center ">
          Find a bright ideal to suit your taste with our great selection of
          suspension, floor and table lights.
        </p>
        <div className="mt-16 grid grid-cols-4 gap-8 pb-16">
          {datas.map((item) => {
            return (
              <ToppicksCard
                key={item.id}
                id={item.id}
                src={item.image}
                title={item.title}
                price={item.price}
              />
            );
          })}
        </div>
        <div className="flex justify-center">
          <Link to="/shop" className="text-subtitle link-btn">
            View More
          </Link>
        </div>
      </div>
    </>
  );
};
export default TopPicks;