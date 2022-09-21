import React from "react";

import { Routes, Route } from "react-router-dom";

import Header from "./Component/Header";
import Photos from "./Pages/Photos";
import Cart from "./Pages/Cart";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Photos />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </div>
  );
};

export default App;
