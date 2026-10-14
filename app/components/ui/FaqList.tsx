"use client";

import {useEffect, useState} from "react";
import { CircleHelp, UsersRound, Clock, SquarePen, Headset } from "lucide-react";
import FaqAccordion from "./FaqAccordion";
import type {faq_section} from "@/app/types/menu";

const iconMap = {
    CircleHelp,
    UsersRound,
    Clock,
    SquarePen,
    Headset,
};
export default function FaqList() {
    // Índice del item abierto; null = todos cerrados
    const [openIndex, setOpenIndex] = useState<number | null>(null);
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
        <div className="flex flex-col gap-4">
            {faqData.question.map((item, index) => {
                // Buscamos el icono según el nombre guardado en el JSON
                const IconComponent = iconMap[item.iconName as keyof typeof iconMap];

                return (
                    <FaqAccordion
                        key={index}
                        icon={IconComponent}
                        question={item.question}
                        answer={item.answer}
                        isOpen={openIndex === index}
                        onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                    />
                );
            })}
        </div>
    );
}