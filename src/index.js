// import CategoryPage from "./pages/CategoryPage";
// import Cart from "./pages/Cart";
// import Home from "./pages/Home";
// // import Login from "./pages/Login";
// import ProductPage from "./pages/ProductPage";
// // import Register from "./pages/Register";
// import ReactDOM from "react-dom";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import * as serviceWorker from "./serviceWorker";

// ReactDOM.render(
  
//   <Router>
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/Cart" element={<Cart />} />
//       <Route path="/CategoryPage" element={<CategoryPage />} />
//       {/* <Route path="/Login" element={<Login />} />
//       <Route path="/Register" element={<Register />} />  */}
//       <Route path="/ProductPage" element={<ProductPage />} /> 
//     </Routes>
//   </Router>,

//   document.getElementById("root")
// );


// serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);