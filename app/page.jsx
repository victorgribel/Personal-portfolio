import Photo from "@/components/Photo"
import { Social } from "@/components/Social"
import { Button } from "@/components/ui/button"
import {FiDownload} from "react-icons/fi"
const Home = () => {
  return <section className="h-full">
    <div className="container mx-auto h-full">
      <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
        <div className="text-center xl:text-left order-2 xl:order-none">
          <span className="text-xl">Full-stack Developer</span>
          <h1 className="h1 mt-6">
            Olá, Eu sou <br/> <span>Victor Gribel</span>
          </h1>
          <p className="max-w[500px] mt-9 text-white/80 ">
          Sou um desenvolvedor Full Stack tenho 25 anos e com uma experiência em JavaScript (ES6) e PostgreSQL, juntamente com habilidades comprovadas em integração de sistemas via APIs e construção de APIs RESTful usando TypeORM, estou preparado para enfrentar qualquer desafio que a programação possa oferecer
          </p>
         <div className=" flex flex-col xl:flex-row items-center mt-5 gap-10">
            <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
              <span>Download CV</span>
              <FiDownload className="text-xl"/>
            </Button>
            <div className="mb-8 xl:mt-9">
              <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"/>
            </div>
          </div>
        </div>
           <div className="order-1 xl:order-none mb-8 xl:mb-8">
            <Photo/>
            </div>
      </div>
    </div>
   
  </section>
}

export default Home