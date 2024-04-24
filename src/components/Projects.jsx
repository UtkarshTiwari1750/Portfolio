import { ProjectList } from '@/data/projects-list';
import React from 'react';
import * as Icons from "react-icons/si"
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa";
import { motion, useInView } from "framer-motion"
import { useRef } from "react";
import { Poppins } from "next/font/google";
import { useDispatch } from 'react-redux';
import { setCurrSection } from '@/slices/navSlice';
const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400','200']
});


const Projects = () => {
  const style = {
    width: 160,
    display: 'inline-block',
    marginRight: 10
  };
  const ref = useRef();
  const isInView = useInView(ref, {amount: 0.15})
  const dispatch = useDispatch();
  if(isInView) {
    dispatch(setCurrSection('Projects'))
  }

  return (
    <motion.div 
    ref={ref}
    initial={{opacity: 0, y:38}}
    animate={isInView ? {opacity: 1, y:0}: {opacity:0, y:38}}
    transition={{duration: 0.5}} className='lg:py-10 relative text-black'
    id="Projects"

    >
      <div 
        className='flex flex-col justify-between gap-x-6 w-full lg:mx-auto px-4 text-black relative lg:pt-10 py-10'
      >
        <h2 className="lg:text-8xl text-6xl text-center">Projects</h2>

        <div className="w-full flex flex-col gap-y-14 mt-10">
          {ProjectList.map((project, index) => (
            <div key={index} className={`${index%2 == 1 ? "lg:flex-row-reverse flex-col-reverse" :"lg:flex-row flex-col-reverse"} w-[90%] mx-auto flex items-center justify-between gap-y-4 gap-x-4`}>
              {/* Left */}
              <div className='lg:w-[50%] w-full flex flex-col justify-between gap-y-4'>
                <h3 className='uppercase text-2xl text-black/40'>
                  Project {project.projectNo}
                </h3>
                <h2 className={`${poppins.className} text-justify text-4xl font-semibold `}>
                  {project.title}
                </h2>
                <p className='text-black/65 lg:w-[70%] text-justify'>
                  {project.description}
                </p>
                <div className='flex justify-start items-center gap-x-4'>
                  {project.url && (
                    <a href={project.url}
                      className='flex items-center gap-x-2 rounded-xl border border-black justify-start px-3 py-2'
                    >
                      <FaExternalLinkAlt />
                      <p>
                        Visit
                      </p>
                    </a>  
                  )}
                  <a href={project.githubUrl}
                    className='flex items-center gap-x-2 rounded-xl border border-black justify-start px-3 py-2'
                  >
                    <FaGithubAlt />
                    <p>
                      Github
                    </p>
                  </a>
                </div>
              </div>
              
              {/* Right */}
              <div className='relative lg:w-[40%] flex items-center justify-center group hover:scale-105 transition-all duration-500'>
                <div className='absolute grid grid-cols-5 gap-x-5 gap-y-8 bg-black/35 h-full rounded-3xl place-items-center w-full px-5 py-8 opacity-0 group-hover:opacity-100 transition-all duration-500 '>
                  {project.techStack.map((tech, index) => {
                    const Icon = Icons[tech.iconName]
                    return (
                      <Icon size={65} color={tech.iconColor} key={index}/>
                    )
                  })}
                </div>
                <img src={project.image.src} alt="" className='rounded-3xl'/>
              </div>

            </div>
          ))}

        </div>

      </div>
    </motion.div>
  );
}
    
export default Projects;
