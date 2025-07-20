"use client";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { sendMail } from "@/service/sendMail";

// Mock data - replace with your actual AboutInfo
const AboutInfo = [
  { value: "placeholder" },
  { value: "placeholder" },
  { value: "utkarshtiwari1750@gmail.com" },
  { value: "+1 (555) 123-4567" },
];

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const ref = useRef();
  const isInView = useInView(ref, { amount: 0.25 });

  const handleOnSubmit = async () => {
    console.log("Clicked")
    setLoading(true);

    try {
      await sendMail(formData.email, formData.subject, formData.message);

      setFormData({
        fullName: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.log("Error in handleOnSubmit", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      id="Contact"
      className="min-h-screen bg-black text-white relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-20">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          {/* Header Section */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
              }
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative inline-block"
            >
              <h1 className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-900 absolute inset-0 select-none">
                CONTACT
              </h1>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent relative z-10 pt-8">
                Get In Touch
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-8 rounded-full"
            ></motion.div>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left Side - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6">
                  Let&apos;s Build Something Amazing Together
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Ready to turn your ideas into reality? I&apos;m here to help
                  you create innovative solutions that make a difference.
                  Let&apos;s discuss your next project!
                </p>
              </div>

              <div className="space-y-6">
                {/* Email */}
                <motion.div
                  whileHover={{ x: 10, transition: { duration: 0.2 } }}
                  className="flex items-start space-x-4 group cursor-pointer"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm uppercase tracking-wider text-gray-400 mb-1">
                      Email Me
                    </h4>
                    <p className="text-white text-lg font-medium group-hover:text-blue-400 transition-colors duration-300">
                      {AboutInfo[2].value}
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Side - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative"
            >
              {/* Form Background with Glassmorphism */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl border border-white/10"></div>

              <div className="relative z-10 p-8 space-y-6">
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 
                                focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 
                                transition-all duration-300 group-hover:bg-white/10"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 
                                focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 
                                transition-all duration-300 group-hover:bg-white/10"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div className="group">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 
                              focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 
                              transition-all duration-300 group-hover:bg-white/10"
                    placeholder="Project Discussion"
                  />
                </div>

                {/* Message Textarea */}
                <div className="group">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 
                              focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 
                              transition-all duration-300 group-hover:bg-white/10 resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="button"
                  onClick={handleOnSubmit}
                  disabled={loading}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-4 px-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 
                            hover:from-blue-700 hover:via-purple-700 hover:to-blue-800
                            text-white font-semibold rounded-lg shadow-lg shadow-blue-500/25
                            transition-all duration-300 transform hover:shadow-xl hover:shadow-blue-500/40
                            disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
                            relative overflow-hidden group"
                >
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 
                                  translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"
                  ></div>

                  <div className="relative flex items-center justify-center space-x-2">
                    {loading ? (
                      <>
                        <svg
                          className="animate-spin h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <svg
                          className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                          />
                        </svg>
                      </>
                    )}
                  </div>
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Bottom Decorative Elements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-20 text-center"
          >
            <div className="flex items-center justify-center space-x-4 text-gray-500">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-gray-500"></div>
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse delay-150"></div>
                <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse delay-300"></div>
              </div>
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-gray-500"></div>
            </div>
            <p className="mt-6 text-gray-400 text-sm">
              Let&apos;s create something extraordinary together
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactUs;
