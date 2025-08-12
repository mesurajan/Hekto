import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/home/Home";
import LoginForm from './pages/login';
import SignupForm from './pages/signup';


function App() {
  return (
    <>

      <Routes>

            {/* routes for rest layouts */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path="products" element={<div>THis is all product page</div>} />
        </Route>

       {/* routes for login and logout  */}
      
        <Route path="login" element={<LoginForm />} />
        <Route path="signup" element={<SignupForm />} />
      </Routes>
    
    </>
  );
}

export default App;