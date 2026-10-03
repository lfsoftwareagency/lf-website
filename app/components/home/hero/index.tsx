'use client';

import Image from "next/image";
import React, { useEffect, useState } from 'react';
import { hero_img } from '@/app/types/menu';
import "@/app/sass/hero.modulo.scss";

interface HeroData {
    hero_imagen: hero_img[];
}

function HeroSection() {
    const [heroData, setHeroData] = useState<HeroData | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/api/data-page');
                if (!res.ok) throw new Error('Error al recuperar los datos');
                const data = await res.json();
                setHeroData(data);
            } catch (error) {
                console.error('Error al recuperar los datos:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <section className="hero">
            <div className="grid_hero" />
            <div className="container_hero">
                {/* Columna Izquierda: Texto */}
                <div className="contenido_hero">
                    <div className="hero_badge">
                        <span>
                            {heroData?.hero_imagen?.[1] && (
                                <Image
                                    src={heroData.hero_imagen[1].image}
                                    alt={heroData.hero_imagen[1].title}
                                    width={16}
                                    height={16}
                                />
                            )}
                        </span>
                        INNOVACIÓN Y DETALLE
                    </div>

                    <h1 className="titulo_hero">
                        Desarrollo de Software a<br />
                        Medida que transforma<br />
                        tu negocio.
                    </h1>

                    <p className="descripcion_hero">
                        Creamos aplicaciones personalizadas y sistemas modernos que optimizan tus procesos.
                    </p>

                    <a href="#contacto" className="boton_contacto_hero">
                        Cotizar proyecto
                        <span>→</span>
                    </a>
                </div>

                {/* Columna Derecha: Imagen (AHORA DENTRO DEL GRID) */}
                <div className="hero_imagen">
                    {heroData?.hero_imagen?.[0] && (
                        <Image
                            src={heroData.hero_imagen[0].image}
                            alt={heroData.hero_imagen[0].title}
                            width={650}
                            height={450}
                            priority
                        />
                    )}
                </div>
            </div>
        </section>
    );
}

export default HeroSection;