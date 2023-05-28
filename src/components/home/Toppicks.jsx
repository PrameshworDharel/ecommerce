import React from 'react'
import * as Images from "../../assets/photos";
import { ToppicksCard } from "../shared";
const toppicksArray =[
    {
        image:Images.Sofa2,
        title:"Trenton modular sofa_3",
        price:"Rs. 25,000.00"
    },
    {
        image:Images.Table2,
        title:"Granite dining table with dining chair",
        price:"Rs. 25,000.00"
    },
    {
        
        image:Images.Table3,
        title:"Outdoor bar table and stool",
        price:"Rs. 25,000.00"
    },
    {
        
        image:Images.Mirror1,
        title:"Plain console with teak mirror",
        price:"Rs. 25,000.00"
    }

];
const Toppicks =() => {
    return(
        <>
        <div className='text-center mt-6'>
       <h1 className=' font-semibold text-2xl '>Top Picks For You</h1>
       <p class="text-fourth"><small>Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</small></p>
        </div>
        <div class="flex ">
           {toppicksArray.map((toppicks, index) => {
                const{image,title,price } = toppicks;
                return (
                   <ToppicksCard key={index} src={image} title={title} price={price}/>
                );
            
            })}
             
            </div>
<div className='text-center'>
            <button className=" border-b-2 mb-16">View More</button>
            </div>
            </>
        );
        
};
export default Toppicks;
