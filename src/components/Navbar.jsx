"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RESUME_LINK } from "@/data/resume-link";
import { NavbarLinks } from "@/data/navbar-link";

export default function Navbar() {
  const [currSection, setCurrSection] = useState("Home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest(".mobile-menu-container")) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (title) => {
    setCurrSection(title);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Main Navbar */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "py-2" : "py-4"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4">
          <motion.nav
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`relative bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl 
                       shadow-2xl shadow-black/50 transition-all duration-500 ${
                         isScrolled ? "shadow-xl" : "shadow-2xl"
                       }`}
          >
            {/* Gradient Border Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-2xl blur-sm -z-10"></div>

            <div className="flex justify-between items-center px-6 py-4">
              {/* Logo */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative group"
              >
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                  Utkarsh
                </h1>
                <div
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 
                               group-hover:w-full transition-all duration-300"
                ></div>
              </motion.div>

              {/* Desktop Navigation - Hidden on mobile */}
              <div className="hidden lg:flex items-center space-x-1">
                {NavbarLinks.map((nav, index) => (
                  <motion.a
                    key={index}
                    href={nav.link}
                    onClick={() => handleNavClick(nav.title)}
                    whileHover={{ y: -2 }}
                    className="relative group px-4 py-2 rounded-lg transition-all duration-300"
                  >
                    <span
                      className={`relative z-10 text-sm font-medium transition-colors duration-300 ${
                        currSection === nav.title
                          ? "text-white"
                          : "text-gray-300 group-hover:text-white"
                      }`}
                    >
                      {nav.title}
                    </span>

                    {/* Active/Hover Background */}
                    <div
                      className={`absolute inset-0 rounded-lg transition-all duration-300 ${
                        currSection === nav.title
                          ? "bg-gradient-to-r from-blue-600/30 via-purple-600/30 to-cyan-600/30 scale-100"
                          : "bg-white/5 scale-0 group-hover:scale-100"
                      }`}
                    ></div>

                    {/* Active Indicator */}
                    {currSection === nav.title && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-6 h-0.5 
                                   bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </motion.a>
                ))}
              </div>

              {/* Resume Button & Mobile Menu */}
              <div className="flex items-center space-x-4">
                {/* Resume Button - Responsive sizing */}
                <motion.a
                  href={RESUME_LINK}
                  target="_blank"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 
                            hover:from-blue-700 hover:via-purple-700 hover:to-blue-800
                            text-white font-semibold px-4 lg:px-6 py-2.5 rounded-lg shadow-lg shadow-blue-500/25
                            transition-all duration-300 transform hover:shadow-xl hover:shadow-blue-500/40"
                >
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 
                                  translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"
                  ></div>
                  <span className="relative flex items-center space-x-2">
                    <span className="text-sm">Resume</span>
                    <svg
                      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </span>
                </motion.a>

                {/* Mobile Menu Button - Only visible on mobile and tablet */}
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="lg:hidden p-2 rounded-lg bg-white/5 border border-white/10 
                            hover:bg-white/10 transition-colors duration-300 mobile-menu-container"
                >
                  <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1">
                    <motion.div
                      animate={
                        isMobileMenuOpen
                          ? { rotate: 45, y: 6 }
                          : { rotate: 0, y: 0 }
                      }
                      transition={{ duration: 0.2 }}
                      className="w-5 h-0.5 bg-white rounded-full origin-center"
                    />
                    <motion.div
                      animate={
                        isMobileMenuOpen
                          ? { opacity: 0, scale: 0 }
                          : { opacity: 1, scale: 1 }
                      }
                      transition={{ duration: 0.2 }}
                      className="w-5 h-0.5 bg-white rounded-full"
                    />
                    <motion.div
                      animate={
                        isMobileMenuOpen
                          ? { rotate: -45, y: -6 }
                          : { rotate: 0, y: 0 }
                      }
                      transition={{ duration: 0.2 }}
                      className="w-5 h-0.5 bg-white rounded-full origin-center"
                    />
                  </div>
                </motion.button>
              </div>
            </div>
          </motion.nav>
        </div>
      </motion.div>

      {/* Mobile Menu Backdrop */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Slide-out Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
              mass: 0.8,
            }}
            className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-black/95 backdrop-blur-xl 
                       border-l border-white/10 shadow-2xl z-50 lg:hidden mobile-menu-container"
          >
            {/* Menu Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <h2 className="text-xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                Menu
              </h2>
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </motion.button>
            </div>

            {/* Menu Items */}
            <div className="py-6">
              {NavbarLinks.map((nav, index) => (
                <motion.a
                  key={index}
                  href={nav.link}
                  onClick={() => handleNavClick(nav.title)}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  className={`group flex items-center justify-between px-6 py-4 transition-all duration-300 
                             hover:bg-white/5 ${
                               currSection === nav.title
                                 ? "bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 border-r-2 border-blue-500"
                                 : ""
                             }`}
                >
                  <span
                    className={`text-lg font-medium transition-colors duration-300 ${
                      currSection === nav.title
                        ? "text-white"
                        : "text-gray-300 group-hover:text-white"
                    }`}
                  >
                    {nav.title}
                  </span>

                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{
                      scale: currSection === nav.title ? 1 : 0,
                      rotate: currSection === nav.title ? 0 : 180,
                    }}
                    transition={{ duration: 0.3 }}
                    className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                  />

                  <motion.svg
                    className={`w-5 h-5 transition-all duration-300 ${
                      currSection === nav.title
                        ? "text-blue-400"
                        : "text-gray-500 group-hover:text-gray-300"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    whileHover={{ x: 5 }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </motion.svg>
                </motion.a>
              ))}
            </div>

            {/* Menu Footer */}
            <div className="absolute bottom-6 left-6 right-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="p-4 rounded-lg bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10 
                           border border-white/10"
              >
                <p className="text-sm text-gray-400 mb-2">Ready to connect?</p>
                <motion.a
                  href={RESUME_LINK}
                  target="_blank"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="block w-full text-center bg-gradient-to-r from-blue-600 to-purple-600 
                            text-white font-semibold py-3 rounded-lg transition-all duration-300
                            hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl"
                >
                  Download Resume
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
