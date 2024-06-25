"use client"
import React, { useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const info = [
  {
    icon: <FaEnvelope />,
    title: 'Email',
    description: "victorlgribel@gmail.com"
  },
];

const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState(null);

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      const result = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      );
      // Utilizando SweetAlert para mensagem de sucesso
      Swal.fire({
        icon: 'success',
        title: 'Sucesso!',
        text: 'Mensagem enviada com sucesso!'
      });
    } catch (error) {
      // Utilizando SweetAlert para mensagem de erro
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Erro ao enviar a mensagem. Tente novamente.'
      });
    }
  };

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/**form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Entre em contato comigo</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                <Input type="text" name="firstname" placeholder="Primeiro nome" />
                <Input type="text" name="lastname" placeholder="Sobrenome" />
                <Input type="email" name="email" placeholder="Email" />
                <Input type="text" name="subject" placeholder="Assunto" />
              </div>
              <Textarea name="message" className="h-[200px]" placeholder="Escreva sua mensagem aqui." />
              <Button type="submit" size="md" className="max-w-40 h-[40px]">Enviar Mensagem</Button>
              {message && <p className="mt-2 text-white">{message}</p>}
            </form>
          </div>
          {/** Info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className=" flex-1 flex col gap-10">
              {info.map((item, index) => (
                <li key={index} className=" flex items-center gap-6 ">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
