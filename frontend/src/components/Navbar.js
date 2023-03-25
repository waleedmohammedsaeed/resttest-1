import "./styles/style.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Content from "./Content";
import Customer from "./Customer";
import Customerdata from "./employees/Customerdata";
function Navbar() {
  // function setactive(e){
  //    e.target.addClassList('active')
  // }
  return (
    <div className="nav border border-bottom-1 shadow-sm py-2 bg-light">
      <ul className="nav nav-pills nav-fill">
        <BrowserRouter>
            <Routes>
                  <Route path=""  element={<Content/>} />
                  <Route path="customer"  element={<Customer/>} />
            </Routes>
        </BrowserRouter>
      </ul>
    </div>
  );
}

export default Navbar;
