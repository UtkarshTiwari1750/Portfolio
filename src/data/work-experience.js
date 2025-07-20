import Neusort from "public/Neusort_Logo.svg";
import Rallybase from "public/Rallybase_logo.svg";
import Paxa from "public/Paxa_Logo.svg";

export const experiences = [
  {
    id: 0,
    company: "Neusort",
    role: "Full Stack Developer Intern",
    duration: "Feb 2025 - Present",
    location: "Mumbai, India",
    logo: Neusort,
    color: "from-blue-500 to-cyan-500",
    achievements: [
      "Created SutraCLI, an AI‑powered developer agent that streamlines tasks",
      "Automated background workflows with Azure Functions and RabbitMQ, achieving 75% faster execution and scalable microservices.",
      "Integrated Spring Boot RabbitMQ with Express.js for real‑time updates and seamless service communication.",
    ],
    tags: [
      "Azure Functions",
      "RabbitMQ",
      "Spring Boot",
      "Express.js",
      "Microservices",
    ],
    link: "https://neusort.com/",
  },
  {
    id: 1,
    company: "Rallybase",
    role: "Frontend Developer Intern",
    duration: "Nov 2024 - Feb 2025",
    location: "Mumbai, India",
    logo: Rallybase,
    color: "from-purple-500 to-pink-500",
    achievements: [
      "Introduced client-side caching, reducing latency by 25%.",
      "Integrated an AI chatbot and created a user action tracking system.",
      "Enhanced SEO and optimized frontend for improved user experience.",
    ],
    tags: ["Client-side Caching", "AI Chatbot", "SEO", "Frontend Optimization"],
    link: "https://rallybase.co/",
  },
  {
    id: 2,
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
