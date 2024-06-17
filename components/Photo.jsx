"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2, duration: 6.4, ease: "easeIn" } }}>
        <div className="w-[298px] h-[298px] xl:w-[498px] xl:h-[298px] mix-blend-lighten">
          <Image
            src="/assets/heroimg1.png"
            priority
            quality={100}
            width={400}
            height={200}
            className="object-contain"
            style={{opacity:0.6}}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Photo;
