import {MessageSquareCheck, Handshake, Rocket, ChartNoAxesCombined, Sprout    } from "lucide-react";
import '@/app/sass/value.scss'
import {values} from '@/app/api/json/about.json'
import Badge from "@/app/components/ui/badge";

const iconValues = {
    val1 : Handshake ,
    val2 : Rocket ,
    val3 : ChartNoAxesCombined ,
    val4 : Sprout
}

function ValueSection() {
    return (
        <>
            <section className="min-h-screen w-full flex items-start justify-center pt-15 sm:pt-1 lg:-mt-10 pb-20 px-4 sm:px-8 lg:px-1">
                <div className="w-full max-w-6xl mx-auto px-6 sm:px-12 lg:px-16">
                    <div className="  gap-4 lg:gap-10 items-center text-center">

                        <div className="flex flex-col items-center gap-6 ">

                            <Badge titleBadge="NUESTROS VALORES" icon={MessageSquareCheck}/>

                            <h1 className=" text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight text-white">
                                Lo que nos
                                <span className="text-title"> mueve</span>
                            </h1>

                            <div
                                className="flex flex-col text-gray-300 text-base  sm:text-sm lg:text-sm leading-relaxed max-w-xl">
                                <p>
                                    Creemos en la tecnología como una herramienta para generar impacto real. Por eso,
                                    trabajamos con compromiso, honestidad y una mentalidad siempre orientada a los resultados.
                                </p>

                            </div>

                        </div>

                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6 mt-6">
                        {values.map((item) => {
                            const IconComponent = iconValues[item.icon as keyof typeof iconValues];

                            return (
                                <div
                                    key={item.id}
                                    className={`value-card value-card--${item.theme} flex flex-col items-center text-center lg:p-12 p-6 sm:p-8 rounded-2xl`}
                                >

                                    <div className="icon-box flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl mb-6">
                                        <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                                    </div>

                                    <h3 className="text-xl sm:text-sm lg:text-lg font-bold text-white mb-4 tracking-wide">
                                        {item.title}
                                    </h3>

                                    <p className="text-gray-300 text-sm sm:text-base lg:text-sm leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            );
                        })}

                    </div>


                </div>


            </section>

        </>
    );
}

export default ValueSection;