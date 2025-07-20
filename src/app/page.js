"use client";
import About from "@/components/About";
import ContactUs from "@/components/ContactUs";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skils";
import { AnimatePresence } from "framer-motion";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "@/reducer";
import { Toaster } from "sonner";
import dynamic from "next/dynamic";
import WorkExperience from "@/components/Work";
const Hero = dynamic(() => import("@/components/Hero"), {
  ssr: false,
});
const store = configureStore({
  reducer: rootReducer,
});

export default function Home() {
  return (
    <Provider store={store}>
      <Toaster />
      <AnimatePresence>
        <div className="w-full overflow-hidden">
          <div className="mx-auto fixed z-40 w-full">
            <Navbar />
          </div>

          <Hero />
          <WorkExperience />
          {/* <About /> */}
          <Skills />
          <Projects />
          <ContactUs />
        </div>
      </AnimatePresence>
    </Provider>
  );
}
