import React from "react";
export const  TableCard= (props) => {
  const { src, title, price} = props;
  return (
    <>
      <div  className="ml-6 mr-6  mb-10">
        <div> <img src={src} alt={title} className="h-64 w-64"/>
        </div>
        <h4>{title}</h4>
        <h3 className="font-semibold">{price}</h3>
        </div>
       
    </>

  );
};