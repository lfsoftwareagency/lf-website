'use client'

import { useEffect, useState } from "react";
import { proyectos_section } from "@/app/types/menu";
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
        <section className="proyectos_section">
            <div className="proyectos_grid">
                {data.projects.map((projects) => (
                    <div key={projects.id} className="proyecto_card">
                        <div className="proyecto_img_container">
                            <Image src={projects.image} alt={projects.title} fill style={{objectFit: "contain"}} />
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
                            <Link href={projects.link} className="proyecto_link" target="_blank" rel="noopener noreferrer">
                                Ver mas <span>→</span>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}