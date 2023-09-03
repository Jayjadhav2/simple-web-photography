import React from "react";
import Abou from "../Assets/Images/abo.jpg";
import { Link } from "react-router-dom";


const About = () => {
  return (
    <>
    
      <div className="max-w-[1240px] p-2 mx-auto my-10 md:grid grid-cols-2">
        <div className="col-span-1 w-[80%] text-center">
          <img src={Abou} alt="img" className="inline"/>
        </div>
        <div className="col-span-1 flex flex-col justify-center">
            <h1 className="text-[black] font-bold text-3xl my-2"> About Us</h1>
            <p className="my-2 text-justify">Established in the year 2021, Jay Photography in Dudhondi, Palus is a top player in the category
          Photographers in the Palus.The belief that customer satisfaction is as important as their products
          and services, have helped this establishment garner a vast base of customers,which continues to
          grow by the day. It is known to provide top service in the following categories: Identy Size Photo,
          Outdoor Photographs, Wedding Photographs, Photographers For Function, Pre Wedding Photographers,
          Video Shooting Wedding, Cinematic Videography.”
        </p>
        <Link to="/contact">
          <button className="bg-black text-white p-3 rounded" >
            Contact Us
          </button>
          </Link>

        </div>
      </div>
      
    </>
  );
};

export default About;
