import React from "react";
import { Route, Routes } from "react-router-dom";
import './App.css';
import  Homepage from "./components/home"
import ShopPage from "./components/Shop";

function App() {
  return (
    <>
      <Routes>
     <Route path="/" element={<Homepage />} />
     <Route path="/Shop" element={<ShopPage />} />
      </Routes>
    </>
  )
}

export default App;