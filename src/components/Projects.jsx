import { ProjectList } from "@/data/projects-list";
import React, { useEffect } from "react";
import * as Icons from "react-icons/si";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Poppins } from "next/font/google";
import { useDispatch } from "react-redux";
import { setCurrSection } from "@/slices/navSlice";
import { GITHUB_URL } from "@/data/constant";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "200"],
});

const Projects = () => {
  const ref = useRef();
  const isInView = useInView(ref, { amount: 0.15 });
  const dispatch = useDispatch();

  useEffect(() => {
    if (isInView) {
      dispatch(setCurrSection("Projects"));
    }
  }, [isInView, dispatch]);

  // Animation variants for projects
  const projectVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: 15 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.8 }}
      className="lg:py-20 py-16 relative bg-black min-h-screen"
      id="Projects"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-gradient-to-r from-rose-500/10 to-orange-500/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />

        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, -100, -20],
                opacity: [0, 0.3, 0],
              }}
              transition={{
                duration: Math.random() * 4 + 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 flex flex-col justify-between gap-x-6 w-full lg:mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-20"
        >
          <h2 className="lg:text-8xl md:text-7xl text-5xl font-bold bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent mb-4">
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-orange-500 mx-auto rounded-full" />
          <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
            A showcase of my latest work and technical achievements
          </p>
        </motion.div>

        {/* Projects List */}
        <div className="w-full flex flex-col gap-y-20 max-w-7xl mx-auto">
          {ProjectList.map((project, index) => (
            <motion.div
              key={index}
              className={`
                ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} 
                flex flex-col lg:items-center justify-between gap-8 lg:gap-16
              `}
              variants={projectVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.2 }}
            >
              {/* Content Section */}
              <motion.div
                className="lg:w-[50%] w-full flex flex-col justify-center gap-y-6"
                initial={{ opacity: 0, x: index % 2 === 1 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Project Number */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="relative"
                >
                  <h3 className="uppercase text-sm tracking-[0.2em] text-gray-500 font-medium">
                    Project {project.projectNo}
                  </h3>
                  <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-8 h-[1px] bg-gradient-to-r from-rose-400 to-orange-500" />
                </motion.div>

                {/* Project Title */}
                <motion.h2
                  className={`${poppins.className} text-4xl lg:text-5xl font-bold leading-tight`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                    {project.title}
                  </span>
                </motion.h2>

                {/* Description */}
                <motion.p
                  className="text-gray-400 text-lg leading-relaxed lg:w-[85%]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {project.description}
                </motion.p>

                {/* Action Buttons */}
                <motion.div
                  className="flex flex-wrap gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  {project.url && (
                    <motion.a
                      href={project.url}
                      className="group relative overflow-hidden flex items-center gap-x-3 rounded-xl bg-gradient-to-r from-rose-500 to-orange-500 px-6 py-3 text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-rose-500/25"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-rose-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <FaExternalLinkAlt className="relative z-10" />
                      <span className="relative z-10">Visit Site</span>
                    </motion.a>
                  )}

                  <motion.a
                    href={project.githubUrl}
                    className="group relative overflow-hidden flex items-center gap-x-3 rounded-xl border border-gray-600 bg-gray-900/50 backdrop-blur-sm px-6 py-3 text-gray-300 hover:text-white font-medium transition-all duration-300 hover:border-gray-500 hover:bg-gray-800/50"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithubAlt />
                    <span>Source Code</span>
                  </motion.a>
                </motion.div>

                {/* Tech Stack Pills */}
                <motion.div
                  className="flex flex-wrap gap-2 lg:hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  {project.techStack.slice(0, 6).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs bg-gray-800 text-gray-300 rounded-full border border-gray-700"
                    >
                      {tech.name || "Tech"}
                    </span>
                  ))}
                </motion.div>
              </motion.div>

              {/* Image Section */}
              <motion.div
                className="relative lg:w-[45%] w-full flex items-center justify-center group"
                variants={imageVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Main Image Container */}
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  {/* Image */}
                  <motion.img
                    src={project.image.src}
                    alt={project.title}
                    className="w-full h-auto rounded-2xl transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Tech Stack Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-black/90 backdrop-blur-sm rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500"
                    initial={{ scale: 1.1 }}
                    whileHover={{ scale: 1 }}
                  >
                    <div className="grid grid-cols-4 lg:grid-cols-5 gap-4 p-8 w-full h-full place-items-center">
                      {project.techStack.map((tech, techIndex) => {
                        const Icon = Icons[tech.iconName];
                        return (
                          <motion.div
                            key={techIndex}
                            className="flex flex-col items-center gap-2"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: techIndex * 0.1 }}
                            whileHover={{ scale: 1.2, rotate: 5 }}
                          >
                            <Icon
                              size={40}
                              color={tech.iconColor}
                              className="drop-shadow-lg"
                            />
                            <span className="text-xs text-gray-300 text-center">
                              {tech.name || ""}
                            </span>
                          </motion.div>
                        );
                      })}
                    </div>
                  </motion.div>

                  {/* Decorative border */}
                  <div className="absolute inset-0 rounded-2xl border border-gray-700 group-hover:border-gray-500 transition-colors duration-500" />
                </div>

                {/* Floating decoration */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-rose-400 to-orange-500 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-40 group-hover:opacity-80 transition-opacity duration-500" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-lg">
            Want to see more? Check out my{" "}
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-transparent bg-gradient-to-r from-rose-400 to-orange-500 bg-clip-text hover:from-rose-300 hover:to-orange-400 transition-all duration-300 font-medium"
            >
              GitHub
            </a>{" "}
            for additional projects.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects;
