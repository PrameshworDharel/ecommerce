import React from "react";
import { Route, Routes } from "react-router-dom";
import './App.css';
import  Homepage from "./components/home"
import ShopPage from "./components/Shop";
import ContactPage from "./components/Contact";

function App() {
  return (
    <>
      <Routes>
     <Route path="/" element={<Homepage />} />
     <Route path="/Shop" element={<ShopPage />} />
     <Route path="/Contact" element={<ContactPage />} />
      </Routes>
    </>
  )
}

export default App;