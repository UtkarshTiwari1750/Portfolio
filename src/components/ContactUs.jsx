"use client"
import { AboutInfo } from "@/data/about-info";
import { RiMailOpenFill } from "react-icons/ri";
import { FaSquarePhone } from "react-icons/fa6";
import { GrSend } from "react-icons/gr";
import { useState } from "react";
import { motion, useInView } from "framer-motion"
import { useRef } from "react";
import { toast } from "sonner";
import { sendMail } from "@/service/sendMail";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    "fullName":"",
    "email":"",
    "subject":"",
    "message":"",
  })
  const [loading, setLoading] = useState(false);
  const style = {
    width: 160,
    display: 'inline-block',
    marginRight: 10
  };
  const ref = useRef();
  const isInView = useInView(ref, {amount: 0.25})

  const handleOnSubmit = async(formData) => {
    try {
      await sendMail(
        formData.email,
        formData.subject,
        formData.message,
      );
      
      setFormData({
        fullName: "",
        email: "",
        message: "",
        subject: "",
      })
    } catch(error) {
      console.log("Error in handleOnSubmit", error);
    }
  }

  return (
    <div id="Contact" className="py-10 lg:h-screen text-black flex items-center mt-10">
      <motion.div 
        ref={ref}
        initial={{opacity: 0, y:38}}
        animate={isInView ? {opacity: 1, y:0}: {opacity:0, y:38}}
        transition={{duration: 0.5}} 
        className="flex flex-col justify-between items-center lg:w-[1280px] w-full lg:mx-auto px-4 text-black relative gap-y-5"
      >
        {/* Heading */}
        <div className="flex relative items-center justify-center h-28">
          <p className="absolute lg:text-9xl text-8xl opacity-10 font-bold">Contact</p>
          <h2 className="text-4xl uppercase font-bold absolute w-72 bottom-6">
            Get in Touch
          </h2>
        </div>

        {/* Content Container */}
        <div className="lg:py-7 py-2 flex flex-col lg:flex-row gap-y-7 gap-x-7 justify-between items-center px-3">
          {/* Left */}
          <div className="flex flex-col lg:w-[40%] lg:gap-y-5 gap-y-2">
            <h3 className="uppercase text-xl font-semibold">Don&apos;t be Shy!</h3>
            <p className="text-justify">
              Need to discuss a project or just want to chat? Don't hesitate to get in touch!
            </p>

            <ul className="flex flex-col items-start justify-center gap-y-3">
              <li className="flex gap-x-2 items-start">
                <RiMailOpenFill size={25} color="#DDB015" />
                <div>
                  <h4 className="uppercase opacity-60">Mail Me</h4>
                  <p>{AboutInfo[2].value}</p>
                </div>
              </li>

              <li className="flex gap-x-2 items-start">
                <FaSquarePhone size={25} color="#DDB015" />
                <div>
                  <h4 className="uppercase opacity-60">Call Me</h4>
                  <p>{AboutInfo[3].value}</p>
                </div>
              </li>
            </ul>
          </div>
          {/* Right */}
          <div className="lg:w-[45%] w-full ">
            <form
              onSubmit={handleOnSubmit}
              className="flex flex-col justify-center gap-y-6"
            >
              {/* Name and Email */}
              <div className="flex gap-x-4 w-full justify-between">
                {/* Name */}
                <div className="relative w-[50%]">
                  <input
                    type="text"
                    id="fullName"
                    className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-black appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                  />
                  <label
                    htmlFor="fullName"
                    className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  dark:bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                  >
                    Name
                  </label>
                </div>
                {/* Email */}
                <div className="relative w-[50%]">
                  <input
                    type="email"
                    id="email"
                    className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-black appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    value={formData.email}
                    required
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                  <label
                    htmlFor="email"
                    className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                  >
                    Email
                  </label>
                </div>
              </div>
              {/* Subject */}
              <div className="relative">
                <input
                  type="text"
                  id="subject"
                  className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-black appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                />
                <label
                  htmlFor="subject"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Subject
                </label>
              </div>
              {/* Message */}
              <div className="relative">
                <textarea
                  type="text"
                  id="message"
                  className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-black appearance-none dark:text-black dark:border-black dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
                <label
                  htmlFor="message"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Message
                </label>
              </div>
            </form>
          </div>
        </div>

        {/* Send Message Button */}
        <button 
          className="flex gap-x-2 items-center border rounded-lg px-3 py-2 border-black hover:scale-110 transition-all duration-500" 
          onClick={() => handleOnSubmit(formData)}
          disabled={loading}
        >
          <p>Send Message</p>
          <GrSend />
        </button>
      </motion.div>
    </div>
  );
}

export default ContactUs;
