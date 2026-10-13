'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import emailjs from '@emailjs/browser';
import type { contacto_info } from '@/app/types/menu';
import '@/app/sass/contacto.modulo.scss';

export default function ContactoSeccion(){
    const [data, setData] = useState<contacto_info | null>(null);
    const [formData, setFormData] = useState({
        nombre: '',
        correo: '',
        telefono: '',
        asunto: '',
        mensaje: ''
    });
    const [status, setStatus] = useState({ loading: false, success: false, error: ''});

    useEffect(() => {
        const fetchData = async () => {
            try{
                const res = await fetch('/api/data-page');
                const json = await res.json();
                if (json.contactoData) setData(json.contactoData);
            } catch (error) {
                console.error('Error fetching contactos:', error);
            }
        };
        fetchData();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus({ loading: true, success: false, error: ''});

        try{
            const serviceID = 'service_4c639au';
            const templateID = 'template_3k20c5b';
            const publicKey = 'PKmGGUcPf3Zptm-SJ';

            const templateParams = {
                from_name: formData.nombre,
                from_email: formData.correo,
                phone: formData.telefono,
                subject: formData.asunto,
                message: formData.mensaje,
            };

            await emailjs.send(serviceID, templateID, templateParams, publicKey);

            setStatus({ loading: false, success: true, error: '' });
            setFormData({ nombre: '', correo: '', telefono: '', asunto: '', mensaje: '' });
        } catch (error) {
            console.error('EmailJS error:', error);
            setStatus({ loading: false, success: false, error: 'Hubo un error al enviar el mensaje. Inténtalo de nuevo.' });
        }
    };

    if (!data) return null;

    return (
        <section className="contacto_section" id="contacto">
            <div className="contacto_header">
                <h2 className="contacto_titulo">
                    Ponte en <span>contacto</span>
                </h2>
                <p className="contacto_subtitulo">{data.subtitle}</p>
            </div>

            <div className="contacto_container">
                {/* Formulario Izquierda */}
                <form onSubmit={handleSubmit} className="contacto_form_card">
                    <div className="form_grid">
                        <div className="input_box">
                            <span className="input_icon">
                                <Image src="/img/contacto/nombre.png" alt="Nombre" width={16} height={16} />
                            </span>
                            <input
                                type="text"
                                name="nombre"
                                placeholder="Nombre"
                                value={formData.nombre}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="input_box">
                            <span className="input_icon">
                                <Image src="/img/contacto/correo.png" alt="Correo" width={16} height={16} />
                            </span>
                            <input
                                type="email"
                                name="correo"
                                placeholder="Correo Electrónico"
                                value={formData.correo}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="input_box">
                            <span className="input_icon">
                                <Image src="/img/contacto/telefono.png" alt="Teléfono" width={16} height={16} />
                            </span>
                            <input
                                type="tel"
                                name="telefono"
                                placeholder="Teléfono"
                                value={formData.telefono}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="input_box">
                            <span className="input_icon">
                                <Image src="/img/contacto/asunto.png" alt="Asunto" width={16} height={16} />
                            </span>
                            <input
                                type="text"
                                name="asunto"
                                placeholder="Asunto"
                                value={formData.asunto}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="input_box textarea_box">
                        <span className="input_icon textarea_icon">
                            <Image src="/img/contacto/mensaje.png" alt="Mensaje" width={16} height={16} />
                        </span>
                        <textarea
                            name="mensaje"
                            placeholder="Mensaje"
                            rows={5}
                            value={formData.mensaje}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>

                    <button type="submit" className="enviar_btn" disabled={status.loading}>
                        <Image src="/img/contacto/enviar.png" alt="Mensaje" width={16} height={16} />
                        {status.loading ? 'Enviando...' : 'Enviar'}
                    </button>

                    {status.success && <p className="success_msg">¡Mensaje enviado con éxito!</p>}
                    {status.error && <p className="error_msg">{status.error}</p>}
                </form>

                {/* Columna Derecha (Información y Redes) */}
                <div className="contacto_info_columna">
                    {/* Tarjeta de Teléfonos y Correo */}
                    <div className="info_card">
                        <div className="info_row">
                            <div className="blue_icon_circle">
                                <Image src="/img/contacto/telefono_2.png" alt="Teléfono" width={18} height={18} />
                            </div>
                            <div>
                                <span className="info_label">Teléfono</span>
                                {data.telefonos.map((tel, idx) => (
                                    <p key={idx} className="info_value">{tel}</p>
                                ))}
                            </div>
                        </div>

                        <div className="separator_line" />

                        <div className="info_row">
                            <div className="blue_icon_circle">
                                <Image src="/img/contacto/correo_2.png" alt="Email" width={18} height={18} />
                            </div>
                            <div>
                                <span className="info_label">Correo Electrónico</span>
                                <p className="info_value">{data.email}</p>
                            </div>
                        </div>
                    </div>

                    {/* Tarjeta de Redes Sociales */}
                    <div className="info_card socials_card">
                        <span className="socials_title">Síguenos</span>
                        <div className="socials_list">
                            {data.socials.map((social, idx) => (
                                <a key={idx} href={social.url} target="_blank" rel="noopener noreferrer" className="social_row">
                                    <div className="blue_icon_circle">
                                        <Image src={social.icon} alt={social.platform} width={18} height={18} />
                                    </div>
                                    <span className="social_name">{social.username}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
