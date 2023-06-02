import React from "react";
 import{Link, useLocation} from "react-router-dom";
import {ReactComponent as ProfileIcon}  from"../assets/icons/profile.svg";
import {ReactComponent as SearchIcon}  from"../assets/icons/search.svg";
import {ReactComponent as LoveIcon}  from"../assets/icons/love.svg";
import {ReactComponent as ShopIcon}  from"../assets/icons/shop.svg";
const Navbar= () => {
const location = useLocation();

    return (
       <>
     
        <div class={`${location.pathname === "/" ? "bg-secondary" : ""}`}>
         <header class="flex" >
             <ul class="flex justify-center mb-8 gap-10 w-[50%] mt-3">
                  <Link
                 to="/" >
                   Home
                   </Link> 
                  <Link
                 to="/shop" >
                   Shop
                   </Link>                
                   <li>About</li>
                   <Link to ="/contact">Contact</Link>
                   <Link to ="/login">Login</Link>
                   </ul>
                   <div class="flex justify-end gap-10 w-[50%] mr-8 mt-3">
         <ProfileIcon/>
         <SearchIcon/>
         <LoveIcon/>
         <ShopIcon/>
         </div>
        </header>
        </div>
       </>
    )
};
export default Navbar;