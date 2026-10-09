import { NextResponse } from 'next/server';
import type { HeaderItem, hero_img, logo, procesos } from '@/app/types/menu';

export const dynamic = 'force-dynamic';

const logos: logo[] = [
    {
        image: '/img/logo-nav.png',
        title: 'L&F Software Agency'
    }
];

const headerItems: HeaderItem[] = [
    { label: 'Nosotros', href: '/#nosotros' },
    { label: 'Servicios', href: '/#servicios' },
    { label: 'Proceso', href: '/#proceso' },
    { label: 'Proyectos', href: '/#proyectos' },
    { label: 'FAQ', href: '/#faq' },
    { label: 'Contacto', href: '/#contacto' },
];

const hero_imagen: hero_img[] = [
    {
        image: '/img/hero/hero.png',
        title: 'Imagen hero'
    },
    {
        image: '/img/hero/rayo.png',
        title: 'rayo span'
    }
];

const procesosData: procesos = {
    logo_badge: '/img/procesos/nuestro-proceso.png',
    badge: 'NUESTRO PROCESO',
    title: 'Así convertimos tus ideas',
    title_highlight: 'en soluciones',
    subtitle: 'Trabajamos de la mano contigo en cada etapa, con un proceso claro y colaborativo para llevar tu proyecto desde la idea hasta el resultado final.',
    steps: [
        {
            id: '01',
            title: 'Descubrimiento',
            description: 'Analizamos tus necesidades, objetivos y el contexto de tu negocio para definir la mejor estrategia.',
            color: '#A855F7',
            bgColor: '#3b1e6c',
            position: 'top',
            icon: '/img/procesos/buscar.png' // Coloca aquí la ruta de tu imagen
        },
        {
            id: '02',
            title: 'Diseño UX/UI',
            description: 'Creamos experiencias intuitivas y atractivas, enfocadas en la usabilidad y en la identidad de tu marca.',
            color: '#0B5BDA',
            bgColor: '#092d65',
            position: 'bottom',
            icon: '/img/procesos/designuxui.png'
        },
        {
            id: '03',
            title: 'Desarrollo',
            description: 'Convertimos el diseño en funcionalidad, construyendo soluciones sólidas, escalables y eficientes.',
            color: '#2EE6C3',
            bgColor: '#145c5d',
            position: 'top',
            icon: '/img/procesos/desarrollo.png'
        },
        {
            id: '04',
            title: 'QA y pruebas',
            description: 'Validamos cada detalle para garantizar un rendimiento estable, seguro y sin errores.',
            color: '#E1E100',
            bgColor: '#4f581f',
            position: 'bottom',
            icon: '/img/procesos/qa-pruebas.png'
        },
        {
            id: '05',
            title: 'Despliegue',
            description: 'Llevamos tu proyecto al entorno final y te acompañamos en el proceso de lanzamiento.',
            color: '#FF683A',
            bgColor: '#563332',
            position: 'top',
            icon: '/img/procesos/despliegue.png'
        }
    ]
};

export async function GET() {
    return NextResponse.json({
        headerItems,
        hero_imagen,
        logos,
        procesosData
    });
}