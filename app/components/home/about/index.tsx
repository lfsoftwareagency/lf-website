import { MoveRight, CodeXml, PencilLine, ChartNoAxesCombined, UsersRound   } from 'lucide-react';
import "@/app/sass/about.scss";
import { services } from "@/app/api/json/about.json"
import Badge from "@/app/components/ui/badge"
import Link from "next/link";

const iconMap = {
    service1: CodeXml,
    service2: PencilLine,
    service3: ChartNoAxesCombined,
}
function About() {
    return (
        <>
            <section id="nosotros" className="min-h-screen w-full flex items-start justify-center pt-10 sm:pt-1 lg:pt-0 pb-12 px-4 sm:px-8 lg:px-1">
                <div className="w-full max-w-6xl mx-auto px-6 sm:px-12 lg:px-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-13 items-center">
                        {/*Columna izquierda*/}
                        <div className="flex flex-col items-start gap-8 lg:gap-[4rem]">

                            <Badge titleBadge="NOSOTROS" icon={UsersRound}/>

                            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight text-white">
                                Tecnología que <br/>
                                <span className="text-title">impulsa tu negocio</span>
                            </h1>

                            <div className="flex flex-col gap-4 text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl lg:max-w-xl">
                                <p>
                                    En L&F Software Agency convertimos ideas y necesidades de negocio en soluciones
                                    digitales funcionales, modernas y escalables.
                                </p>
                                <p>
                                    Desarrollamos software a medida, páginas web y estrategias digitales que te ayudan a
                                    optimizar procesos, conectar con tus clientes y hacer crecer tu negocio.
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
                            {services.map((item, index) => {
                                const IconComponent = iconMap[item.iconName as keyof typeof iconMap];
                                return (
                                    <div
                                        key={index}
                                        className={`flex items-start gap-5 ${index !== 0 ? 'lg:pt-8' : ''}`}
                                    >
                                        <div className={`solutions-icon-box shrink-0 ${item.bgColor}`}>
                                            <IconComponent className="solution-icon"/>
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