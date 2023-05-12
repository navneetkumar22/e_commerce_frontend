import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Footer from "./components/Footer";
import AdminPage from "./components/AdminPage";
import Header from "./components/Header";
import AdminAddProduct from "./components/AdminAddProduct";
import AdminUpdateProduct from "./components/AdminUpdateProduct";
import Cart from "./components/Cart";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/admin' element={<AdminPage />} />
        <Route path='/admin/addproduct' element={<AdminAddProduct />} />
        <Route path='/admin/updateproduct/:id' element={<AdminUpdateProduct />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;