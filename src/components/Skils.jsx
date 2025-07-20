"use client";
import { SkillsList } from "@/data/skils-list";
import { useEffect, useRef, useState } from "react";
import { motion, useAnimate, useInView, useMotionValue } from "framer-motion";
import * as Icons from "react-icons/si";
import { useDispatch } from "react-redux";
import { setCurrSection } from "@/slices/navSlice";

export default function Skills() {
  const [currIndex, setCurrIndex] = useState(0);
  const ref = useRef();
  const dispatch = useDispatch();
  const isInView = useInView(ref, { amount: 0.15 });
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (isInView) {
      dispatch(setCurrSection("Skills"));
    }
  }, [isInView, dispatch]);

  const handleOnClick = (index) => {
    setCurrIndex(index);
    animate([
      [".skills", { y: [45, 0] }, { opacity: [0, 1] }, { duration: 0.5 }],
    ]);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 38 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 38 }}
      transition={{ duration: 0.5 }}
      className="lg:py-10 relative"
      id="Skills"
    >
      <div className="flex flex-col justify-between gap-x-6 lg:w-[1380px] w-full mx-auto px-4 text-black relative pt-10">
        <h2 className="lg:text-8xl text-6xl text-center">Skills</h2>

        <div className="w-full text-justify flex flex-col items-start gap-y-4">
          <div className="w-full flex flex-col items-center mt-6">
            <div className="flex gap-x-2">
              {SkillsList.map((skillName, index) => {
                return (
                  <div
                    key={index}
                    className={`${
                      index === currIndex
                        ? "border-blue-600 text-black"
                        : "text-black/45 border-black/45"
                    }
                          cursor-pointer md:text-xl text-sm transition-all duration-300
                          border-2 md:px-3 md:py-2 px-1 py-2 rounded-lg  text-center`}
                    onClick={() => handleOnClick(index)}
                  >
                    {skillName.Name}
                  </div>
                );
              })}
            </div>

            <div
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-y-20 mx-auto mt-8 py-4"
              ref={scope}
            >
              {SkillsList[currIndex].Skills.map((skill, index) => {
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 45 }}
                    animate={{ opacity: [0, 1], y: [45, 0] }}
                    transition={{ duration: 0.5 }}
                    className="lg:w-40 flex flex-col items-center lg:ml-20 gap-y-6"
                  >
                    <div className="flex gap-x-1 skills text-4xl md:text-6xl">
                      {skill.image.map((ele, index) => {
                        const Icon = Icons[ele.iconName];
                        return <Icon key={index} color={ele.iconColor} />;
                      })}
                    </div>
                    <p className="skills text-wrap text-center">{skill.name}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
