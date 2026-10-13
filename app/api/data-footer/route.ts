import { NextResponse } from 'next/server';
import type { footer_info } from '@/app/types/menu';

export const dynamic = 'force-dynamic';

const footerData:footer_info[] = [
    {
        newsletter: {
            badge: 'NEWSLETTER',
            title: 'Recibe ideas, novedades y tips del',
            title_highlight: 'mundo tech',
            subtitle: 'Suscríbete y mantente al día con lo último en desarrollo, diseño web y soluciones digitales.',
        },
        brand: {
            description: 'Desarrollamos software a medida y creamos experiencias web que impulsan tu negocio',
            socials: [
                { icon: '/img/contacto/tiktok.png', url: 'https://www.tiktok.com/@lfsoftwareagency', label: 'TikTok' },
                { icon: '/img/contacto/facebook.png', url: 'https://web.facebook.com/lfsoftwareagency', label: 'Facebook' },
                { icon: '/img/contacto/instagram.png', url: 'https://www.instagram.com/lfsoftwareagency/', label: 'Instagram' },
                { icon: '/img/contacto/threads.png', url: 'https://www.threads.com/@lfsoftwareagency', label: 'Threads' }
            ]
        },
        enlaces: [
            { label: 'Inicio', href: '/' },
            { label: 'Nosotros', href: '/#nosotros' },
            { label: 'Servicios', href: '/#servicios' },
            { label: 'Proyectos', href: '/#proyectos' },
            { label: 'FAQ', href: '/#faq' },
            { label: 'Contacto', href: '/#contacto' },
        ],
        servicios: [
            { label: 'Páginas Web', href: '/#servicios' },
            { label: 'Aplicaciones Web', href: '/#servicios' },
            { label: 'Software a Medida', href: '/#servicios' },
            { label: 'Diseño UX/UI', href: '/#servicios' },
        ],
        contacto: {
            email: 'lfsoftwareagency@gmail.com',
            phone: '+51 987 654 321',
            location: 'Lima, Perú'
        }
    }
];

export async function GET() {
    return NextResponse.json({
        footerData
    });
}