'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import type { procesos, proceso_step } from '@/app/types/menu';
import "@/app/sass/proceso.modulo.scss";

export default function ProcessSection() {
    const [data, setData] = useState<procesos | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/api/data-page');
                if (!res.ok) throw new Error('Error al cargar proceso');
                const json = await res.json();
                if (json.procesosData) setData(json.procesosData);
            } catch (err) {
                console.error('Error fetching procesos:', err);
            }
        };
        fetchData();
    }, []);

    if (!data) return null;

    return (
        <section className="proceso_seccion" id="proceso">
            <div className="proceso_header">
                <div className="proceso_badge">
                    <Image
                        src={data.logo_badge}
                        alt={data.badge}
                        width={20}
                        height={20}
                    />
                    <span>{data.badge}</span>
                </div>
                <h2 className="proceso_titulo">
                    {data.title} <span>{data.title_highlight}</span>
                </h2>
                <p className="proceso_subtitulo">{data.subtitle}</p>
            </div>

            <div className="timeline_wrapper">
                <div className="timeline_linea" />

                <div className="steps_grid">
                    {data.steps.map((step: proceso_step) => (
                        <div
                            key={step.id}
                            className={`step_column ${step.position}`}
                            style={{
                                '--accent-color': step.color,
                                '--card-bg': step.bgColor,
                            } as React.CSSProperties}
                        >
                            <div className="card_container top_slot">
                                {step.position === 'top' && (
                                    <>
                                        <div className="step_card">
                                            <div className="card_header">
                                                <div className="icon_box">
                                                    <Image
                                                        src={step.icon}
                                                        alt={step.title}
                                                        width={20}
                                                        height={20}
                                                    />
                                                </div>
                                                <div className="title_box">
                                                    <div className="num_row">
                                                        <span className="step_num">{step.id}</span>
                                                        <span className="num_separator"/>
                                                    </div>
                                                    <h3>{step.title}</h3>
                                                </div>
                                            </div>
                                            <p>{step.description}</p>
                                        </div>
                                        <div className="connector_line"/>
                                    </>
                                )}
                            </div>

                            <div className="node_circle">
                                <span>{step.id}</span>
                            </div>

                            <div className="card_container bottom_slot">
                                {step.position === 'bottom' && (
                                    <>
                                        <div className="connector_line" />
                                        <div className="step_card">
                                            <div className="card_header">
                                                <div className="icon_box">
                                                    <Image
                                                        src={step.icon}
                                                        alt={step.title}
                                                        width={20}
                                                        height={20}
                                                    />
                                                </div>
                                                <div className="title_box">
                                                    <span className="step_num">{step.id}</span>
                                                    <span className="num_separator" />
                                                    <h3>{step.title}</h3>
                                                </div>
                                            </div>
                                            <p>{step.description}</p>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}