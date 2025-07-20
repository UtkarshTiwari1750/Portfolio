import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, ExternalLink } from "lucide-react";
import { experiences } from "@/data/work-experience";

const WorkExperience = () => {
  const [selectedExperience, setSelectedExperience] = useState(0);

  return (
    <div className="bg-black text-white min-h-screen py-16 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className=" mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400">
              Work Experience
            </span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl ">
            I switch a lot of companies. It's mostly about the culture and
            growth opportunities.
          </p>
        </motion.div>

        <div className="w-4/5 mx-auto flex flex-col lg:flex-row gap-8">
          {/* Company List */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="p-6 border-l">
              <div className="flex lg:flex-col flex-row items-center justify-between space-y-2">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.id}
                    className={`w-full flex items-center cursor-pointer p-4 rounded-xl transition-all duration-300 ${
                      selectedExperience === index
                        ? "bg-gradient-to-r " + exp.color + " shadow-lg"
                        : "hover:bg-gray-800/80"
                    }`}
                    onClick={() => setSelectedExperience(index)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center object-contain">
                        {<exp.logo className="w-8 h-8" />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3
                          className={`font-semibold truncate ${
                            selectedExperience === index
                              ? "text-white"
                              : "text-gray-300"
                          }`}
                        >
                          {exp.company}
                        </h3>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Experience Details */}
          <div className="lg:w-full" key={selectedExperience}>
            <div className="rounded-2xl border border-gray-800 p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className={`flex items-center justify-center`}>
                    <span className="text-2xl font-bold text-white">
                      {(() => {
                        const Logo = experiences[selectedExperience].logo;
                        return <Logo className="w-8 h-8" />;
                      })()}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      {experiences[selectedExperience].role}{" "}
                      <span
                        className={`text-transparent bg-clip-text bg-gradient-to-r ${experiences[selectedExperience].color}`}
                      >
                        @{experiences[selectedExperience].company}
                      </span>
                    </h3>
                    <div className="flex flex-wrap gap-4 text-gray-400">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{experiences[selectedExperience].duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{experiences[selectedExperience].location}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="bg-gray-800 hover:bg-gray-700 rounded-full transition-colors">
                  <motion.a
                    key={experiences[selectedExperience].id}
                    href={experiences[selectedExperience].link}
                    className="group relative p-4 text-gray-400 hover:text-white transition-all duration-300 flex justify-center"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-5 h-5 text-gray-400" />
                  </motion.a>
                </button>
              </div>

              {/* Achievements */}
              <div className="mb-8">
                <div className="space-y-4">
                  {experiences[selectedExperience].achievements.map(
                    (achievement, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div
                          className={`w-2 h-2 rounded-full bg-gradient-to-r ${experiences[selectedExperience].color} mt-2 flex-shrink-0`}
                        ></div>
                        <p className="text-gray-300 leading-relaxed text-sm">
                          {achievement}
                        </p>
                      </motion.div>
                    )
                  )}
                </div>
              </div>

              {/* Technologies */}
              {/* TODO: For Future */}
              {/* <div>
                <h4 className="text-xl font-semibold text-white mb-4">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-3">
                  {experiences[selectedExperience].tags.map((tag, index) => (
                    <motion.span
                      key={index}
                      className={`px-4 py-2 bg-gradient-to-r ${experiences[selectedExperience].color} bg-opacity-20 border border-gray-700 rounded-full text-sm text-gray-300 hover:text-white transition-colors`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div> */}
            </div>
          </div>
        </div>

        {/* Timeline Indicator */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="flex justify-center">
            <div className="flex items-center gap-4">
              {experiences.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedExperience(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    selectedExperience === index
                      ? `bg-gradient-to-r ${experiences[index].color} scale-125`
                      : "bg-gray-600 hover:bg-gray-500"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WorkExperience;
