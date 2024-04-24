"use client";
import Profile from "@/assest/Profile.png";
import { TypeAnimation } from "react-type-animation";
import { Poppins } from "next/font/google";
import * as Icons from "react-icons/fa";
import { FollowLinks } from "@/data/follow-links";
import { motion, useInView } from "framer-motion"
import { useDispatch, useSelector } from "react-redux";
import ThreeD from "../../public/3D.svg";
import Database from "../../public/Database.svg"
import Website from "../../public/Website.svg";
import API from "../../public/API.svg"
import { setCurrSection } from "@/slices/navSlice";
import { useRef } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "200"],
});

const roles = [
  "Full Stack Web Developer",
  "C++ Coder"
]

export default function Hero() {
  const ref = useRef();
  const dispatch = useDispatch();
  const isInView = useInView(ref, {amount: 0.25})
  if(isInView) {
    dispatch(setCurrSection("Home"))
  }

  return (
    <div
      ref={ref}
      className={`bg-gradient-to-r from-[#090809]  via-[#180828] to-[#10088B] text-white pt-28 pb-44 w-full h-full  
        flex items-center justify-between overflow-hidden`}
      id="Home"
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        className="absolute -left-40 lg:w-[200px] lg:h-[200px] lg:block hidden w-0 h-0"
      >
        <path
          id="Layer_9"
          d="M4 15.51a1 1 0 0 0 .71-.29L15.22 4.71a1 1 0 1 0-1.42-1.42L3.29 13.8a1 1 0 0 0 0 1.42 1 1 0 0 0 .71.29zm0 11.38a1 1 0 0 0 .71-.29L26.6 4.71a1 1 0 1 0-1.42-1.42L3.29 25.18a1 1 0 0 0 0 1.42 1 1 0 0 0 .71.29zm0 11.36a1 1 0 0 0 .71-.25L38 4.71a1 1 0 1 0-1.42-1.42L3.29 36.54a1 1 0 0 0 0 1.42 1 1 0 0 0 .71.29zm0 11.38a1 1 0 0 0 .71-.29L49.34 4.71a1 1 0 1 0-1.42-1.42L3.29 47.92a1 1 0 0 0 0 1.42 1 1 0 0 0 .71.29zM60.71 3.29a1 1 0 0 0-1.42 0l-56 56a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l56-56a1 1 0 0 0 0-1.42zm-1.42 11.37L14.66 59.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l44.63-44.63a1 1 0 0 0-1.42-1.42zm0 11.34L26 59.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l33.29-33.25A1 1 0 0 0 59.29 26zm0 11.4L37.4 59.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l21.89-21.89a1 1 0 0 0-1.42-1.42zm0 11.38L48.78 59.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L60.71 50.2a1 1 0 0 0-1.42-1.42z"
          data-name="Layer 9"
          fill='url("#SvgjsLinearGradient1051")'
        ></path>
        <defs>
          <linearGradient id="SvgjsLinearGradient1051">
            <stop stopColor={`#74ebd5`} offset="0"></stop>
            <stop stopColor={`#9face6`} offset="1"></stop>
          </linearGradient>
        </defs>
      </motion.svg>

      <div className="flex lg:flex-row flex-col justify-between gap-x-6 w-full mx-auto px-4 lg:mt-20 lg:ml-40 ml-2">
  
        {/* Left */}
        <motion.div 
          initial={{opacity: 0, x:-38}}
          animate={{opacity: 1, x:0}}
          transition={{duration: 0.7}}
        className={`text-white lg:w-[40%] w-full flex flex-col gap-y-4 `}>
          <h3 
            className="md:h-9 h-5 ml-2"
          >
            <TypeAnimation
              sequence={[`Full-Stack Web Developer`, 1000, "C++ Coder", 1000]}
              className="text-white text-opacity-70 uppercase lg:text-3xl md:text-2xl"
              cursor={false}
              speed={10}
              style={{ whiteSpace: "pre-line"}}
              repeat={Infinity}
            />
            {/* {roles.map((text, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate="visible"
                transition={{staggerChildren: 0.1, duration: 0.8}}
                className="flex"
              >
                {text.split('').map((char, i) => (
                  <motion.p
                  variants={defaultAnimation}
                  className=""
                  key={i}
                  >
                    {char}
                  </motion.p>
                ))}
              </motion.div>
            ))} */}


          </h3>

          <h2 className={`${poppins.className} md:text-5xl text-2xl `}>
            Hi I'm Utkarsh 👋
          </h2>

          <p className="lg:mt-20 lg:pl-8 pl-2 w-full lg:w-[75%] border-l-2 text-xs md:text-base text-justify border-l-green-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat
            praesentium molestias magnam consequuntur delectus minus inventore
            necessitatibus deserunt, dignissimos labore, deleniti itaque cumque?
            Aperiam reiciendis labore quaerat ut! Hic, sequi.
          </p>
        </motion.div>

        {/* Right */}
        <motion.div 
          initial={{opacity: 0, y:38}}
          animate={{opacity: 1, y:0}}
          transition={{duration: 0.7}} 
          className="relative w-full lg:w-[55%] lg:mt-0 mt-28"
        >
          <div 
          className="absolute bottom-56 left-9 lg:left-0 xl:-top-16 w-full"
          >
            <img
              src={Profile.src}
              alt=""
              className="lg:w-11/12 lg:h-11/12 scale-105 lg:-top-40 lg:scale-100 z-10 absolute top-24 xl:top-0 right-[10%] select-none "
            />
            <img
              src="https://static.vecteezy.com/system/resources/previews/025/837/526/original/gradient-circle-shape-holographic-vibrant-round-icon-multicolor-buttons-can-be-used-in-banner-social-media-web-as-design-element-free-png.png"
              alt="circle"
              className="w-full right-4 lg:right-10 lg:-top-40 absolute scale-105 lg:scale-100 xl:top-8 top-40 z-0 select-none"
            />
          </div>
          
          <div>
            <motion.img
              id="revolving" 
              src={ThreeD.src} 
              alt="" 
              initial={{}}
              animate={{translateY:[0, 280, 0]}}
              transition={{ ease: "linear", duration: 5, repeat:Infinity}}
              className="absolute left-8 -top-32 md:top-0 md:-left-9 z-30 w-8  md:w-14"
            />

            <motion.img
              id="revolving" 
              src={Database.src} 
              alt="" 
              initial={{}}
              animate={{translateY:[280, 0, 280]}}
              transition={{ ease: "linear", duration: 5, repeat:Infinity}}
              className="absolute left-0 -top-32 md:top-0 md:left-12 z-30 w-8 md:w-14"
            />
            
            <motion.img
              id="revolving" 
              src={Website.src} 
              alt="" 
              initial={{}}
              animate={{translateY:[0, 280, 0]}}
              transition={{ ease: "linear", duration: 5, repeat:Infinity}}
              className="absolute right-0  -top-32 md:top-0 md:-right-2 z-30 w-8  md:w-14"
            />

            <motion.img
              id="revolving" 
              src={API.src} 
              alt="" 
              initial={{}}
              animate={{translateY:[280, 0, 280]}}
              transition={{ ease: "linear", duration: 5, repeat:Infinity}}
              className="absolute -right-12 -top-32 md:top-0 md:right-12 z-30 w-8  md:w-14"
            />

          </div>
        
        </motion.div>
      </div>

      <div className="flex flex-col gap-y-4 pr-4">
        {FollowLinks.map((link, index) => {
          const Icon = Icons[link.icon];
          return (
            <a
              key={index}
              href={link.url}
              className="text-white p-2 md:text-[25px] rounded-full  hover:bg-white hover:scale-[0.78] bg-black hover:text-black transition-all duration-300"
              target="_blank"
            >
              <Icon/>
            </a>
          );
        })}
      </div>
      
    </div>
  );
}
