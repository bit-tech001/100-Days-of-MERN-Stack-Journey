// import React from "react";
import "./index.css";
// import Introduction from "./Frontend - Day1/Introduction";
// import Index from "./Frontend - Day2/Index";
// import CounterApp from "./Frontend - Day3/CounterApp";
// import ConditionApp from "./Frontend - Day4/ConditonApp";
// import ProductList from "./Frontend -Day5/ProductList";
// import ProductGrid from "./Frontend -Day5/ProductGrid";
// import ClockApp from "./Fronteend - Day6/ClockApp";
// import Forms from "./Frontend - Day-7/Forms";
// import Lifting from "./Frontend - Day-7/Lifting";
// import TodoApp from "./Frontend -Day8/TodoApp";

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// // import { Home } from 'lucide-react'
// import About from "./Frontend - Day9/About";
// import Contactus from "./Frontend - Day9/Contactus";
// import Product from "./Frontend - Day9/Product";
// import NavBar from "./Frontend - Day9/NavBar";
// // import Home from "./Frontend - Day9/Home";
// import ProductDetails from "./Frontend - Day9/ProductDetails";
// import FetchApp from "./Fontend - Day10/FetchApp";
// import AxiosApp from "./Fontend - Day10/AxiosApp";
// import { ContextApi } from "./Frontend - Day11/ContextApi";

// const App = () => {
//   return (
//     <>
//       {/* <Introduction/>   */}
//       {/* <Index/> */}
//       {/* <CounterApp/> */}
//       {/* <ConditionApp/> */}
//       {/* <ProductGrid/> */}
//       {/* <ClockApp/> */}
//       {/* <Forms/>  */}
//       {/* <Lifting/> */}
//       {/* <TodoApp/> */}
//         {/* <NavBar />

//        <Routes>

//         <Route path="/" element={<Home />} />
//         <Route path="/About" element={<About />} />
//         <Route path="/ContactUs" element={<Contactus />} />
//         <Route path="/Product" element ={<Product/>}/>
//        <Route path="/product/:id/:slug" element={<ProductDetails />} />

//       </Routes> */}
//       {/* <FetchApp/> */}
//       {/* <AxiosApp/> */}

//     </>
//   );
// };

// export default App;

import { MyProvider } from "./Frontend - Day11/Mycontext";
import Child from "./Frontend - Day11/Child";
import Validation from "./Frontend -Day12/Validation";
// import RHF from "./Frontend -Day12/RHF";
import JokesApp from "./component/jokesApp";
import BackList from "./Frontend -Day19/BacList";

const App = () => {
  return (
    //  <MyProvider>
    //   <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6">
        
    //     {/* Container */}
    //     <div className="max-w-5xl w-full bg-white rounded-xl shadow-lg grid grid-cols-1 md:grid-cols-2">

    //       {/* LEFT: Documentation Panel */}
    //       <div className="p-8 border-r">
    //         <h2 className="text-2xl font-semibold text-gray-900 mb-6">
    //           React Context API
    //         </h2>

    //         <ul className="space-y-4 text-gray-700 text-sm leading-relaxed">
    //           <li>
    //             <span className="font-medium text-gray-900">What:</span>  
    //             Context API allows sharing state across multiple components
    //             without passing props manually.
    //           </li>

    //           <li>
    //             <span className="font-medium text-gray-900">Why:</span>  
    //             It prevents prop drilling and improves code maintainability
    //             in medium-scale applications.
    //           </li>

    //           <li>
    //             <span className="font-medium text-gray-900">How:</span>  
    //             Create a context using <code className="bg-gray-100 px-1 rounded">createContext</code>,
    //             wrap components with a Provider, and consume values using{" "}
    //             <code className="bg-gray-100 px-1 rounded">useContext</code>.
    //           </li>

    //           <li>
    //             Common use cases include theme handling, authentication,
    //             localization, and global UI state.
    //           </li>
    //         </ul>
    //       </div>

    //       {/* RIGHT: Live Demo Panel */}
    //       <div className="p-8 flex items-center justify-center bg-gray-50">
    //         <Child />
    //       </div>

    //     </div>
    //   </div>
    // </MyProvider>

    // <Validation/>
    // <RHF/>

    // <JokesApp/>
     <BackList/>
  );
};

export default App;
