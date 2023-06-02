import React,{ useState }from "react";
import { Route, Routes } from "react-router-dom";
import './App.css';
import  Homepage from "./components/home"
import ShopPage from "./components/Shop";
import ContactPage from "./components/Contact";
import LoginPage from "./components/Login";
function App() {
  const [datas, setDatas] = useState([]);
  return (
    <>
      <Routes>
     <Route path="/" element={<Homepage datas={datas} />} />
     <Route  path="/Shop"  element={<ShopPage datas={datas}  />} />
     <Route
            path="/Contact"
            element={<ContactPage datas={datas} setDatas={setDatas} />}
          />
     <Route path="/login" element={<LoginPage />} />
     <Route path="*" element={<>Page Not Found</>} />
      </Routes>
    </>
  )
}

export default App;