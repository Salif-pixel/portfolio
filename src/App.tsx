
import './App.css'

import {Bienvenue} from "./components/preview/Bienvenue.tsx";
import profile from './assets/salif.jpg'
import music from './assets/onemorenight.mp3'
import {AnimationControls, motion, useAnimate} from 'framer-motion';
import {Competence} from "./components/preview/Competence.tsx";
import React, {useRef, useState} from "react";


function App() {

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const [scope, animated]: [React.MutableRefObject<null>, AnimationControls] = useAnimate();
    const [work, setWork] = React.useState(false);

    const animation = async (): Promise<void> => {
try {


    const newwork = !work

    if (newwork) {
        await Promise.all([

            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            animated(
                "#Bienvenue",
                {opacity: 0},
                {duration: 0.1}
            ),
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            animated(
                "#Competence",
                {opacity: 0, height: "fit-content"},
                {duration: 0.1}
            ),
        ])


        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        await animated(
            "#Bienvenue",
            {opacity: 0, width: 0},
            {duration: 0.1}
        );
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        await animated(
            "#Competence",
            {opacity: 1},
            {duration: 0.5}
        );
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        await animated("#app", {overflow: "hidden"}, {duration: 0.1});
    } else {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        await animated(
            "#Competence",
            {opacity: 0},
            {duration: 0.1}
        );
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        await animated(
            "#Competence",
            {height: 0},
            {duration: 0.1}
        );
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        await animated(
            "#Bienvenue",
            {width: "100vw"},
            {duration: 0.1}
        );


        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        await animated(
            "#Bienvenue",
            {opacity: 1},
            {duration: 0.4}
        );
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        await animated("#app", {overflow: "auto"}, {duration: 0.1});

    }
}catch (e){ /* empty */ }
    };
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayPauseMusic = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };


    return (
    <>

    <div ref={scope} id={`app`}
         className="bg-black/[0.96] antialiased bg-grid-white/[0.02] relative w-screen overflow-hidden ">
        <div className={`w-fit h-fit flex flex-row `}>
            <div id={`Bienvenue`} className={`w-screen h-screen `}>
                <motion.img initial={{scale: 1, y: -250, opacity: 0}} animate={{opacity: 1}} transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 25,
                }} className={`absolute w-100 h-100  lg:block hidden right-0`} src={profile}/>

                <motion.img initial={{scale: 1, y: 0, opacity: 0,}}
                            animate={{opacity: 1}} transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 25,
                }} className={`absolute w-100 h-100  bottom-0  lg:hidden  right-0`}
                            src={profile}/>


                <Bienvenue/>
            </div>
            <motion.div id={'Competence'} className={`w-screen h-screen bg-black`}>
                <Competence/>
            </motion.div>
        </div>

        <div className={` fixed bottom-0 left-0 flex justify-center z-50 right-0 text-white`}>
            <div className={`mr-10 flex flex-col`}>
                <h1 className={`hover:text-gray-700 cursor-pointer`} onClick={() => {
                    if(work){
                    setWork(false);

                    animation();
                    }
                }}>Bienvenue</h1>
                <motion.div initial={{width: 0}} animate={{width: 75}} transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 25,
                }}
                            className={!work ? `h-1 mt-3  rounded-lg bg-white` : `h-1 mt-3 hidden  rounded-lg bg-white`}></motion.div>
            </div>
            <div className={`mr-10 flex flex-col`}>
                <h1 className={`hover:text-gray-700 cursor-pointer`} onClick={() => {
                    if(!work){
                    setWork(true);

                    animation();
                    }
                }}>Compétences</h1>
                <motion.div initial={{width: 0}} animate={{width: 90}} transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 25,
                }}
                            className={work ? `h-1 mt-3  rounded-lg bg-white` : `h-1 mt-3 hidden  rounded-lg bg-white`}></motion.div>
            </div>

            {isPlaying?<svg onClick={handlePlayPauseMusic}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className={`cursor-pointer size-6`}>
                <path fillRule="evenodd"
                      d="M19.952 1.651a.75.75 0 0 1 .298.599V16.303a3 3 0 0 1-2.176 2.884l-1.32.377a2.553 2.553 0 1 1-1.403-4.909l2.311-.66a1.5 1.5 0 0 0 1.088-1.442V6.994l-9 2.572v9.737a3 3 0 0 1-2.176 2.884l-1.32.377a2.553 2.553 0 1 1-1.402-4.909l2.31-.66a1.5 1.5 0 0 0 1.088-1.442V5.25a.75.75 0 0 1 .544-.721l10.5-3a.75.75 0 0 1 .658.122Z"
                      clipRule="evenodd"/>
            </svg>:<svg onClick={handlePlayPauseMusic} xmlns="http://www.w3.org/2000/svg" fill="black"
                                                       viewBox="0 0 24 24" strokeWidth="1.5"
                                                       stroke="currentColor" className={`cursor-pointer size-6`}>
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 0 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553Z"/>
        </svg>}
            <audio ref={audioRef} src={music}/>
        </div>


    </div>
    </>
    )
}

export default App
