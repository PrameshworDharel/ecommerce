import React from "react";
import { Shop } from "./shop";
import ShopDetails from "./ShopDetails";

const ShopPage = (props) => {
  return (
    <div>
      <Shop {...props} />
      <ShopDetails/>
    </div>
  );
};
export default ShopPage;
