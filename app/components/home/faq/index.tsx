'use client';
import Badge from "@/app/components/ui/badge";
import { MessageCircleQuestionMark } from "lucide-react";
import {faq_section} from "@/app/types/menu";
import React, {useEffect, useState} from "react";
import FaqList from '@/app/components/ui/FaqList'
import "@/app/sass/faq.modulo.scss";
import Image from "next/image";


function FaqSection() {
    const [faqData, setFaqData] = useState<faq_section | null>(null);

    useEffect(() => {
        async function getFaqData() {
            const response = await fetch("/api/data-page");

            if (!response.ok) {
                throw new Error("No se pudieron obtener los datos del FAQ");
            }
            const data = await response.json();
            setFaqData(data.faqData);
        }

        getFaqData();

    }, []);

    if (faqData === null) {
        return <p>Cargando preguntas frecuentes...</p>;
    }

    return (
        <>
            <section id="faq" className="min-h-screen w-full flex items-start justify-center pt-10 sm:pt-1 lg:pt-0 pb-12">
                <div className="w-full max-w-7xl mx-auto px-6 sm:px-12 md:px-[90px] lg:px-[60px] 2xl:px-[5px]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-12 items-center">
                        {/*Columna izquierda*/}
                        <div className=" flex flex-col items-start gap-8 lg:gap-[1rem]">

                            <Badge titleBadge={faqData.badge_text} icon={MessageCircleQuestionMark}/>

                            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight text-white">
                                Preguntas <br/>
                                <span className="text-title">frecuentes</span>
                            </h1>
                            <div
                                className="flex flex-col gap-4 text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl lg:max-w-lg">
                                <p>
                                    {faqData.subtitle}
                                </p>
                            </div>
                            <div className="faq_imagen">
                                {faqData.image && (
                                    <Image
                                        src={faqData.image.image}
                                        alt={faqData.image.title}
                                        width={500}
                                        height={300}
                                        priority
                                    />
                                )}
                            </div>
                        </div>

                        {/*Columna derecha*/}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8 sm:gap-x-10 lg:gap-10">
                            <FaqList/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default FaqSection;