'use client'

import {useEffect, useState} from "react";
import {proyectos_section} from "@/app/types/menu";
import Image from "next/image";
import Link from "next/link";
import '@/app/sass/proyectos.modulo.scss';

export default function ProyectosSection(){
    const [data, setData] = useState<proyectos_section | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/api/data-page');
                if (!res.ok) throw new Error('Error al cargar proyectos');
                const json = await res.json();
                if (json.proyectosData) setData(json.proyectosData);
            } catch (error) {
                console.error('Error fetching proyectos:', error);
            }
        };
        fetchData();
    }, []);

    if (!data) return null;

    return(
        <section className="proyectos_section" id="proyectos">
            <div className="proyectos_header">
                <div className="proyectos_badge">
                    <Image src={data.badge_icon} alt={data.badge_text} width={16} height={16} />
                    <span>{data.badge_text}</span>
                </div>
                <h2 className="proyectos_titulo">
                    {data.title} <span>{data.title_highlight}</span>
                </h2>
                <p className="proyectos_subtitulo">{data.subtitle}</p>
            </div>

            <div className="proyectos_grid">
                {data.projects.map((projects) => (
                    <div key={projects.id} className="proyecto_card">
                        <div className="proyecto_img_container">
                            <Image src={projects.image} alt={projects.title} fill style={{objectFit: "cover"}} />
                            <span className="proyecto_category">{projects.category}</span>
                        </div>

                        <div className="proyecto_content">
                            <h3>{projects.title}</h3>
                            <p>{projects.description}</p>
                            <div className="proyecto_tags">
                                {projects.tags.map((tag, idx) => (
                                    <span key={idx} className="tag">{tag}</span>
                                ))}
                            </div>
                            <Link href={projects.link} className="proyecto_link">
                                Ver mas <span>→</span>
                            </Link>
                        </div>
                    </div>
                ))}

                <Link href={data.view_more_card.link} className="proyecto_card more_card">
                    <div className="more_icon_container">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5v14"></path>
                        </svg>
                    </div>
                    <h3>{data.view_more_card.title}</h3>
                    <p>{data.view_more_card.description}</p>
                </Link>
            </div>
        </section>
    )
}