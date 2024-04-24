"use client"
import { AboutInfo } from "@/data/about-info";
import { FollowLinks } from "@/data/follow-links";
import 'rsuite/dist/rsuite-no-reset.min.css';
import { Progress } from "rsuite"
import * as Icons from "react-icons/fa"
import { PiDownloadSimpleBold } from "react-icons/pi";
import { motion, useInView } from "framer-motion"
import { useRef } from "react";
import Resume from "../data/Resume.pdf"
import { useDispatch } from "react-redux";
import { setCurrSection } from "@/slices/navSlice";

export default function About() {
    const ref = useRef();
    const dispatch = useDispatch();
    const isInView = useInView(ref, {amount: 0.25})
    if(isInView) {
        dispatch(setCurrSection("About"))
    }

    return (
        <div className="py-10 text-black
            flex items-center" 
            id="About"
        >
            <motion.div 
                ref={ref}
                initial={{opacity: 0, y:38}}
                animate={isInView ? {opacity: 1, y:0}: {opacity:0, y:38}}
                transition={{duration: 0.5}}
                className="flex flex-col lg:flex-row justify-between items-center gap-x-6 w-[1280px] mx-auto px-4 text-black relative py-9"
            >
                
                {/* Left */}
                <div 
                    className="flex flex-col lg:gap-y-14 gap-y-6 lg:w-[35%] w-full"
                >
                    <div>
                        <h2 className="lg:text-6xl font-bold text-4xl">
                            About Me
                        </h2>
                        <p className="text-slate-500">
                            I like creating a Innovative Project
                         </p>
                    </div>

                    <div className="flex items-center gap-x-7">
                        <motion.a 
                            href={Resume}
                            whileHover={{scale:1.1}}
                            transition={{duration: 0.5}}
                            className=" bg-gradient-to-r from-[#4800ff] to-[#f300ff] px-2 py-3 rounded-full 
                            text-white flex items-center gap-x-2 cursor-pointer active:scale-50"
                            download="Utkarsh_Resume"
                        >
                            <PiDownloadSimpleBold size={20}/>
                            Download Resume
                        </motion.a>

                        <div className="flex gap-x-2 items-center">
                            {FollowLinks.map((link, index) => {
                                const Icon = Icons[link.icon];
                                return (
                                <a
                                    key={index}
                                    href={link.url}
                                    className={`${link.name == 'LinkedIn' ? "hover:bg-[#5e8ff2]" : link.name == "X" ? "hover:bg-[#5e8ff2]": "" } text-white text-xl p-2 rounded-full  hover:scale-[0.85] bg-black  transition-all duration-300`}
                                    target="_blank"
                                >
                                    <Icon />
                                </a>
                                );
                            })}
                        </div>
                    </div>

                    <table className="w-[55%] mx-auto lg:w-full">
                        <tbody className="w-full">
                            {AboutInfo.map((info, index) => (
                                <tr key={index} className={`${index%2 == 0 ? "bg-slate-100" : "bg-white"} bg-black rounded-xl w-full font-bold md:text-base text-sm`}>
                                    <td className="lg:p-5 rounded-l-lg p-3 w-full">{info.name}:</td>
                                    <td className="lg:p-5 rounded-r-lg lg:pl-6 p-3 w-full">{info.value}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Right */}
                <div className="lg:w-[50%] w-full pl-4 pr-10 lg:pl-0 lg:pr-0 text-justify flex flex-col lg:items-start gap-y-4 mt-5 lg:mt-0">
                    <p className="text-justify text-slate-500">
                        Hi! I'm Utkarsh Tiwari, a Computer Science Engineering student with a versatile tech background in Web Development, DevOps, and data science. My expertise includes Next JS, Firebase, React JS, and C++.
                    </p>

                    <div className="grid grid-cols-2 gap-y-5 gap-x-28 p-3 relative place-items-center pl-8 w-">
                        <div className="relative md:w-[160px] w-[120px] inline-block mr-[10px]">
                            <Progress.Circle percent={80} className="font-extrabold" showInfo={false} strokeColor="#1F51FF" />

                            <div className="absolute flex flex-col items-center justify-center md:top-[28%] top-[24%] md:left-10 left-6 w-20">
                                <p className="md:text-3xl text-xl font-bold w-12">{80}%</p>
                                <p className="w-20 text-center text-xs md:text-sm ">Web Development</p>
                            </div>
                        </div>

                        <div className="relative md:w-[160px] w-[120px] inline-block mr-[10px]">
                            <Progress.Circle percent={75} className="font-extrabold" showInfo={false} strokeColor="#1F51FF" />

                            <div className="absolute flex flex-col items-center justify-center md:top-[28%] top-[24%] md:left-10 left-6 w-20">
                                <p className="md:text-3xl text-xl font-bold w-12">{75}%</p>
                                <p className="w-20 text-center text-xs md:text-sm ">Competitive Programming</p>
                            </div>
                        </div>

                        <div className="relative md:w-[160px] w-[120px] inline-block mr-[10px]">
                            <Progress.Circle percent={50} className="font-extrabold" showInfo={false} strokeColor="#1F51FF" />

                            <div className="absolute flex flex-col items-center justify-center top-[28%] md:left-10 left-6 w-20">
                                <p className="md:text-3xl text-xl font-bold w-12">{50}%</p>
                                <p className="w-20 text-center text-xs md:text-sm ">Devops</p>
                            </div>
                        </div>

                        <div className="relative md:w-[160px] w-[120px] inline-block mr-[10px]">
                            <Progress.Circle percent={85} className="font-extrabold" showInfo={false} strokeColor="#1F51FF" />

                            <div className="absolute flex flex-col items-center justify-center md:top-[28%] top-[24%] md:left-10 left-6 w-20">
                                <p className="md:text-3xl text-xl font-bold w-12">{85}%</p>
                                <p className="w-20 text-center text-xs md:text-sm ">Database Management</p>
                            </div>
                        </div>

                    </div>

                </div>
            
            </motion.div>
        </div>
    );
}