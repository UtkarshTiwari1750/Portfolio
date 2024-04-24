"use client"
import { NavbarLinks } from "@/data/navbar-link";
import { motion } from "framer-motion"

import { Poppins } from "next/font/google";
import { useDispatch, useSelector } from "react-redux";
import { setCurrSection } from "@/slices/navSlice";
import { RESUME_LINK } from "@/data/resume-link";

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400','200']
});
export default function Navbar() {
  const {currSection} = useSelector((state) => state.nav);
  const dispatch = useDispatch();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-[#090809]  via-[#180828]  to-[#10088B] text-white w-full "
    >
      <div
        className={`text-white w-full mx-auto flex justify-between items-center h-16 px-8`}
      >
        <a href="#" className={`${poppins.className} text-2xl`}>
          Utkarsh
        </a>

        <div className="w-0 hidden md:flex justify-between h-full md:w-[45%]">
          {NavbarLinks.map((nav, index) => (
            <a
              href={nav.link}
              onClick={() => dispatch(setCurrSection(nav.title))}
              key={index}
              className=" h-full flex flex-col justify-end gap-y-4"
            >
              <p>{nav.title}</p>
              <div
                className={`${
                  currSection == nav.title && "bg-[#FF10F0] rounded-full"
                } h-1`}
              ></div>
            </a>
          ))}
        </div>

        {/* My Resume */}

        <button
          type="button"
          className="text-white bg-gradient-to-br hover:scale-110  from-purple-600 to-blue-500 
            hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 
            dark:focus:ring-blue-800 font-medium rounded-lg text-base px-5 py-2.5 text-center 
            me-2 mb-2 transition-all duration-300 "
        >
          <a
            href={RESUME_LINK}
            target="_blank"
          >
            My Resume
          </a>
        </button>
      </div>
    </motion.div>
  );
}
  