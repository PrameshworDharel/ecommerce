import React from "react";
import * as Images from "../../assets/photos";
import { TableCard } from "./TableCard";
const tablesArray =[
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
    },
    {
        
        image:Images.TableA,
        title:"Plain console with teak mirror",
        price:"Rs. 25,000.00"
    },
    {
        
        image:Images.TableB,
        title:"Plain console with teak mirror",
        price:"Rs. 25,000.00"
    },
    {
        
        image:Images.TableC,
        title:"Plain console with teak mirror",
        price:"Rs. 25,000.00"
    },
    {
        
        image:Images.TableD,
        title:"Plain console_",
        price:"Rs. 258,200.00"
    },
    {
        
        image:Images.TableE,
        title:"Reclaimed teak Sideboard",
        price:"Rs. 20,000.00"
    },
    {
        
        image:Images.TableF,
        title:"SJP_0825 ",
        price:"Rs. 200,000.00"
    },
    {
        
        image:Images.TableG,
        title:"Plain console with teak mirror",
        price:"Rs. 25,000.00"
    },
    {
        
        image:Images.TableH,
        title:"Bella chair and table",
        price:"Rs. 100,000.00"
    },
    {
        
        image:Images.TableN,
        title:"Granite square side table",
        price:"Rs. 258,800.00"
    },
    {
        
        image:Images.TableI,
        title:"Asgaard sofa",
        price:"Rs. 250,000.00"
    },
    {
        
        image:Images.TableJ,
        title:"Maya sofa three seater",
        price:"Rs. 115,000.00"
    },
    {
    image:Images.TableK,
    title:"Outdoor sofa set",
    price:"Rs. 244,000.00"
    }

];
const Tables =() => {
    return(
        <>
        <div className="grid grid-cols-4 gap-4 p-12">
        {tablesArray.map((tables, index) => {
            const{image,title,price } = tables;
            return (
               <TableCard key={index} src={image} title={title} price={price}/>
            );
        
        })}
        </div> 
        </>
        );
        
    };
    export default Tables;
