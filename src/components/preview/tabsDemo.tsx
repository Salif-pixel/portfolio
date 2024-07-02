"use client";
import basket from  "../../assets/basket.jpg";
import chat from "../../assets/chat.jpg";
import coder from "../../assets/coder.jpg";
import conduire from "../../assets/conduire.jpg";
import films from "../../assets/films.jpg";
import mangas from "../../assets/mangas.jpg";
import marvel from "../../assets/marvel.jpg";

import { Tabs } from "../ui/tabs";

export function TabsDemo() {
    const tabs = [
        {
            title: "Basket",
            value: "Basket",
            content: (
                <div
                    className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-black bg-gradient-to-br from-purple-700 to-violet-900 bg-cover bg-center"
                    style={{ backgroundImage: `url(${basket})` }}>
                    {/*<p>Jouer au basket</p>*/}

                </div>

            ),
        },
        {
            title: "Mangas",
            value: "mangas",
            content: (
                <div
                    className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-black bg-gradient-to-br from-purple-700 to-violet-900 bg-cover bg-center"
                    style={{ backgroundImage: `url(${mangas})` }}>
                    {/*<p>Regarder des animes/mangas/Webtoons</p>*/}

                </div>
            ),
        },
        {
            title: "coder",
            value: "coder",
            content: (
                <div    className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-black bg-gradient-to-br from-purple-700 to-violet-900 bg-cover bg-center"
                        style={{ backgroundImage: `url(${coder})` }}>
                    {/*<p>Developper des applications</p>*/}

                </div>
            ),
        },
        {
            title: "marvel",
            value: "marvel",
            content: (
                <div    className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-black bg-gradient-to-br from-purple-700 to-violet-900 bg-cover bg-center"
                        style={{ backgroundImage: `url(${marvel})` }}>
                    {/*<p>Regarder des series marvel/DC </p>*/}

                </div>
            ),
        },
        {
            title: "films",
            value: "films",
            content: (
                <div  className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-black bg-gradient-to-br from-purple-700 to-violet-900 bg-cover bg-center"
                      style={{ backgroundImage: `url(${films})` }}>
                    {/*<p>Regarder des series  et films netflix</p>*/}

                </div>
            ),
        },
        {
            title: "conduire",
            value: "conduire",
            content: (
                <div  className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-black bg-gradient-to-br from-purple-700 to-violet-900 bg-cover bg-center"
                      style={{ backgroundImage: `url(${conduire})` }}>
                    {/*<p>Se promener de temps en temps avec la voiture</p>*/}

                </div>
            ),
        },
        {
            title: "chat",
            value: "chat",
            content: (
                <div  className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-black bg-gradient-to-br from-purple-700 to-violet-900 bg-cover bg-center"
                      style={{ backgroundImage: `url(${chat})` }}>
                    {/*<p>Discuter avec des amis</p>*/}

                </div>
            ),
        },
    ];

    return (
        <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
            <Tabs tabs={tabs} />
        </div>
    );
}


