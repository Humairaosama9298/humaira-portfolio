"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "project 1",
    description:
      "Osama Resume: A modern and responsive resume website built with HTML and CSS. Showcase your skills, experience, and education in a clean and professional format. Optimized for desktop, tablet, and mobile devices.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }],
    image: "/images/work/osama-resume-1.png",
    live: "https://osama-resume.vercel.app/",
    github: "https://github.com/Humairaosama9298/osama_resume",
  },
  {
    num: "02",
    category: "fullstack",
    title: "project 2",
    description:
      "Countdown Timer: A full-stack project built with Next.js, Tailwind.css, Shadcn, and React. This interactive countdown timer showcases my skills in building responsive and dynamic web applications. View the live project or explore the code on GitHub.",
    stack: [
      { name: "Next.js" },
      { name: "Tailwind.css" },
      { name: "Shadcn" },
      { name: "React" }
    ],
    image: "/images/work/countdown-2.png",
    live: "https://countdown-timer-five-lemon.vercel.app/",
    github: "https://github.com/Humairaosama9298/countdown_timer"
  },
  {
    num: "03",
    category: "fullstack",
    title: "project 3",
    description:
      "Birthday Wish App: A full-stack project built with Next.js, Tailwind.css, and Node.js. This interactive app allows users to send personalized birthday wishes to their loved ones. Explore the live project or view the code on GitHub.",
    stack: [{ name: "Next.js" }, { name: "Tailwind.css" }, { name: "Node.js" }],
    image: "/images/work/birthday-app-3.png",
    live: "https://birthday-wish-app-psi.vercel.app/",
    github: "https://github.com/Humairaosama9298/birthday_wish_app"
  }
];

export default function Work() {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper: { activeIndex: any; }) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%] ">
              {/* Outline Num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>

              {/* Project Category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize ">
                {project.category}
              </h2>
              {/* Project Description */}
              <p className="text-white/60">{project.description}</p>

              {/* Stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}

                      {/* remove the Last Comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>

              {/* Border */}
              <div className="border border-white/20"></div>

              {/* Buttons */}
              <div className="flex items-center gap-4">
                {/* Live project Button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group ">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="">Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {/* Github Project Button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group ">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="">Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
           
      </div>
      </div>
    </motion.section>
  );
};










// <div className="w-full xl:w-[50%] ">
//             <Swiper spaceBetween={30}
//             slidesPerView={1}
//             className="bg-white xl:h-[520px] mb-12 "
//             onSlideChange={handleSlideChange}
//             >
//               {projects.map((project, index)=> {
//                 return(
//                 <SwiperSlide key={index}
//                 className="w-full">
//                   <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20 ">
                  
//                   {/* Overlay */}
//                   <div className="absolute top-0 boyyom-0 w-full h-full bg-black/10 z-10"></div>

//                   {/* Image */}
//                    <div className="relative w-full h-full">
//                     <Image 
//                     src={project.image}
//                     fill
//                     alt="project-image"
//                     className="object-cover"
//                     />
//                   </div>
//                   </div>
//                 </SwiperSlide>
//                 );
//               })}
//             </Swiper>
//           </div> 