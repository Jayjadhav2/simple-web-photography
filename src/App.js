import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Routes,Route, } from "react-router-dom";

function App() {
  return (
    <>
    <Header/>
     <Routes>
      <Route path="/" Component={Home}/>
      <Route path="/About" Component={About}/>
      <Route path="/services" Component={Services}/>
      <Route path="/contact" Component={Contact}/>
     </Routes>
     <Footer/>
    </>
  );
}

export default App;
