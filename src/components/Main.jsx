
import React from "react";
import Categories from "./home/Categories";
import Toppicks from "./home/Toppicks";
const Main = (props) => {
    
  return (
    <>
   <Categories />
   <Toppicks {...props}/>
  </>
  )
};

export default Main

