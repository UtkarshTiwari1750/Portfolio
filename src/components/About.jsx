import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Download, Github, Linkedin, Twitter, Mail, User, Calendar, MapPin, Phone, GraduationCap, Code } from 'lucide-react';

const About = () => {
  const ref = useRef();
  const isInView = useInView(ref, { amount: 0.25 });
  const [hoveredSkill, setHoveredSkill] = useState(null);
  
  // Mock data based on resume
  const AboutInfo = [
    { name: "Name", value: "Utkarsh Tiwari", icon: User },
    { name: "Age", value: "22 Years", icon: Calendar },
    { name: "Location", value: "Mumbai, India", icon: MapPin },
    { name: "Phone", value: "+91 9326169939", icon: Phone },
    { name: "Education", value: "B.E Computer Science", icon: GraduationCap },
    { name: "Experience", value: "3+ Internships", icon: Code }
  ];

  const FollowLinks = [
    { name: "Github", icon: Github, url: "https://github.com", color: "hover:bg-gray-700" },
    { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com", color: "hover:bg-blue-600" },
    { name: "Twitter", icon: Twitter, url: "https://twitter.com", color: "hover:bg-sky-500" },
    { name: "Email", icon: Mail, url: "mailto:utkarshtiwari1750@gmail.com", color: "hover:bg-red-500" }
  ];

  const skills = [
    { name: "Web Development", percent: 95, color: "from-blue-500 to-cyan-500" },
    { name: "Competitive Programming", percent: 85, color: "from-purple-500 to-pink-500" },
    { name: "DevOps", percent: 70, color: "from-green-500 to-emerald-500" },
    { name: "Database Management", percent: 90, color: "from-orange-500 to-red-500" }
  ];

  const CircularProgress = ({ percent, skill, index }) => {
    const circumference = 2 * Math.PI * 45;
    const strokeDashoffset = circumference - (percent / 100) * circumference;

    return (
      <motion.div
        className="relative w-32 h-32 md:w-40 md:h-40"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ delay: index * 0.2, duration: 0.6 }}
        onMouseEnter={() => setHoveredSkill(index)}
        onMouseLeave={() => setHoveredSkill(null)}
      >
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
          {/* Background circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="rgba(55, 65, 81, 0.3)"
            strokeWidth="6"
            fill="none"
          />
          {/* Progress circle */}
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            stroke={"url(#gradient-" + index + ")"}
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={isInView ? { strokeDashoffset } : { strokeDashoffset: circumference }}
            transition={{ delay: index * 0.2 + 0.5, duration: 1.5, ease: "easeOut" }}
            style={{
              filter: hoveredSkill === index ? 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.5))' : 'none'
            }}
          />
          {/* Gradient definition */}
          <defs>
            <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" className={`text-${skill.color.split('-')[1]}-500`} stopColor="currentColor" />
              <stop offset="100%" className={`text-${skill.color.split('-')[3]}-500`} stopColor="currentColor" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Center content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.span
            className={`text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${skill.color}`}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: index * 0.2 + 1, duration: 0.6 }}
          >
            {percent}%
          </motion.span>
          <span className="text-xs md:text-sm text-gray-400 text-center mt-1 px-2">
            {skill.name}
          </span>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="bg-black text-white min-h-screen py-16 px-4 relative overflow-hidden" id="About">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto relative z-10"
      >
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          
          {/* Left Side */}
          <div className="flex flex-col lg:w-2/5 w-full space-y-8">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400">
                  About
                </span>{' '}
                <span className="text-white">Me</span>
              </h2>
              <p className="text-gray-400 text-lg">
                I like creating{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-semibold">
                  Innovative Projects
                </span>
              </p>
            </motion.div>

            {/* Download Resume & Social Links */}
            <motion.div
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <motion.button
                className="group relative px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:from-purple-500 hover:to-blue-500 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Download Resume
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>

              <div className="flex gap-3">
                {FollowLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <motion.a
                      key={index}
                      href={link.url}
                      className={`p-3 bg-gray-800 text-gray-400 hover:text-white rounded-full transition-all duration-300 ${link.color} hover:scale-110 hover:shadow-lg`}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -2 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Info Table */}
            <motion.div
              className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 p-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <div className="space-y-3">
                {AboutInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.div
                      key={index}
                      className="flex items-center gap-4 p-3 rounded-lg bg-gray-800/30 hover:bg-gray-800/50 transition-colors"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: 1 + index * 0.1, duration: 0.4 }}
                    >
                      <Icon className="w-5 h-5 text-blue-400 flex-shrink-0" />
                      <div className="flex flex-col sm:flex-row sm:justify-between w-full">
                        <span className="text-gray-400 font-medium">{info.name}:</span>
                        <span className="text-white">{info.value}</span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Right Side */}
          <div className="lg:w-3/5 w-full space-y-8">
            {/* Description */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <div className="relative">
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-cyan-400 to-blue-600 rounded-full"></div>
                <p className="text-gray-300 text-lg leading-relaxed pl-6">
                  Hi! I'm{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-semibold">
                    Utkarsh Tiwari
                  </span>
                  , a Computer Science Engineering student with a versatile tech background in Web Development, DevOps, and data science. My expertise includes Next.js, Firebase, Python, React.js, and C++.
                </p>
              </div>
              
              <p className="text-gray-400 text-base leading-relaxed pl-6">
                I'm passionate about building scalable solutions and have gained hands-on experience through multiple internships at startups, where I've contributed to high-performance web applications and microservices architecture.
              </p>
            </motion.div>

            {/* Skills Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold mb-8 text-center">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                  My Expertise
                </span>
              </h3>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 place-items-center">
                {skills.map((skill, index) => (
                  <CircularProgress
                    key={index}
                    percent={skill.percent}
                    skill={skill}
                    index={index}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;