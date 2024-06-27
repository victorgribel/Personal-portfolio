"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSlidersBtns from "@/components/WorkSlidersBtns";

const projects = [
  {
    num: '01',
    category: 'Front-end',
    title: 'Portfolio',
    description: 'Projeto pessoal dedicado a mostrar meu trabalho utilizando frameworks e linguagens atualizadas, com animações implementadas através do Framer Motion.',
    stack: [{ name: "Next.js" }, { name: "FramerMotion" }, { name: "TaillwindCSS" }, { name: "Typescript" }],
    image: '/assets/portfolio.png',
    live: "",
    github: "",
  },
  {
    num: '02',
    category: 'Front-end',
    title: 'NuKenzie',
    description: 'Projeto NuKenzie tem como objetivo oferecer uma maneira simples e eficaz de gerenciar suas finanças pessoais',
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "javascript" }],
    image: '/assets/NuKenzie.png',
    live: "https://nu-kenzie-zeta-sage.vercel.app/",
    github: "https://github.com/victorgribel/Control-finance-NuKenzie",
  },
  {
    num: '03',
    category: 'Front-end',
    title: 'KenzieHub.',
    description: 'Projeto que inclui funcionalidades de login e registro de usuário, com página de acesso autenticado.',
    stack: [{ name: "Javascript" }, { name: "sass" }, { name: "react" }],
    image: '/assets/KenzieHub.png',
    live: "",
    github: "",
  }
];

const Projetos = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) =>{
    const currentIndex =swiper.activeIndex;

    setProject(projects[currentIndex]);
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition:{delay:2.4, duration:0.4, ease: "easeIn"}}}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl font-extrabold text-outline text-transparent">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.title}</h2>
              <p className="text-white/70">{project.category}</p>

              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item,index) => {
                  return <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index !== project.stack.length -1 && ","}
                  
                  </li>
                })}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={project.live}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                      <BsArrowUpRight className="text-white text-3xl groupd-hover:text-accent" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Deploy Online</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                </Link>
                <Link href={project.github}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                      <BsGithub className="text-white text-3xl groupd-hover:text-accent" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Repositorio do Github</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]  ">
            <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[360px] mb-12 rounded-[8px] " onSlideChange={handleSlideChange}>
              {projects.map((project,index) =>{
                return <SwiperSlide key={index} className="w-full">
                  <div className="h-[300px] relative group flex justify-center items-center bg-pink-50/20">
                  <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                  <div className="relative w-full h-full roundedL-[12px] overflow-hidden">
                    <Image src={project.image} layout="fill" objectFit="cover" className="object-cover rounded-[2px]"></Image>
                  </div>
                  </div>
                  

                </SwiperSlide>
              })}
              <WorkSlidersBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all" />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Projetos;
