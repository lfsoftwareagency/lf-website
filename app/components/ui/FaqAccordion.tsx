"use client";

import { LucideIcon, Plus } from "lucide-react";

interface FaqItemProps {
    question: string;
    answer: string;
    icon: LucideIcon;
    isOpen: boolean;
    onToggle: () => void;
}

export default function FaqAccordion({ question, answer, icon: Icon, isOpen, onToggle }: FaqItemProps) {
    return (

        <div className="rounded-xl border border-blue-600 bg-slate-600/60 overflow-hidden">

            <button
                type="button"
                onClick={onToggle}
                aria-expanded={isOpen}
                className="w-full flex items-center gap-4 px-5 py-4 text-left cursor-pointer"
            >
                <span className="shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-blue-600">
                    <Icon className="w-6 h-6 text-white" />
                </span>

                <span className="flex-1 text-sm sm:text-base font-semibold text-white">
                    {question}
                </span>

                <Plus
                    className={`shrink-0 w-6 h-6 text-white transition-transform duration-300 ${
                        isOpen ? "rotate-45" : "rotate-0"
                    }`}
                />
            </button>

            {/* Contenedor de la respuesta: anima la altura de 0 a su tamaño real */}
            <div
                className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
            >
                {/* overflow-hidden + min-h-0 permiten que la fila se colapse a 0 */}
                <div className="overflow-hidden min-h-0">
                    <p className="px-5 pb-5 pl-[84px] text-sm text-gray-200 leading-relaxed">
                        {answer}
                    </p>
                </div>
            </div>
        </div>
    );
}