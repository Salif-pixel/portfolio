"use client";
import { motion } from "framer-motion";
import { LampContainer } from "../ui/lamp.tsx";
import {PlaceholdersAndVanishInputDemo} from "./PlaceholdersAndvanishInputDemo.tsx";
import Threedpeople from "./3dModel.tsx";



export function LampDemo() {


    return (
        <div className={`w-full h-fit bg-black`}>
            <LampContainer className={`w-full h-fit bg-black`}>

                <motion.h1
                    initial={{opacity: 0.5, y: 100}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="mt-8 text-white bg-black bg-black/[0.96] antialiased bg-grid-white/[0.02] py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
                >
                    Contactez moi <br/>

                </motion.h1>

            </LampContainer>
            <motion.div className={`w-full h-fit z-50`} initial={{y: -500}}><PlaceholdersAndVanishInputDemo/>
            </motion.div>
            <motion.div   className={`w-full flex sticky justify-center h-screen`} initial={{y: -700}}><Threedpeople/></motion.div>
        </div>


);
}
