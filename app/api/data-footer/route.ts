import { NextResponse } from 'next/server';
import type { HeaderItem, hero_img, logo } from '@/app/types/menu';

export const dynamic = 'force-dynamic';

const logos: logo[] = [
    {
        image: '/img/logo-nav.png',
        title: 'L&F Software Agency'
    }
];

const headerItems: HeaderItem[] = [
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Proceso', href: '#proceso' },
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contacto', href: '#contacto' },
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

export async function GET() {
    return NextResponse.json({
        headerItems,
        hero_imagen,
        logos
    });
}