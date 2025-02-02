import { motion } from "framer-motion";
import notee from "../../assets/notee.png";
import jwt from "../../assets/jwt.png";
import medicare from "../../assets/medicare.png";
import {SparklesCore} from "../ui/sparkle.tsx";
import {LampDemo} from "../preview/LampDemo.tsx";

import {ThreeDCardDemo} from "./3dcardDemo.tsx";
import {TabsDemo} from "./tabsDemo.tsx";



export function Competence() {
    return (
        <motion.div initial={{height: "0vh"}} id={`Competence`}
                    className=" w-full overflow-x-hidden rounded-md flex flex-col md:items-center md:justify-center  bg-black/[0.96] antialiased bg-grid-white/[0.02] relative ">


            <div className="w-full absolute inset-0 h-screen">
                <SparklesCore
                    id="tsparticlesfullpage"
                    background="transparent"
                    minSize={0.6}
                    maxSize={1.2}
                    particleDensity={100}
                    className="w-full h-full"
                    particleColor="#FFFFFF"
                />
            </div>
            <div
                className=" p-4 max-w-7xl flex justify-start items-center mx-auto relative z-10  w-full  pt-20 md:pt-0">

                <div className={`flex flex-col`}>
                    <motion.h1 initial={{opacity: 0}} animate={{opacity: 1}} transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 25,
                    }}
                               className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                        Technos.
                    </motion.h1>
                    <motion.div initial={{width: 10}} whileInView={{width: 100}} transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 25,
                    }} className={`h-2 bg-white rounded-lg mt-2`}></motion.div>

                </div>


            </div>
            <div
                className="grid  w-full h-screen  grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-28 lg:gap-y-16">
                {industries.map((industry, index) => (

                    <div key={index}
                         className={`relative  cursor-pointer hover:bg-${industry.title}-500  group h-20 flex flex-row items-center rounded-full   text-gray-700 `}>
                        <motion.div className={`flex flex-row justify-center items-center  w-full`}>
                            <motion.div initial={{scale: 1.9}}
                                        className={`ml-4 mr-10 bg-white p-2 border-1 rounded-full shadow shadow-gray-500`}>{industry.icon}</motion.div>
                            <p className={`  text-white`}>{industry.title}</p>
                        </motion.div>
                    </div>
                ))}
            </div>
            <div
                className={` w-screen h-fit `}>
                <div className={`flex flex-col ml-10`}>
                    <motion.h1 initial={{opacity: 0}} animate={{opacity: 1}} transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 25,
                    }}
                               className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                        Projets.
                    </motion.h1>
                    <motion.div initial={{width: 10}} whileInView={{width: 100}} transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 25,
                    }} className={`h-2 bg-white rounded-lg mt-4`}></motion.div>

                </div>
                <div className={`grid  w-screen h-fit  grid-cols-1  md:grid-cols-2  gap-x-4 gap-y-28 lg:gap-y-16`}>
                    {industries2.map((industry,index) => (
                        <ThreeDCardDemo key={index} title={industry.title} description={industry.description}
                                        image={industry.image}/>
                    ))}
                </div>

            </div>
            <div className={`flex flex-col `}>
                <motion.h1 initial={{opacity: 0}} animate={{opacity: 1}} transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 25,
                }}
                           className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                    Passion.
                </motion.h1>
                <motion.div initial={{width: 10}} whileInView={{width: 100}} transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 25,
                }} className={`h-2 bg-white rounded-lg mt-4`}></motion.div>

            </div>

            <TabsDemo/>
            <LampDemo/>



        </motion.div>
    )

}

const industries = [
    {
        techno: "React",
        icon: <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            height="1em"
            width="1em"

        >
            <path
                d="M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.85-1.87 1.85-1.03 0-1.87-.85-1.87-1.85 0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 01-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9c-.6 0-1.17 0-1.71.03-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03.6 0 1.17 0 1.71-.03.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68 0 1.69-1.83 2.93-4.37 3.68.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.38 1.95-1.46-.84-1.62-3.05-1-5.63-2.54-.75-4.37-1.99-4.37-3.68 0-1.69 1.83-2.93 4.37-3.68-.62-2.58-.46-4.79 1-5.63 1.47-.84 3.46.12 5.38 1.95 1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26 2.1-.63 3.28-1.53 3.28-2.26 0-.73-1.18-1.63-3.28-2.26-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26-2.1.63-3.28 1.53-3.28 2.26 0 .73 1.18 1.63 3.28 2.26.25-.76.55-1.51.89-2.26m9 2.26l-.3.51c.31-.05.61-.1.88-.16-.07-.28-.18-.57-.29-.86l-.29.51m-2.89 4.04c1.59 1.5 2.97 2.08 3.59 1.7.64-.35.83-1.82.32-3.96-.77.16-1.58.28-2.4.36-.48.67-.99 1.31-1.51 1.9M8.08 9.74l.3-.51c-.31.05-.61.1-.88.16.07.28.18.57.29.86l.29-.51m2.89-4.04C9.38 4.2 8 3.62 7.37 4c-.63.35-.82 1.82-.31 3.96a22.7 22.7 0 012.4-.36c.48-.67.99-1.31 1.51-1.9z"/>
        </svg>,
        title: "ReactTS/JS"
    },
    {
        techno: "NestJS",
        icon: <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            height="1em"
            width="1em"

        >
            <path
                d="M14.131.047c-.173 0-.334.037-.483.087.316.21.49.49.576.806.007.043.019.074.025.117a.681.681 0 01.013.112c.024.545-.143.614-.26.936-.18.415-.13.861.086 1.22a.74.74 0 00.074.137c-.235-1.568 1.073-1.803 1.314-2.293.019-.428-.334-.713-.613-.911a1.37 1.37 0 00-.732-.21zM16.102.4c-.024.143-.006.106-.012.18-.006.05-.006.112-.012.161-.013.05-.025.1-.044.149-.012.05-.03.1-.05.149l-.067.142c-.02.025-.031.05-.05.075l-.037.055a2.152 2.152 0 01-.093.124c-.037.038-.068.081-.112.112v.006c-.037.031-.074.068-.118.1-.13.099-.278.173-.415.266-.043.03-.087.056-.124.093a.906.906 0 00-.118.099c-.043.037-.074.074-.111.118-.031.037-.068.08-.093.124a1.582 1.582 0 00-.087.13c-.025.05-.043.093-.068.142-.019.05-.037.093-.05.143a2.007 2.007 0 00-.043.155c-.006.025-.006.056-.012.08-.007.025-.007.05-.013.075 0 .05-.006.105-.006.155 0 .037 0 .074.006.111 0 .05.006.1.019.155.006.05.018.1.03.15.02.049.032.098.05.148.013.03.031.062.044.087l-1.426-.552c-.241-.068-.477-.13-.719-.186l-.39-.093c-.372-.074-.75-.13-1.128-.167-.013 0-.019-.006-.031-.006A11.082 11.082 0 008.9 2.855c-.378.025-.756.074-1.134.136a12.45 12.45 0 00-.837.174l-.279.074c-.092.037-.18.08-.266.118l-.205.093c-.012.006-.024.006-.03.012-.063.031-.118.056-.174.087a2.738 2.738 0 00-.236.118c-.043.018-.086.043-.124.062a.559.559 0 01-.055.03c-.056.032-.112.063-.162.094a1.56 1.56 0 00-.148.093c-.044.03-.087.055-.124.086-.006.007-.013.007-.019.013-.037.025-.08.056-.118.087l-.012.012-.093.074c-.012.007-.025.019-.037.025-.031.025-.062.056-.093.08-.006.013-.019.02-.025.025-.037.038-.074.069-.111.106-.007 0-.007.006-.013.012a1.742 1.742 0 00-.111.106c-.007.006-.007.012-.013.012a1.454 1.454 0 00-.093.1c-.012.012-.03.024-.043.036a1.374 1.374 0 01-.106.112c-.006.012-.018.019-.024.03-.05.05-.093.1-.143.15l-.018.018c-.1.106-.205.211-.317.304-.111.1-.229.192-.347.273a3.777 3.777 0 01-.762.421c-.13.056-.267.106-.403.149-.26.056-.527.161-.756.18-.05 0-.105.012-.155.018l-.155.037-.149.056c-.05.019-.099.044-.148.068-.044.031-.093.056-.137.087a1.011 1.011 0 00-.124.106c-.043.03-.087.074-.124.111-.037.043-.074.08-.105.124-.031.05-.068.093-.093.143a1.092 1.092 0 00-.087.142c-.025.056-.05.106-.068.161-.019.05-.037.106-.056.161-.012.05-.025.1-.03.15 0 .005-.007.012-.007.018-.012.056-.012.13-.019.167C.006 7.95 0 7.986 0 8.03a.657.657 0 00.074.31v.006c.019.037.044.075.069.112.024.037.05.074.08.111.031.031.068.069.106.1a.906.906 0 00.117.099c.149.13.186.173.378.272.031.019.062.031.1.05.006 0 .012.006.018.006 0 .013 0 .019.006.031a1.272 1.272 0 00.08.298c.02.037.032.074.05.111.007.013.013.025.02.031.024.05.049.093.073.137l.093.13c.031.037.069.08.106.118.037.037.074.068.118.105 0 0 .006.006.012.006.037.031.074.062.112.087a.986.986 0 00.136.08c.043.025.093.05.142.069a.73.73 0 00.124.043c.007.006.013.006.025.012.025.007.056.013.08.019-.018.335-.024.65.026.762.055.124.328-.254.6-.688-.036.428-.061.93 0 1.079.069.155.44-.329.763-.862 4.395-1.016 8.405 2.02 8.826 6.31-.08-.67-.905-1.041-1.283-.948-.186.458-.502 1.047-1.01 1.413.043-.41.025-.83-.062-1.24a4.009 4.009 0 01-.769 1.562c-.588.043-1.177-.242-1.487-.67-.025-.018-.031-.055-.05-.08-.018-.043-.037-.087-.05-.13a.515.515 0 01-.037-.13c-.006-.044-.006-.087-.006-.137v-.093a.992.992 0 01.031-.13c.013-.043.025-.086.044-.13.024-.043.043-.087.074-.13.105-.298.105-.54-.087-.682a.706.706 0 00-.118-.062c-.024-.006-.055-.018-.08-.025l-.05-.018a.847.847 0 00-.13-.031.472.472 0 00-.13-.019 1.01 1.01 0 00-.136-.012c-.031 0-.062.006-.093.006a.484.484 0 00-.137.019c-.043.006-.086.012-.13.024a1.068 1.068 0 00-.13.044c-.043.018-.08.037-.124.056-.037.018-.074.043-.118.062-1.444.942-.582 3.148.403 3.787-.372.068-.75.148-.855.229l-.013.012c.267.161.546.298.837.416.397.13.818.247 1.004.297v.006a5.996 5.996 0 001.562.112c2.746-.192 4.996-2.281 5.405-5.033l.037.161c.019.112.043.23.056.347v.006c.012.056.018.112.025.162v.024c.006.056.012.112.012.162.006.068.012.136.012.204v.1c0 .03.007.067.007.098 0 .038-.007.075-.007.112v.087c0 .043-.006.08-.006.124 0 .025 0 .05-.006.08 0 .044-.006.087-.006.137-.006.018-.006.037-.006.055l-.02.143c0 .019 0 .037-.005.056-.007.062-.019.118-.025.18v.012l-.037.174v.018l-.037.167c0 .007-.007.02-.007.025a1.663 1.663 0 01-.043.168v.018c-.019.062-.037.118-.05.174-.006.006-.006.012-.006.012l-.056.186c-.024.062-.043.118-.068.18-.025.062-.043.124-.068.18-.025.062-.05.117-.074.18h-.007c-.024.055-.05.117-.08.173a.302.302 0 01-.019.043c-.006.006-.006.013-.012.019a5.867 5.867 0 01-1.742 2.082c-.05.031-.099.069-.149.106-.012.012-.03.018-.043.03a2.603 2.603 0 01-.136.094l.018.037h.007l.26-.037h.006c.161-.025.322-.056.483-.087.044-.006.093-.019.137-.031l.087-.019c.043-.006.086-.018.13-.024.037-.013.074-.02.111-.031.62-.15 1.221-.354 1.798-.595a9.926 9.926 0 01-3.85 3.142c.714-.05 1.426-.167 2.114-.366a9.903 9.903 0 005.857-4.68 9.893 9.893 0 01-1.667 3.986 9.758 9.758 0 001.655-1.376 9.824 9.824 0 002.61-5.268c.21.98.272 1.99.18 2.987 4.474-6.241.371-12.712-1.346-14.416-.006-.013-.012-.019-.012-.031-.006.006-.006.006-.006.012 0-.006 0-.006-.007-.012 0 .074-.006.148-.012.223a8.34 8.34 0 01-.062.415c-.03.136-.068.273-.105.41-.044.13-.093.266-.15.396a5.322 5.322 0 01-.185.378 4.735 4.735 0 01-.477.688c-.093.111-.192.21-.292.31a3.994 3.994 0 01-.18.155l-.142.124a3.459 3.459 0 01-.347.241 4.295 4.295 0 01-.366.211c-.13.062-.26.118-.39.174a4.364 4.364 0 01-.818.223c-.143.025-.285.037-.422.05a4.914 4.914 0 01-.297.012 4.66 4.66 0 01-.422-.025 3.137 3.137 0 01-.421-.062 3.136 3.136 0 01-.415-.105h-.007c.137-.013.273-.025.41-.05a4.493 4.493 0 00.818-.223c.136-.05.266-.112.39-.174.13-.062.248-.13.372-.204.118-.08.235-.161.347-.248.112-.087.217-.18.316-.279.105-.093.198-.198.291-.304.093-.111.18-.223.26-.334.013-.019.026-.044.038-.062.062-.1.124-.199.18-.298a4.272 4.272 0 00.334-.775c.044-.13.075-.266.106-.403.025-.142.05-.278.062-.415.012-.142.025-.285.025-.421 0-.1-.007-.199-.013-.298a6.726 6.726 0 00-.05-.415 4.493 4.493 0 00-.092-.415c-.044-.13-.087-.267-.137-.397-.05-.13-.111-.26-.173-.384-.069-.124-.137-.248-.211-.366a6.843 6.843 0 00-.248-.34c-.093-.106-.186-.212-.285-.317a3.878 3.878 0 00-.161-.155c-.28-.217-.57-.421-.862-.607a1.154 1.154 0 00-.124-.062 2.415 2.415 0 00-.589-.26z"/>
        </svg>,
        title: "NestJS"
    },
    {
        techno: "Tailwind",
        icon: <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            height="1em"
            width="1em"

        >
            <path
                d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
        </svg>,
        title: "Tailwind css"
    },
    {
        techno: "Prisma",
        icon:  <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            height="1em"
            width="1em"

        >
            <path d="M21.807 18.285L13.553.756a1.324 1.324 0 00-1.129-.754 1.31 1.31 0 00-1.206.626l-8.952 14.5a1.356 1.356 0 00.016 1.455l4.376 6.778a1.408 1.408 0 001.58.581l12.703-3.757c.389-.115.707-.39.873-.755s.164-.783-.007-1.145zm-1.848.752L9.18 22.224a.452.452 0 01-.575-.52l3.85-18.438c.072-.345.549-.4.699-.08l7.129 15.138a.515.515 0 01-.325.713z" />
        </svg>,
        title: "prisma      "
    },
    {
        techno: "Flutter",
        icon:  <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            height="1em"
            width="1em"

        >
            <path d="M13.9 2.01L3.9 12l3.09 3.09 2.71-2.7L20.09 2l-6.19.01zm.82 14.6l5.39-5.38h-5.93c-.11 0-.26 0-.34.07l-2.23 2.23-3.09 3.07 3.09 3.1 2.15 2.15c.07.07.14.17.26.15h6.07z" />
        </svg>,
        title: "Flutter"
    },
    {
        techno: "Mysql",
        icon:  <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            height="1em"
            width="1em"

        >
            <path d="M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.153zM5.77 18.695h-.927a50.854 50.854 0 00-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01a72.892 72.892 0 00-.195 4.41H0c.055-1.966.192-3.81.41-5.53h1.15l1.335 4.064h.008l1.347-4.064h1.095c.242 2.015.384 3.86.428 5.53zm4.017-4.08c-.378 2.045-.876 3.533-1.492 4.46-.482.716-1.01 1.073-1.583 1.073-.153 0-.34-.046-.566-.138v-.494c.11.017.24.026.386.026.268 0 .483-.075.647-.222.197-.18.295-.382.295-.605 0-.155-.077-.47-.23-.944L6.23 14.615h.91l.727 2.36c.164.536.233.91.205 1.123.4-1.064.678-2.227.835-3.483zm12.325 4.08h-2.63v-5.53h.885v4.85h1.745zm-3.32.135l-1.016-.5c.09-.076.177-.158.255-.25.433-.506.648-1.258.648-2.253 0-1.83-.718-2.746-2.155-2.746-.704 0-1.254.232-1.65.697-.43.508-.646 1.256-.646 2.245 0 .972.19 1.686.574 2.14.35.41.877.615 1.583.615.264 0 .506-.033.725-.098l1.325.772.36-.622zM15.5 17.588c-.225-.36-.337-.94-.337-1.736 0-1.393.424-2.09 1.27-2.09.443 0 .77.167.977.5.224.362.336.936.336 1.723 0 1.404-.424 2.108-1.27 2.108-.445 0-.77-.167-.978-.5zm-1.658-.425c0 .47-.172.856-.516 1.156-.344.3-.803.45-1.384.45-.543 0-1.064-.172-1.573-.515l.237-.476c.438.22.833.328 1.19.328.332 0 .593-.073.783-.22a.754.754 0 00.3-.615c0-.33-.23-.61-.648-.845-.388-.213-1.163-.657-1.163-.657-.422-.307-.632-.636-.632-1.177 0-.45.157-.81.47-1.085.315-.278.72-.415 1.22-.415.512 0 .98.136 1.4.41l-.213.476a2.726 2.726 0 00-1.064-.23c-.283 0-.502.068-.654.206a.685.685 0 00-.248.524c0 .328.234.61.666.85.393.215 1.187.67 1.187.67.433.305.648.63.648 1.168zm9.382-5.852c-.535-.014-.95.04-1.297.188-.1.04-.26.04-.274.167.055.053.063.14.11.214.08.134.218.313.346.407.14.11.28.216.427.31.26.16.555.255.81.416.145.094.293.213.44.313.073.05.12.14.214.172v-.02c-.046-.06-.06-.147-.105-.214-.067-.067-.134-.127-.2-.193a3.223 3.223 0 00-.695-.675c-.214-.146-.682-.35-.77-.595l-.013-.014c.146-.013.32-.066.46-.106.227-.06.435-.047.67-.106.106-.027.213-.06.32-.094v-.06c-.12-.12-.21-.283-.334-.395a8.867 8.867 0 00-1.104-.823c-.21-.134-.476-.22-.697-.334-.08-.04-.214-.06-.26-.127-.12-.146-.19-.34-.275-.514a17.69 17.69 0 01-.547-1.163c-.12-.262-.193-.523-.34-.763-.69-1.137-1.437-1.826-2.586-2.5-.247-.14-.543-.2-.856-.274-.167-.008-.334-.02-.5-.027-.11-.047-.216-.174-.31-.235-.38-.24-1.364-.76-1.644-.072-.18.434.267.862.422 1.082.115.153.26.328.34.5.047.116.06.235.107.356.106.294.207.622.347.897.073.14.153.287.247.413.054.073.146.107.167.227-.094.136-.1.334-.154.5-.24.757-.146 1.693.194 2.25.107.166.362.534.703.393.3-.12.234-.5.32-.835.02-.08.007-.133.048-.187v.015c.094.188.188.367.274.555.206.328.566.668.867.895.16.12.287.328.487.402v-.02h-.015c-.043-.058-.1-.086-.154-.133a3.445 3.445 0 01-.35-.4 8.76 8.76 0 01-.747-1.218c-.11-.21-.202-.436-.29-.643-.04-.08-.04-.2-.107-.24-.1.146-.247.273-.32.453-.127.288-.14.642-.188 1.01-.027.007-.014 0-.027.014-.214-.052-.287-.274-.367-.46-.2-.475-.233-1.238-.06-1.785.047-.14.247-.582.167-.716-.042-.127-.174-.2-.247-.303a2.478 2.478 0 01-.24-.427c-.16-.374-.24-.788-.414-1.162-.08-.173-.22-.354-.334-.513-.127-.18-.267-.307-.368-.52-.033-.073-.08-.194-.027-.274.014-.054.042-.075.094-.09.088-.072.335.022.422.062.247.1.455.194.662.334.094.066.195.193.315.226h.14c.214.047.455.014.655.073.355.114.675.28.962.46a5.953 5.953 0 012.085 2.286c.08.154.115.295.188.455.14.33.313.663.455.982.14.315.275.636.476.897.1.14.502.213.682.286.133.06.34.115.46.188.23.14.454.3.67.454.11.076.443.243.463.378z" />
        </svg>,
        title: "Mysql"
    },
    {
        techno: "php",
        icon: <svg
            viewBox="0 0 32 32"
            fill="currentColor"
            height="1em"
            width="1em"

        >
            <path
                fill="currentColor"
                d="M10.372 13.069H6.405L4.69 21.753h2.037l.429-2.251h1.93c1.822.107 3.86-1.394 3.86-3.967 0-1.501-.858-2.359-2.573-2.466zm-1.501 4.825H7.584l.536-3.216h1.394c.75 0 1.287.322 1.287.965-.107 1.823-.965 2.144-1.93 2.251zm8.684-4.825h-1.93l.429-2.251h-2.037l-1.715 8.684h2.037l.965-4.824h1.608c.751 0 .751.322.643.858l-.75 3.967h2.144l.75-4.396c.214-1.072-.429-1.93-2.144-2.037zm7.183 0h-3.967l-1.715 8.684h2.037l.429-2.251h1.93c1.823.107 3.86-1.394 3.86-3.967 0-1.501-.858-2.359-2.573-2.466zm-1.501 4.825H21.95l.536-3.216h1.394c.751 0 1.287.322 1.287.965-.107 1.823-.965 2.144-1.93 2.251z"
            />
        </svg>,
        title: "Php"
    },
    {
        techno: "java",
        icon: <svg
            viewBox="0 0 32 32"
            fill="currentColor"
            height="1em"
            width="1em"

        >
            <path
                fill="currentColor"
                d="M12.557 23.22s-.982.571.699.765c2.037.232 3.079.199 5.324-.226 0 0 .59.37 1.415.691-5.033 2.157-11.39-.125-7.437-1.23zm-.615-2.815s-1.102.816.581.99c2.176.224 3.895.243 6.869-.33 0 0 .411.417 1.058.645-6.085 1.779-12.863.14-8.508-1.305zm5.185-4.775c1.24 1.428-.326 2.713-.326 2.713s3.149-1.625 1.703-3.661c-1.351-1.898-2.386-2.841 3.221-6.093 0 0-8.801 2.198-4.598 7.042zm6.656 9.672s.727.599-.801 1.062c-2.905.88-12.091 1.146-14.643.035-.917-.399.803-.953 1.344-1.069.564-.122.887-.1.887-.1-1.02-.719-6.594 1.411-2.831 2.021 10.262 1.664 18.706-.749 16.044-1.95zm-10.754-7.813s-4.673 1.11-1.655 1.513c1.274.171 3.814.132 6.181-.066 1.934-.163 3.876-.51 3.876-.51s-.682.292-1.175.629c-4.745 1.248-13.911.667-11.272-.609 2.232-1.079 4.046-.956 4.046-.956zm8.383 4.685c4.824-2.506 2.593-4.915 1.037-4.591-.382.079-.552.148-.552.148s.142-.222.412-.318c3.079-1.083 5.448 3.193-.994 4.887 0 0 .075-.067.097-.126zM18.503 3.337s2.671 2.672-2.534 6.781c-4.174 3.296-.952 5.176-.002 7.323-2.436-2.198-4.224-4.133-3.025-5.934 1.761-2.644 6.638-3.925 5.56-8.17zm-5 25.629c4.63.296 11.74-.164 11.908-2.355 0 0-.324.831-3.826 1.49-3.952.744-8.826.657-11.716.18 0 0 .592.49 3.635.685z"
            />
        </svg>,
        title: "java"
    },
    {
        techno: "Typescript",
        icon:  <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            height="1em"
            width="1em"

        >
            <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 011.306.34v2.458a3.95 3.95 0 00-.643-.361 5.093 5.093 0 00-.717-.26 5.453 5.453 0 00-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 00-.623.242c-.17.104-.3.229-.393.374a.888.888 0 00-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 01-1.012 1.085 4.38 4.38 0 01-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 01-1.84-.164 5.544 5.544 0 01-1.512-.493v-2.63a5.033 5.033 0 003.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 00-.074-1.089 2.12 2.12 0 00-.537-.5 5.597 5.597 0 00-.807-.444 27.72 27.72 0 00-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 011.47-.629 7.536 7.536 0 011.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
        </svg>,
        title: "Typescript"
    },


];
const industries2 = [
    {
        title: "Plateforme de gestion des patients",
        description: "Une solution complète pour les professionnels de la santé, permettant de gérer efficacement les dossiers des patients. Cette plateforme offre des fonctionnalités telles que l'enregistrement des informations médicales, la planification des rendez-vous, le suivi des traitements et l'accès sécurisé aux données des patients. Elle vise à améliorer la qualité des soins et à faciliter la communication entre les médecins et les patients.",
        image: medicare
    },
    {
        title: "Plateforme de notes avec page profil",
        description: "Un outil interactif pour les étudiants et les enseignants permettant de prendre des notes, de partager des informations et de suivre les progrès académiques. La plateforme inclut une page de profil personnalisée pour chaque utilisateur, où ils peuvent afficher leurs cours, leurs projets et leurs performances. Elle offre également des fonctionnalités de collaboration en temps réel, facilitant l'apprentissage et l'enseignement à distance.",
        image:notee
    },
    {
        title: "Plateforme de gestion d'utilisateurs avec JWT",
        description: "Une application sécurisée pour la gestion des utilisateurs, intégrant l'authentification et l'autorisation via JSON Web Tokens (JWT). Cette plateforme permet aux administrateurs de créer, lire, mettre à jour et supprimer des comptes utilisateurs, de gérer les rôles et les permissions, et de garantir un accès sécurisé aux ressources sensibles. Idéale pour les entreprises qui souhaitent protéger leurs données tout en offrant une expérience utilisateur fluide.",
        image: jwt
    }
];

