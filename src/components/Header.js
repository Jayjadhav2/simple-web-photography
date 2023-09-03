import React, { useState } from 'react';
import{AiOutlineMenu ,AiOutlineClose} from "react-icons/ai";
import { Link } from 'react-router-dom';

const Header = () => {
     const[toggle, seToggle]= useState(false);
  return (
   <>
    <div className="bg-[#2699fb] p-4">
        <div className="max-w-[1240px] mt-[17px] items-center flex justify-between mx-auto">
          <div className="text-3xl font-bold">Jay Photography</div>
          {
            toggle ?
            <AiOutlineClose onClick={() => seToggle(!toggle)} className=" text-white text-2xl md:hidden block"/>
            
            :
            
            <AiOutlineMenu  onClick={() => seToggle(!toggle)} className=" text-white text-2xl md:hidden block"/>
          }
        
          <ul className=" hidden md:flex text-white gap-10">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Services">Services</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
          </ul>
          {/*responsive menu */}
          <ul className={` duration-300 md:hidden w-full h-screen text-white fixed bg-black top-[86px]
            ${toggle ? 'left-[0%]' : 'left-[-100%]'}`}>


            <li className="p-5">Home</li>
            <li className="p-5">About</li>
            <li className="p-5">Services</li>
            <li className="p-5">Contact</li>
          </ul>
        </div>
      </div>
   </>
  );
}

export default Header;
