import Adizen from "public/Adizen_Logo.svg";
import Neusort from "public/Neusort_Logo.svg";
import Rallybase from "public/Rallybase_logo.svg";
import Paxa from "public/Paxa_Logo.svg";

export const experiences = [
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
    tags: ["Next.js", "LangChain", "BullMQ", "Prisma", "React Native"],
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
    tags: ["MediaSoup", "WebRTC", "Azure Functions", "RabbitMQ", "Python", "Spring Boot", "Express.js", "Microservices"],
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
      "Introduced client-side caching, reducing latency by 25%.",
      "Integrated an AI chatbot and created a user action tracking system.",
      "Enhanced SEO and optimized frontend for improved user experience.",
      "Developed and published a Native Phone Number Input UI npm library for internal application usage.",
    ],
    tags: ["Client-side Caching", "AI Chatbot", "SEO", "Frontend Optimization", "NPM Library"],
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
    tags: ["ReactJS", "NextJS", "TypeScript", "NextUI", "Performance Optimization"],
    link: "https://paxa.health/",
  },
];
