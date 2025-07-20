import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

export default function TypingTitle() {
  return (
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
  );
}
