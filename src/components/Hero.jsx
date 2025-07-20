"use client";
import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Github, Linkedin, Mail, Twitter, ExternalLink } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { setCurrSection } from "@/slices/navSlice";

// Mock data for social links
const FollowLinks = [
  { icon: "Github", url: "https://github.com/UtkarshTiwari1750" },
  {
    icon: "Linkedin",
    url: "https://www.linkedin.com/in/utkarsh-tiwari-1a4b91256",
  },
  { icon: "Twitter", url: "https://x.com/utkarsh1750" },
  { icon: "Mail", url: "mailto:utkarshtiwari1750@gmail.com" },
];

const Icons = {
  Github,
  Linkedin,
  Twitter,
  Mail,
  ExternalLink,
};

const PortfolioHero = () => {
  const ref = useRef(null);
  const dispatch = useDispatch();
  const isInView = useInView(ref, { amount: 0.25 });
  useEffect(() => {
    if (isInView) {
      dispatch(setCurrSection("Home"));
    }
  }, [isInView, dispatch]);
  return (
    <div
      ref={ref}
      className="relative bg-black text-white min-h-screen w-full flex items-center justify-between overflow-hidden"
      id="Home"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-20 w-96 h-96 bg-gradient-to-r from-cyan-500/15 to-blue-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Geometric SVG */}
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        className="absolute -left-40 lg:w-[300px] lg:h-[300px] lg:block hidden w-0 h-0 opacity-20"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      >
        <path
          d="M4 15.51a1 1 0 0 0 .71-.29L15.22 4.71a1 1 0 1 0-1.42-1.42L3.29 13.8a1 1 0 0 0 0 1.42 1 1 0 0 0 .71.29zm0 11.38a1 1 0 0 0 .71-.29L26.6 4.71a1 1 0 1 0-1.42-1.42L3.29 25.18a1 1 0 0 0 0 1.42 1 1 0 0 0 .71.29zm0 11.36a1 1 0 0 0 .71-.25L38 4.71a1 1 0 1 0-1.42-1.42L3.29 36.54a1 1 0 0 0 0 1.42 1 1 0 0 0 .71.29zm0 11.38a1 1 0 0 0 .71-.29L49.34 4.71a1 1 0 1 0-1.42-1.42L3.29 47.92a1 1 0 0 0 0 1.42 1 1 0 0 0 .71.29zM60.71 3.29a1 1 0 0 0-1.42 0l-56 56a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l56-56a1 1 0 0 0 0-1.42zm-1.42 11.37L14.66 59.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l44.63-44.63a1 1 0 0 0-1.42-1.42zm0 11.34L26 59.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l33.29-33.25A1 1 0 0 0 59.29 26zm0 11.4L37.4 59.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l21.89-21.89a1 1 0 0 0-1.42-1.42zm0 11.38L48.78 59.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L60.71 50.2a1 1 0 0 0-1.42-1.42z"
          fill="url(#geometricGradient)"
        />
        <defs>
          <linearGradient
            id="geometricGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="50%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
        </defs>
      </motion.svg>

      {/* Main Content */}
      <div className="flex justify-center items-center w-full mx-auto px-6 lg:px-12 z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-white w-full max-w-4xl"
        >
          
          {/* Typing Animation */}
          <motion.div
            className="h-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <TypeAnimation
              sequence={[
                "Software Engineer",
                2000,
                "Full-Stack Web Developer",
                2000,
                "C++ Developer",
                2000,
                "Problem Solver",
                2000,
              ]}
              className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-lg md:text-2xl lg:text-3xl font-medium tracking-wider uppercase"
              cursor={false}
              speed={50}
              style={{ whiteSpace: "pre-line" }}
              repeat={Infinity}
            />
          </motion.div>
          
          {/* Main Heading */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <span className="text-white">Building</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400">
              Ideas
            </span>{" "}
            <span className="text-white">into</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-400">
              Scalable Solutions
            </span>
            <span className="text-cyan-400">.</span>
          </motion.h1>
          
          {/* Description */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-cyan-400 to-blue-600"></div>
            <p className="text-gray-300 text-base md:text-lg lg:text-xl leading-relaxed pl-8 max-w-3xl">
              Meet{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-semibold">
                Utkarsh Tiwari
              </span>
              , a passionate software engineer and innovator crafting impactful
              tech solutions. With expertise spanning full-stack development and
              scalable microservices, I transform complex problems into elegant,
              high-performance applications.
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <Link href="#Work" className="inline-block">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:from-blue-500 hover:to-purple-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
                <span className="relative z-10 flex items-center gap-2">
                  View My Work
                  <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex flex-col gap-4 pr-4"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
        >
          {FollowLinks.map((link, index) => {
            const Icon = Icons[link.icon];
            return (
              <motion.a
                key={index}
                href={link.url}
                className="group relative p-4 text-gray-400 hover:text-white transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Icon className="relative z-10 w-6 h-6" />
              </motion.a>
            );
          })}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-gradient-to-b from-cyan-400 to-blue-600 rounded-full mt-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PortfolioHero;
