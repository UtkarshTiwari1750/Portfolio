import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, ExternalLink } from "lucide-react";
// import { experiences } from "@/data/work-experience";

import Adizen from "public/Adizen_Logo.svg";
import Neusort from "public/Neusort_Logo.svg";
import Rallybase from "public/Rallybase_logo.svg";
import Paxa from "public/Paxa_Logo.svg";

const WorkExperience = () => {
  const [selectedExperience, setSelectedExperience] = useState(0);
  const experiences = [
    {
      id: 0,
      company: "Adizen.ai",
      role: "Software Developer Engineer - 1",
      duration: "Nov 2025 - Present",
      location: "Mumbai, India",
      logo: Adizen,
      color: "from-sky-500 to-blue-600",
      positions: [
        { title: "Software Developer Engineer - 1", duration: "Jul 2026 - Present" },
        { title: "SDE Intern", duration: "Nov 2025 - Jun 2026" },
      ],
      achievements: [
        "Built a full-stack multi-tenant therapy management SaaS with BullMQ, LangChain, and Ollama, implementing an event-driven AI pipeline that auto-generated clinical summaries from patient assessments, while integrating Stripe, Razorpay, and Socket.IO for payments and real-time notifications.",
        "Developed an enterprise AI copilot on a Next.js + Node.js/Express monorepo with a provider-agnostic LLM abstraction layer supporting OpenAI, Gemini, Groq, Grok, and Ollama, and integrated 25+ agentic tools across Prisma/PostgreSQL, Slack, GitHub MCP, Firebase, and CFO financial systems.",
        "Shipped the companion React Native (Expo) mobile app enabling patients to book appointments, complete mindful check-ins, and track therapy progress/reflections, using NativeWind, React Navigation, and Secure Store for on-device session storage.",
        "Integrated Google Calendar (auto-generated Meet links for scheduling) and Gmail APIs with Cloud Pub/Sub push notifications and OAuth2 token refresh, enabling real-time multi-mailbox inbox sync.",
      ],
      tags: [
        "Next.js",
        "LangChain",
        "BullMQ",
        "Prisma",
        "React Native",
      ],
      link: "https://adizen.ai/",
    },
    {
      id: 1,
      company: "Neusort",
      role: "Full Stack Developer Intern",
      duration: "Feb 2025 - Nov 2025",
      location: "Mumbai, India",
      logo: Neusort,
      color: "from-blue-500 to-cyan-500",
      achievements: [
        "Built MediaSoup WebRTC signaling for realtime chatting, reducing signaling latency by 30% and improving real-time sync for 1000+ concurrent users.",
        "Developed a Python-based CLI AI assistant that automated internal developer workflows, reducing manual overhead by 40% and boosting engineering productivity.",
        "Built event-driven backend systems with Azure Functions + RabbitMQ, orchestrating 10K+ async tasks/day, achieving 99.9% task completion reliability at scale.",
      ],
      tags: [
        "MediaSoup",
        "WebRTC",
        "Azure Functions",
        "RabbitMQ",
        "Python",
      ],
      link: "https://neusort.com/",
    },
    {
      id: 2,
      company: "Rallybase",
      role: "Frontend Developer Intern",
      duration: "Nov 2024 - Feb 2025",
      location: "Mumbai, India",
      logo: Rallybase,
      color: "from-purple-500 to-pink-500",
      achievements: [
        "Integrated an AI chatbot and created a user action tracking system.",
        "Enhanced SEO and optimized frontend for improved user experience.",
        "Developed and published a Native Phone Number Input UI npm library for internal application usage.",
      ],
      tags: [
        "AI Chatbot",
        "SEO",
        "Frontend Optimization",
        "NPM Library",
      ],
      link: "https://rallybase.co/",
    },
    {
      id: 3,
      company: "Paxa Health",
      role: "Frontend Developer Intern",
      duration: "Jul 2024 - Nov 2024",
      location: "Mumbai, India",
      logo: Paxa,
      color: "from-green-500 to-emerald-500",
      achievements: [
        "Built interactive web pages and applications using ReactJS, NextJS, and TypeScript, leveraging NextUI and other UI libraries.",
        "Implemented performance optimization strategies, improving overall application efficiency by 20%.",
        "Contributed to a 15% increase in site traffic through enhanced design and user experience.",
      ],
      tags: [
        "ReactJS",
        "NextJS",
        "TypeScript",
        "NextUI",
        "Performance Optimization",
      ],
      link: "https://paxa.health/",
    },
  ];

  return (
    <div id="Experience" className="bg-black text-white min-h-screen py-16 px-4 lg:px-8">
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
            I switch a lot of companies. It&apos;s mostly about the culture and
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
                    {experiences[selectedExperience].positions?.length > 1 && (
                      <div className="mt-3 space-y-1.5 border-l-2 border-gray-700 pl-4">
                        {experiences[selectedExperience].positions.map(
                          (pos, index) => (
                            <div
                              key={index}
                              className="flex flex-wrap items-baseline gap-x-2"
                            >
                              <span className="text-white text-sm font-medium">
                                {pos.title}
                              </span>
                              <span className="text-gray-500 text-xs">
                                {pos.duration}
                              </span>
                            </div>
                          )
                        )}
                      </div>
                    )}
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
