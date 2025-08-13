import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/home/Home";
import LoginForm from './pages/auth/login';
import SignupForm from './pages/auth/signup';
import Product from './pages/products/product'
import ProductDetails from './pages/products/productDetails'
import LatestProduct from "./pages/home/Sliders/LatestProduct";
function App() {
  return (
    <>

      <Routes>

            {/* routes for rest layouts */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path= "product" element={<Product/>}/>
          <Route path="productDetails/:id" element={<ProductDetails/>}/>
          <Route path="LatestProduct" element={<LatestProduct/>}/>
        </Route>


      
       {/* routes for login and logout  */}
      
        <Route path="login" element={<LoginForm />} />
        <Route path="signup" element={<SignupForm />} />
      </Routes>
    
    </>
  );
}

export default App;