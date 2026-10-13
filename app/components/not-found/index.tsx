'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import '@/app/sass/notfound.modulo.scss';

const NotFound = () => {
    return (
        <section className="notfound_section">
            <div className="notfound_container">
                {/* Imagen con bordes redondeados y marco minimalista */}
                <div className="notfound_img_box">
                    <Image
                        src={'/img/mascota/not-found.jpeg'}
                        alt='Not Found Image'
                        height={300}
                        width={500}
                        priority
                        unoptimized={true}
                    />
                </div>

                {/* Textos limpios */}
                <div className="notfound_text">
                    <h2>
                        ¡Ups! La página que buscas{' '}
                        <span>no existe</span>
                    </h2>
                    <p>Parece que el enlace está roto o la página ha sido movida a otra sección.</p>
                </div>

                {/* Botón */}
                <Link href='/' className='notfound_btn'>
                    <span>Regresar al Inicio</span>
                    <div className="btn_icon">
                        <svg
                            width='16'
                            height='16'
                            viewBox='0 0 24 24'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'>
                            <path
                                d='M5 12H19M19 12L12 5M19 12L12 19'
                                stroke='currentColor'
                                strokeWidth='2'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                            />
                        </svg>
                    </div>
                </Link>
            </div>
        </section>
    );
};

export default NotFound;