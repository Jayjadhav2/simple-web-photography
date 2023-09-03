import React from "react";
import Typed from "react-typed";
 import { Link } from "react-router-dom";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      <div className="bg-[#2699fb] w-full py-[100px]">
        <div className="max-w-[1240px] my-[100px] mx-auto text-center">
          <div className="text-xl md:text-3xl font-blod md:p-[24px]">
            Contact Us
          </div>
          <h1 className=" text-white font-bold text-3xl md:text-[60px] md:p-[24px]">
            Jay Photography
          </h1>
          <div className="md: text-[50px]text-[25px] text-white font-bold mt-4">
            Catch your Any Memories
            <Typed
              className="pl-3"
              strings={["Camera", "Videoshoot", "Droneshoot", "Any"]}
              typeSpeed={100}
              loop={true}
              backSpeed={80}
            />
          </div>
          <br />
          <Link to="/contact">
          <button className="bg-black text-white p-3 rounded" >
            Contact Us
          </button>
          </Link>
        </div>
      </div>
      <About/>
      <Services/>
      <Contact/>
    </>
  );
};

export default Home;
