import { Target, Presentation, Headset, UsersRound} from "lucide-react";
import Badge from "@/app/components/ui/badge";
import {services, solutions} from "@/app/api/json/services.json"
import '@/app/sass/service.scss'

const iconService = {
    service1: UsersRound,
    service2: UsersRound,
    service3: UsersRound
}

const  iconSolutions = {
    solution1: Target,
    solution2: Presentation,
    solution3: Headset
}


function Services() {
    return (
        <>
            <section id="servicios"
                     className="min-h-screen w-full flex items-start justify-center pt-10 sm:pt-1 lg:pt-0 pb-12 px-4 sm:px-8 lg:px-1">
                <div className="w-full max-w-6xl mx-auto px-6 sm:px-12 lg:px-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-13 items-center">
                        {/*Columna izquierda*/}
                        <div className="flex flex-col items-start gap-8 lg:gap-[1.5rem] lg:-mt-6 ">

                            <Badge titleBadge="SOLUCIONES DE IMPACTO" icon={UsersRound}/>

                            <div className="w-full flex flex-col gap-6 sm:gap-8">
                                {services.map((item) => {
                                    const IconComponent = iconService[item.iconName as keyof typeof iconService];

                                    return (
                                        <div
                                            key={item.id}
                                            className={`service-card-wrapper  service-card-wrapper--${item.bgColor}`}
                                        >
                                            <div className="service-card  flex flex-col sm:flex-row items-start gap-4 sm:gap-6 p-6 sm:p-7">

                                                <div className="service-card icon-box shrink-0 flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20">
                                                    <IconComponent className="w-8 h-8 sm:w-10 sm:h-10" />
                                                </div>

                                                {/* Contenido textual */}
                                                <div className="service-card body_card">
                                                    <h3 className="text-lg sm:text-lg lg:text-base md:text-lg font-bold leading-snug">
                                                        {item.title}
                                                    </h3>

                                                    <span className="service-card__divider" />

                                                    <p className="text-sm sm:text-xs lg:text-xs md:text-base leading-relaxed">
                                                        {item.description}
                                                    </p>
                                                </div>

                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                        </div>

                        {/*Columna derecha*/}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8 sm:gap-x-10 lg:gap-2">
                            <h1 className="text-4xl lg:text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight text-white">
                                Impulsamos tu negocio con <br/>
                                <span className="title-services">tecnología sólida </span>
                                y escalable
                            </h1>

                            <div className="flex flex-col mb-2 text-gray-300 text-base sm:text-lg lg:text-base leading-relaxed max-w-2xl lg:max-w-xl">
                                <p>
                                    Soluciones digitales a medida para empresas que quieren crecer.
                                </p>
                            </div>

                            {solutions.map((item, index) => {
                                const IconComponent = iconSolutions[item.icon as keyof typeof iconSolutions];
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

export default Services;