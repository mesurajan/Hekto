// src/App.jsx
import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/home/Home";
import LoginForm from './pages/auth/login';
import SignupForm from './pages/auth/signup';
import Product from './pages/products/product';
import ProductDetails from './pages/products/productDetails';
import Shop from './pages/shop';
import Contact from "./pages/Contact";
import Blogs from "./pages/Blogs";
import Cart from './pages/products/Cart'; 
import ProtectedRoute from './components/ProtectedRoute'; // import your protected route
import WhishList from './pages/products/WhishList';


function App() {
  return (
    <Routes>
      {/* routes for general layout */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home/>} />
        <Route path="product" element={<Product/>}/>
        <Route path="productDetails/:id" element={<ProductDetails/>}/>
        <Route path="shop" element={<Shop/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="blogs" element={<Blogs/>}/>
        
        {/* Protected route */}
        <Route path="cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
        <Route path="wishlist" element={<ProtectedRoute><WhishList /></ProtectedRoute>} />
      </Route>

      {/* routes for login and signup */}
      <Route path="login" element={<LoginForm />} />
      <Route path="signup" element={<SignupForm />} />
    </Routes>
  );
}

export default App;
