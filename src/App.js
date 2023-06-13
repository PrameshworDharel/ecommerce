import React,{useEffect, useState }from "react";
import { Route, Routes } from "react-router-dom";
import './App.css';
import  Homepage from "./components/home"
import ShopPage from "./components/Shop";
import ContactPage from "./components/Contact";
import LoginPage from "./components/Login";
import { fetchShopsItems } from "./components/utils/shopsApiActions";
import ShopDetails from "./components/Shop/ShopDetails";

function App() {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    // (async () => {
    //   const data = await fetchShopsItems();
    //   console.log(data);
    //   setDatas(data);
    // })();
    fetchShopsItems(setDatas);
  }, []);
  return (
    <>
      <Routes>
     <Route path="/" element={<Homepage datas={datas} />} />
     <Route path="/shop">
            <Route index element={<ShopPage datas={datas} />} />
            <Route path=":shopId" element={<ShopDetails />} />
          </Route>
     <Route
            path="/Contact"
            element={<ContactPage datas={datas} setDatas={setDatas} />}
          />
     <Route path="/login" element={<LoginPage />} />
     <Route path="*" element={<>Page Not Found</>} />
      </Routes >                                                   
    </>
  )
}

export default App;