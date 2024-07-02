import { motion } from "framer-motion";
import { Spotlight } from "../ui/Spotlighht.tsx";
import {TextGenerateEffectDemo} from "./TextGenerateEffectDemo.tsx";


export function Bienvenue() {
  return (
      <div
          className="h-[calc(110vh)] w-full rounded-md flex md:items-center md:justify-start bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
          <Spotlight
              className="-top-40 left-0 md:left-60 md:-top-40"
              fill="white"

          />


          <div className=" p-4 max-w-7xl flex justify-start  mx-auto relative z-10  w-full pt-20 md:pt-0">
              <div className={`flex flex-col`}>
                  <motion.h1 initial={{opacity:0}}  animate={{opacity:1}} transition={{
                      type: "spring",
                      stiffness: 100,
                      damping: 25,
                  }}  className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                      Bienvenue.
                  </motion.h1>
                  <motion.div initial={{width:10}}  whileInView={{width:100}} transition={{
                      type: "spring",
                      stiffness: 100,
                      damping: 25,
                  }} className={`h-2 bg-white rounded-lg mt-2`}></motion.div>
                  <div className="mt-4 font-normal text-base text-white text-neutral-300 max-w-lg text-center mx-auto">
                      <TextGenerateEffectDemo/>
                  </div>
              </div>

          </div>
      </div>
  )
      ;
}
