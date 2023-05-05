import React from "react";
import {Routes,Route, Navigate} from 'react-router-dom'
import Home from "../Pages/Home";
import About from "../Pages/About";
import Packages from "../Pages/packages";
import ContactUs from "../Pages/contact";
import Search from "../Pages/search";


const Routers = () => {
  return (
    <Routes>
        <Route path = '/' element={<Navigate to= '/home'/>} />
        <Route path="/home"  element={<Home/>}/>
        <Route path="/about"  element={<About/>}/>
        <Route path="/packages"  element={<Packages/>}/>
        <Route path="/contact"  element={<ContactUs/>}/>
        <Route path="/search"  element={<Search/>}/>
    </Routes>
  )
    
};

export default Routers;