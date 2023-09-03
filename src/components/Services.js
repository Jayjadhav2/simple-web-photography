import React from "react";
import Ser from "../Assets/Images/ser1.jpg";
import Ser1 from "../Assets/Images/ser2.jpg";
import ser2 from "../Assets/Images/ser3.jpg";
import { Link } from "react-router-dom";


const Services = () => {
  return (
    <>
    
      <h1 className="text-6xl color-black font-bold text-center ">Our Services</h1>
      <div className="py-[100px] px-2">
        <div className=" max-w-[1240px] mx-auto grid grid-cols-3 gap-6">
          <div className="shodow-xl h-[500px] my-2 hover:scale-105 duration-500 flex flex-col items-center justify-center">
            <img src={Ser} alt="img" className="h-[500px]" />
            <h2 className="font-bold text-xl p-3"> Wedding Photography</h2>
            <Link to="/contact">
          <button className="bg-black text-white p-3 rounded" >
            Contact Us
          </button>
          </Link>
          </div>
          <div className="shodow-xl h-[500px] my-2 hover:scale-105 duration-500 flex flex-col items-center justify-center">
            <img src={Ser1} alt="img" className="h-[500px]" />
            <h2 className="font-bold text-xl p-3"> OutDoor Photography</h2>
            <Link to="/contact">
          <button className="bg-black text-white p-3 rounded" >
            Contact Us
          </button>
          </Link>

          </div>
          <div className="shodow-xl h-[500px] my-2 hover:scale-105 duration-500 flex flex-col items-center justify-center">
            <img src={ser2} alt="img" className="h-[500px]" />
            <h2 className="font-bold text-xl p-3"> Babyshoot Photography</h2>
            <Link to="/contact">
          <button className="bg-black text-white p-3 rounded" >
            Contact Us
          </button>
          </Link>
        
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Services;
