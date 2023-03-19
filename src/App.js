import "./App.css";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillLinkedin,
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai";
import image from "./components/image.png";
import bootstrap from "./components/bootstrap.png";
import c from "./components/c-.png";
import css from "./components/css-3.png";
import github from "./components/github.png";
import html from "./components/html.png";
import js from "./components/js.png";
import mongodb from "./components/mongodb.png";
import react from "./components/react.png";
// import tailwind from "./components/tailwind.png";
import { useState } from "react";

function App() {
  const[darkmode,setdarkmode] = useState(false);
  return (
    <div className={darkmode? 'dark': ''}>
      <div className="bg-slate-100 px-10 dark:bg-gray-800 dark:text-gray-300 ">
        <section className=" min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl">PortFolio</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-2xl" onClick={()=>{
                  setdarkmode(!darkmode);
                }} />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="www.google.com"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:bg-gray-800 dark:text-gray-400">
              Harsh Maheshwari
            </h2>
            <h3 className="text-2xl py-2 ">Web Developer</h3>
            <p className="text-md py-5 leading-8 ">
            Hi, I’m Harsh. Nice to meet you.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
          <a href="https://www.instagram.com/h_.a_.r_.s_h/">  <AiFillInstagram /></a> 
           <a href="https://www.linkedin.com/in/harsh-maheshwari-a09106215/"> <AiFillLinkedin /></a>
            <a href="https://www.facebook.com/harsh.maheshwari.7737/"><AiFillFacebook /></a>
          </div>
          <div className="relative mt-20 mx-auto flex  items-center justify-center">
            <img src={image} alt="pic" className="rounded-full" />
          </div>
        </section>
        <section>
          <div className="text-center dark:bg-gray-800  dark:text-gray-300">
            <h3 className="text-3xl py-1">Tools And Technologies </h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:bg-gray-800  dark:text-gray-300">
              
            </p>
          </div>

          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  ">
              <div className="flex justify-center my-5">
                <img src={bootstrap} alt="pic" className=" h-10" />
              </div>
              <div className="flex justify-center  my-5">
                <img src={c} alt="pic" className=" h-10" />
              </div>
              <div className="flex justify-center  my-5">
                <img src={css} alt="pic" className=" h-10" />
              </div>
              <div className="flex justify-center  my-5">
                <img src={github} alt="pic" className=" h-10" />
              </div>
              <div className="flex justify-center   my-5">
                <img src={html} alt="pic" className=" h-10" />
              </div>
              <div className="flex justify-center  my-5">
                <img src={js} alt="pic" className=" h-10" />
              </div>
              <div className="flex justify-center  my-5">
                <img src={mongodb} alt="pic" className="h-10" />
              </div>
              <div className="flex justify-center my-5">
                <img src={react} alt="pic" className=" h-10" />
              </div>
            </div>
          </div>

        </section>
      </div>
    </div>
  );
}

export default App;
