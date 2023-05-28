import React from "react";
import { Route, Routes } from "react-router-dom";
import './App.css';
import ShopPage from "./components/Shop";

function App() {
  return (
    <>
      <Routes>
        <Route path="/shop" element={<ShopPage/>}>
     </Route>

      </Routes>
    </>
  )
};
export default App