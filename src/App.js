import React, {useState, useEffect} from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dropdown from './Dropdown';
import image from './img/profile.png';
import Navbar from './Navbar';

function App() {
  const[isAnimated,setIsAnimated]=useState(false);
  
   const [isOpen, setIsOpen] = useState(false);
   const toggle = () => {
     setIsOpen(!isOpen);
   };

   useEffect(() => {
     setIsAnimated(true);
     const hideMenu = () => {
       if (window.innerWidth > 768 && isOpen) {
         setIsOpen(false);
       }
     };
     window.addEventListener("resize", hideMenu);
     return () => {
       window.removeEventListener("resize", hideMenu);
     };
   });

  return (
    <>
      <BrowserRouter>
        <Navbar toggle={toggle}></Navbar>
        <Dropdown isOpen={isOpen} toggle={toggle}></Dropdown>
      </BrowserRouter>

      <div
        className="min-h-screen w-screen flex justify-center items-center flex-col-reverse lg:flex-row lg:justify-around"
        style={{
          background: "linear-gradient(to bottom, #F0F4FD, #A1A3BA)",
        }}
      >
        <div className="mt-5 text-center lg:text-left">
          <h1 className="font-black text-5xl lg:text-6xl">
            Welcome to my <br />{" "}
            <span className="font-quickSand font-light">
              portfolio, enjoy it!
            </span>
          </h1>
          <p className="mt-5">Desarrollador web Full Stack</p>
          <span className="inline-block bg-indigo-500 px-10 py-5 text-white rounded-full shadow-lg uppercase text-lg tracking-wide mt-8 ">
            Explore
          </span>
        </div>
        <img
          className={`${
            isAnimated
              ? "lg:scale-150 md:scale-150 sm:scale-90 scale-90"
              : "translate-x-full translate-y-full"
          } rounded-full w-80 transform transition duration-1000 ease-in-out `}
          src={image}
          alt="portfolio"
        />
      </div>
    </>
  );
}

export default App;
