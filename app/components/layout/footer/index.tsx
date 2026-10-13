'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { footer_info } from '@/app/types/menu';
import '@/app/sass/footer.modulo.scss';

export default function Footer() {
    const [footerData, setFooterData] = useState<footer_info | null>(null);
    const [newsletterEmail, setNewsletterEmail] = useState('');

    useEffect(() => {
        const fetchFooter = async () => {
            try {
                // Ajusta la ruta si creaste un endpoint independiente o únelo a /api/data-page
                const res = await fetch('/api/data-footer');
                if (!res.ok) return;
                const data = await res.json();

                if (data.footerData && data.footerData.length > 0) {
                    setFooterData(data.footerData[0]);
                }
            } catch (error) {
                console.error('Error al cargar los datos del footer:', error);
            }
        };

        fetchFooter();
    }, []);

    const handleNewsletterSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (newsletterEmail) {
            alert('¡Gracias por suscribirte al newsletter!');
            setNewsletterEmail('');
        }
    };

    // Si aún está cargando los datos, no muestra nada o puedes poner un loader
    if (!footerData) return null;

    return (
        <footer className="footer_section">
            <div className="footer_container">

                {/* 1. Tarjeta Newsletter */}
                <div className="newsletter_card">
                    <div className="newsletter_info">
                        <div className="newsletter_badge">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                            </svg>
                            <span>{footerData.newsletter.badge}</span>
                        </div>
                        <h2>
                            {footerData.newsletter.title}{' '}
                            <span>{footerData.newsletter.title_highlight}</span>
                        </h2>
                        <p>{footerData.newsletter.subtitle}</p>
                    </div>

                    <form onSubmit={handleNewsletterSubmit} className="newsletter_input_box">
                        <div className="input_wrapper">
                            <span className="email_icon">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                    <polyline points="22,6 12,13 2,6" />
                                </svg>
                            </span>
                            <input
                                type="email"
                                placeholder="Tu correo electronico"
                                value={newsletterEmail}
                                onChange={(e) => setNewsletterEmail(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" aria-label="Suscribirse">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <polyline points="12 5 19 12 12 19" />
                            </svg>
                        </button>
                    </form>
                </div>

                {/* 2. Cuerpo Principal del Footer */}
                <div className="footer_main_grid">

                    {/* Columna 1: Brand / Logo */}
                    <div className="footer_col brand_col">
                        <div className="brand_header">
                            <Image src="/img/logo.svg" alt="L&F Software Agency" width={55} height={45} />
                            <div>
                                <h3>L&F Software</h3>
                                <h4>Agency</h4>
                            </div>
                        </div>
                        <p className="brand_desc">
                            {footerData.brand.description}
                        </p>
                        <div className="social_circles">
                            {footerData.brand.socials.map((social, idx) => (
                                <a key={idx} href={social.url} aria-label={social.label}>
                                    <Image src={social.icon} alt={social.label} width={16} height={16} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Columna 2: Enlaces (Dinámico desde la API) */}
                    <div className="footer_col">
                        <h4 className="col_title">Enlaces</h4>
                        <ul className="footer_links">
                            {footerData.enlaces.map((enlace, idx) => (
                                <li key={idx}>
                                    <Link href={enlace.href}>{enlace.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Columna 3: Servicios (Dinámico desde la API) */}
                    <div className="footer_col">
                        <h4 className="col_title">Servicios</h4>
                        <ul className="footer_links">
                            {footerData.servicios.map((servicio, idx) => (
                                <li key={idx}>
                                    <Link href={servicio.href}>{servicio.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Columna 4: Contáctanos + Mascota */}
                    <div className="footer_col contact_col">
                        <h4 className="col_title">Contáctanos</h4>
                        <ul className="contact_info_list">
                            <li>
                                <div className="contact_icon_square">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                        <polyline points="22,6 12,13 2,6" />
                                    </svg>
                                </div>
                                <a href={`mailto:${footerData.contacto.email}`}>{footerData.contacto.email}</a>
                            </li>
                            <li>
                                <div className="contact_icon_square">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                    </svg>
                                </div>
                                <span>{footerData.contacto.phone}</span>
                            </li>
                            <li>
                                <div className="contact_icon_square">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                        <circle cx="12" cy="10" r="3" />
                                    </svg>
                                </div>
                                <span>{footerData.contacto.location}</span>
                            </li>
                        </ul>

                        {/* Bloque Mascota */}
                        <div className="mascot_block">
                            <Image
                                src="/img/mascota/iguana.png"
                                alt="Iguana L&F"
                                width={85}
                                height={85}
                            />
                            <div className="mascot_text">
                                Tu idea, <br />
                                <span>nuestro código</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 3. Footer Bottom / Copyright */}
                <div className="footer_bottom">
                    <p className="copyright">
                        ©2026 L&F Software Agency S.A.C. Todos los derechos reservados
                    </p>
                    <div className="tagline">
                        <span className="green_bar"></span>
                        <span>Tecnología + Diseño + Resultados</span>
                    </div>
                </div>

            </div>
        </footer>
    );
}