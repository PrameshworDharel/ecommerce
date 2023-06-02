import React from "react";
import { Shop } from "./shop";

const ShopPage=({ datas })=>{
    return(
        <div>
            <Shop datas={datas}/>
        </div>
    )
}
export default ShopPage;