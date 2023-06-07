import React from "react";
export const  TableCard= (props) => {
  const { src, title, price} = props;
  return (
    <>
      <div  className="ml-6 mr-6  mb-10">
        <div>
        {src && (
           <img
           src={src}
            alt={title}
            className="w-auto h-[280px] object-contain"
         
          />
        )}
        </div>
        <h4>{title}</h4>
        <h3 className="font-semibold">Rs.{price.toLocaleString("en-US")}</h3>
        </div>
       
    </>

  );
};