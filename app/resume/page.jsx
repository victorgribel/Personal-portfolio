"use client";


import { FaHtml5, FaCss3, FaJs, FaReact, FaGit, FaSass, FaNodeJs } from "react-icons/fa";
import { SiTypescript, SiPython, SiDjango, SiNextdotjs, SiCsharp, SiPostgresql } from "react-icons/si";

const about = {
  title: "Sobre mim",
  description: " Sou um desenvolvedor Full Stack tenho 25 anos e com uma experiência em JavaScript (ES6) e PostgreSQL, juntamente com habilidades comprovadas em integração de sistemas via APIs e construção de APIs RESTful usando TypeORM, estou preparado para enfrentar qualquer desafio que a programação possa oferecer.",
  info: [
    {
      fieldName: "Nome",
      fieldValue: "Victor Lima Gribel",
    },
    {
      fieldName: "Discord",
      fieldValue: "Victor Gribel#5477",
    },
    {
      fieldName: "Experiencia",
      fieldValue: "None",
    },
    {
      fieldName: "Nacionalidade",
      fieldValue: "Brasileiro",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Disponivel",
    },
    {
      fieldName: "Linguagens",
      fieldValue: "Ingles (B1) "
    },
    {
      fieldName: "Email",
      fieldValue: "victorlgribel@gmail.com",
    },
  ]
}
const education ={
  title: "Estudos",
  description: "Comecei meu curso na Kenzie e continuo aprimorando meus conhecimentos",
  items: [
    {
      instituição: "Kenzie Academy Brasil",
      posição : "Full stack developer",
      duração : "2000 Horas",
    },
    {
      instituição: "Udemy",
      posição: "C# e outros ",
      duração: "38 horas"
    },
    {
      instituição: "Udemy",
      posição: "MySQL, PostgreSQL, SQLite, MongoDB ",
      duração: "52 horas"
    },
    
  ]
}


const skills = {
  title: "Habilidades",
  description: "Aqui estão algumas das Habilidades que eu aprendi ao longo dos meus cursos",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react",
    },
    {
      icon: <FaGit />,
      name: "git",
    },
    {
      icon: <FaSass />,
      name: "sass",
    },
    {
      icon: <FaNodeJs />,
      name: "nodejs",
    },
     {
      icon: <SiTypescript />,
      name: "Typescript",
    },
    {
      icon: <SiPython />,
      name: "Python",
    },
    {
      icon: <SiDjango />,
      name: "Django",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <SiCsharp />,
      name: "C#",
    },
    {
      icon: <SiPostgresql />,
      name: "PostgreSQL",
    },
  ]
};


import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const page = () => {
  return <motion.div initial={{opacity:0}} animate={{opacity: 1, transform: {delay:2.4, duration:0.4, ease: "easeIn"},
  }}
  className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">
      <div className="container mx auto">
        <Tabs defaultValue="about" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="about">Sobre Mim</TabsTrigger>
            <TabsTrigger value="education">Estudos</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>

          </TabsList>
          <div className="min-h-[70vh] w-full ">
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                  <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                    {about.info.map((item, index) => {
                      return <li key={index} className="flex items-center justify-center xl:justify-start gap-4 ">
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>

                      </li>
                    })}
                  </ul>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                    <h3 className="text-4xl font-bold">{education.title}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                    <ScrollArea className="h-[400px]">
                      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                          {education.items.map((item, index) => {
                            return <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                              <span className="text-accent">{item.duração}</span>
                              <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg-text-left">{item.posição}</h3>
                              <div className="flex items-center gap-3">
                                <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                <p className="text-white/60">{item.instituição}</p>
                              </div>

                            </li>
                          })}
                        </ul>
                    </ScrollArea>
                  </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <div className=" flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 ">{skills.description}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index)=>{
                    return <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[100px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize ">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  })}
                </ul>
              </div>

            </TabsContent>

          </div>
        </Tabs>
      </div>
  </motion.div>
  
}


export default page