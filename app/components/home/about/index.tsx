'use client'
import { MoveRight, CodeXml, PencilLine, ChartNoAxesCombined, UsersRound   } from 'lucide-react';
import "@/app/sass/about.scss";
import { about_section} from "@/app/types/menu";
import Badge from "@/app/components/ui/badge"
import Link from "next/link";
import React, {useEffect, useState} from "react";

const iconMap = {
    service1: CodeXml,
    service2: PencilLine,
    service3: ChartNoAxesCombined,
}
function About() {
    const [aboutData , setAboutData] = useState<about_section | null>(null);

    useEffect(() => {
        async function getAboutData() {
            const response = await fetch("/api/data-page");

            if (!response.ok) {
                throw new Error("No se pudieron obtener los datos del Service");
            }
            const data = await response.json();
            setAboutData(data.aboutData);
        }

        getAboutData();
    }, []);

    if(aboutData == null){
        return <p>Cargando datos...</p>;
    }

    return (
        <>
            <section id="nosotros" className="min-h-screen w-full flex items-start justify-center pt-10 sm:pt-1 lg:pt-0 pb-12">
                <div className="w-full max-w-7xl mx-auto px-6 sm:px-12 md:px-[90px] lg:px-[60px] 2xl:px-[5px]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-12 items-center">
                        {/*Columna izquierda*/}
                        <div className=" flex flex-col items-start gap-8 lg:gap-[3rem]">

                            <Badge titleBadge={aboutData.badge_about} icon={UsersRound}/>

                            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight text-white">
                                Tecnología que <br/>
                                <span className="text-title">impulsa tu negocio</span>
                            </h1>

                            <div className="flex flex-col gap-4 text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl lg:max-w-xl">
                                <p>
                                    {aboutData.subtitle1}
                                </p>
                                <p>
                                    {aboutData.subtitle2}
                                </p>
                            </div>

                            <div className="pt-2 lg:mb-8">
                                <Link href="#" className="btn-about">
                                    <span>Nuestro trabajo</span>
                                    <MoveRight/>
                                </Link>
                            </div>
                        </div>

                        {/*Columna derecha*/}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8 sm:gap-x-10 lg:gap-10">
                            {aboutData.services.map((item, index) => {
                                const IconComponent = iconMap[item.iconName as keyof typeof iconMap];
                                return (
                                    <div
                                        key={index}
                                        className={`flex items-start gap-5 ${index !== 0 ? 'lg:pt-8' : ''}`}
                                    >
                                        <div className={`service-icon-box shrink-0 ${item.bgColor}`}>
                                            <IconComponent className="service-icon"/>
                                        </div>
                                        <div className="space-y-1 min-w-0">
                                            <h3 className="text-lg font-bold text-white tracking-wide">
                                                {item.title}
                                            </h3>
                                            <p className="text-gray-300 text-sm leading-relaxed max-w-md">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;