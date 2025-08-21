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



function App() {
  return (
    <>

      <Routes>
   
            {/* routes for rest layouts */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path= "product" element={<Product/>}/>
          <Route path="productDetails/:id" element={<ProductDetails/>}/>
          <Route path="shop" element={<Shop/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="blogs" element={<Blogs/>}/>
          <Route path="cart" element={<Cart/>}/>

        </Route>


      
       {/* routes for login and logout  */}
      
        <Route path="login" element={<LoginForm />} />
        <Route path="signup" element={<SignupForm />} />
      </Routes>
    
    </>
  );
}

export default App;