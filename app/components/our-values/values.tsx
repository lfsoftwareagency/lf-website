import Badge from "@/app/components/ui/badge";
import { MessageSquareCheck } from "lucide-react";
import Link from "next/link";
import '../../sass/value.scss'

function Values() {
    return (
        <>
            <section className="min-h-screen w-full flex items-stard justify-center pt-20 pb-16 sm:pt-15 lg:pt-10">
                <div className="w-full max-w-6xl mx-auto px-6 sm:px-12 lg:px-16">
                    <div className="  gap-4 lg:gap-16 items-center text-center">

                        <div className="flex flex-col items-center gap-6 ">

                            <Badge titleBadge="NUESTROS VALORES" icon={MessageSquareCheck}/>

                            <h1 className=" text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight text-white">
                                Lo que nos
                                <span className="text-title"> mueve</span>
                            </h1>

                            <div
                                className="flex flex-col text-gray-300 text-base  sm:text-sm lg:text-base leading-relaxed max-w-xl">
                                <p>
                                    Creemos en la tecnología como una herramienta para generar impacto real. Por eso,
                                    trabajamos con compromiso, honestidad y una mentalidad siempre orientada a los resultados.
                                </p>

                            </div>

                        </div>
                        {/*Columna derecha*/}
                        <div className="flex flex-col gap-10">
                        </div>

                    </div>


                </div>


            </section>

        </>
    );
}

export default Values;