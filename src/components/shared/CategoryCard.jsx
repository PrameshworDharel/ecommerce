import React from "react";
import { Link } from "react-router-dom";

export const CategoryCard = (props) => {
  const { src, title, path } = props;
  return (
    <>
      <div className="pb-20  ">
        <img className="mt-16 " src={src} alt={title}/>     
        <h4 class="text-xl font-bold mt-3 flex ml-16">{title}</h4>
        <Link to={path} className=" ml-16 font-bold border-b-2">View More</Link>
        </div>
    </>

  );
};