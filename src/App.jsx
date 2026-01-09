import React from "react";
import "./index.css";
import Introduction from "./Frontend - Day1/Introduction";
import Index from "./Frontend - Day2/Index";
import CounterApp from "./Frontend - Day3/CounterApp";
import ConditionApp from "./Frontend - Day4/ConditonApp";
import ProductList from "./Frontend -Day5/ProductList";
import ProductGrid from "./Frontend -Day5/ProductGrid";
import ClockApp from "./Fronteend - Day6/ClockApp";
import Forms from "./Frontend - Day-7/Forms";
import Lifting from "./Frontend - Day-7/Lifting";
import TodoApp from "./Frontend -Day8/TodoApp";

import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Home } from 'lucide-react'
import About from "./Frontend - Day9/About";
import Contactus from "./Frontend - Day9/Contactus";
import Product from "./Frontend - Day9/Product";
import NavBar from "./Frontend - Day9/NavBar";
import Home from "./Frontend - Day9/Home";
import ProductDetails from "./Frontend - Day9/ProductDetails";
import FetchApp from "./Fontend - Day10/FetchApp";
import AxiosApp from "./Fontend - Day10/AxiosApp";

const App = () => {
  return (
    <>
      {/* <Introduction/>   */}
      {/* <Index/> */}
      {/* <CounterApp/> */}
      {/* <ConditionApp/> */}
      {/* <ProductGrid/> */}
      {/* <ClockApp/> */}
      {/* <Forms/>  */}
      {/* <Lifting/> */}
      {/* <TodoApp/> */}
        {/* <NavBar />

        
       <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/ContactUs" element={<Contactus />} />
        <Route path="/Product" element ={<Product/>}/>
       <Route path="/product/:id/:slug" element={<ProductDetails />} />


      </Routes> */}
      <FetchApp/>
      {/* <AxiosApp/> */}
      

      
    </>
  );
};

export default App;
