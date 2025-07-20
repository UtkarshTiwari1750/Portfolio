"use client";
import { SkillsList } from "@/data/skils-list";
import { useEffect, useRef, useState } from "react";
import { motion, useAnimate, useInView, useMotionValue } from "framer-motion";
import * as Icons from "react-icons/si";
import { useDispatch } from "react-redux";
import { setCurrSection } from "@/slices/navSlice";

export default function Skills() {
  const [currIndex, setCurrIndex] = useState(0);
  const ref = useRef();
  const dispatch = useDispatch();
  const isInView = useInView(ref, { amount: 0.15 });
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (isInView) {
      dispatch(setCurrSection("Skills"));
    }
  }, [isInView, dispatch]);

  const handleOnClick = (index) => {
    setCurrIndex(index);
    animate([
      [
        ".skills",
        { y: [45, 0], opacity: [0, 1] },
        { duration: 0.5, ease: "easeOut" },
      ],
    ]);
  };

  // Floating animation variants for skill icons
  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="lg:py-20 py-16 relative min-h-screen bg-black"
      id="Skills"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col justify-between gap-x-6 lg:w-[1380px] w-full mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="lg:text-8xl md:text-7xl text-5xl font-bold bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent mb-4">
            Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-blue-500 mx-auto rounded-full" />
          <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
            Explore my technical expertise across different domains
          </p>
        </motion.div>

        <div className="w-full flex flex-col items-center">
          {/* Category Tabs */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {SkillsList.map((skillName, index) => {
              const isActive = index === currIndex;
              return (
                <motion.button
                  key={index}
                  className={`
                    relative overflow-hidden cursor-pointer md:text-lg text-base transition-all duration-500
                    md:px-6 md:py-3 px-4 py-2 rounded-full font-medium
                    ${
                      isActive
                        ? "text-white shadow-lg shadow-blue-500/25"
                        : "text-gray-400 hover:text-white"
                    }
                  `}
                  onClick={() => handleOnClick(index)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Active background */}
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full"
                      transition={{ duration: 0.3 }}
                    />
                  )}

                  {/* Hover background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-600 rounded-full opacity-0"
                    whileHover={{ opacity: isActive ? 0 : 0.5 }}
                    transition={{ duration: 0.2 }}
                  />

                  <span className="relative z-10">{skillName.Name}</span>
                </motion.button>
              );
            })}
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full gap-8 max-w-6xl"
            ref={scope}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {SkillsList[currIndex].Skills.map((skill, index) => {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  className="flex flex-col items-center group cursor-pointer skills"
                  whileHover={{ y: -10 }}
                >
                  {/* Skill Icon Container */}
                  <motion.div
                    className="relative p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 group-hover:border-gray-600 transition-all duration-300 mb-4 shadow-xl"
                    whileHover={{
                      boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
                      scale: 1.05,
                    }}
                    variants={floatingVariants}
                    animate="animate"
                    style={{ animationDelay: `${index * 0.5}s` }}
                  >
                    {/* Icon glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-blue-500/5 rounded-2xl group-hover:from-emerald-500/10 group-hover:to-blue-500/10 transition-all duration-300" />

                    {/* Icons */}
                    <div className="relative flex justify-center gap-x-2 text-4xl md:text-5xl">
                      {skill.image.map((ele, iconIndex) => {
                        const Icon = Icons[ele.iconName];
                        return (
                          <motion.div
                            key={iconIndex}
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                          >
                            <Icon
                              color={ele.iconColor}
                              className="drop-shadow-lg filter"
                            />
                          </motion.div>
                        );
                      })}
                    </div>

                    {/* Hover gradient overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-blue-500/0 to-purple-500/0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                      initial={false}
                    />
                  </motion.div>

                  {/* Skill Name */}
                  <motion.p
                    className="text-gray-300 text-center font-medium group-hover:text-white transition-colors duration-300 skills text-sm md:text-base"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {skill.name}
                  </motion.p>

                  {/* Skill level indicator */}
                  <motion.div
                    className="w-12 h-1 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.4 }}
                  />
                </motion.div>
              );
            })}
          </motion.div>

          {/* Bottom decorative element */}
          <motion.div
            className="mt-16 flex justify-center"
            initial={{ opacity: 0, scale: 0 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
            }
            transition={{ duration: 0.6, delay: 1 }}
          >
            <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full animate-pulse" />
            <div
              className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mx-2 animate-pulse"
              style={{ animationDelay: "0.5s" }}
            />
            <div
              className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-pulse"
              style={{ animationDelay: "1s" }}
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
