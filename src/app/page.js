"use client"
import About from "@/components/About";
import ContactUs from "@/components/ContactUs";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skils";
import { motion, AnimatePresence } from 'framer-motion'
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "@/reducer";
import { Toaster } from "sonner";
const store = configureStore({
  reducer: rootReducer,
})

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
          <About />
          <Skills />
          <Projects />
          <ContactUs />
        </div>
      </AnimatePresence>
    </Provider>
  );
}
