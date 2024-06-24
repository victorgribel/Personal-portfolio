"use client";

import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {Textarea} from "@/components/ui/textarea"

import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const info = [
  {
    icon: <FaEnvelope />,
    title: 'Email',
    description: "victorlgribel@gmail.com"
  },

];

import { motion } from "framer-motion";

const Contact = () => {
  return <motion.section initial={{ opacity: 0 }}
  animate={{ opacity: 1, transition:{delay:2.4, duration:0.4, ease: "easeIn"}}}
  className="py-6">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/**form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Entre em contato comigo</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                <Input type="firstname" placeholder="Primeiro nome"/>
                <Input type="lastname" placeholder="Sobrenome"/>
                <Input type="email" placeholder="Email"/>
                <Input type="subject" placeholder="Assunto"/>
              </div>
             <Textarea className="h-[200px]" placeholder="Escreva sua mensagem aqui."/>
             <Button size="md" className="max-w-40 h-[40px]">Enviar Mensagem</Button>
            </form>
          </div>
          {/** Info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className=" flex-1 flex col gap-10">
              {info.map((item, index) => {
                return <li key={index} className=" flex items-center gap-6 ">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h[72px] bg-[27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>

                </li>
              })}
            </ul>
          </div>
        </div>
      </div>
  </motion.section>
}

export default Contact