import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Sofa from './components/home/Sofa';
import Blogs from './components/home/Blogs';
import { BrowserRouter } from 'react-router-dom';
import Instragram from './components/home/Instragram';
import Footer from './components/footer';
import Seater from './components/home/Seater';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar/>
    <Seater/>
    <Main/>
    <Sofa/>
    <Blogs/>
    <Instragram/>
    <Footer/>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);

