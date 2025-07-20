import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter, ExternalLink } from "lucide-react";

const Icons = {
  Github,
  Linkedin,
  Twitter,
  Mail,
  ExternalLink,
};

// Mock data for social links
const FollowLinks = [
  { icon: "Github", url: "https://github.com/UtkarshTiwari1750" },
  { icon: "Linkedin", url: "https://www.linkedin.com/in/utkarsh-tiwari-1a4b91256" },
  { icon: "Twitter", url: "https://x.com/utkarsh1750" },
  { icon: "Mail", url: "mailto:utkarshtiwari1750@gmail.com" },
];

export default function SocialLinks() {
  return (
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
  );
}
