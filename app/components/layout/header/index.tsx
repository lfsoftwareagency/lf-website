'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { HeaderItem, logo } from '@/app/types/menu';
import Logo from './logo';
import "@/app/sass/header.modulo.scss";

const Header = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [sticky, setSticky] = useState(false);
    const [menuItems, setMenuItems] = useState<HeaderItem[]>([]);
    const [logoData, setLogoData] = useState<logo | null>(null);
    const [activeSection, setActiveSection] = useState(''); // <-- 1. Estado para controlar el enlace activo

    // Detectar si ya hay un hash en la URL al cargar la página
    useEffect(() => {
        if (window.location.hash) {
            setActiveSection(window.location.hash);
        }
    }, []);

    const handleNavigation = (
        e: React.MouseEvent<HTMLAnchorElement>,
        href: string
    ) => {
        const hash = href.split('#')[1];
        if (!hash) return;

        e.preventDefault();
        const element = document.getElementById(hash);

        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
            window.history.pushState(null, '', `#${hash}`);
            setActiveSection(`#${hash}`); // <-- 2. Guardamos el hash activo al hacer click
        }

        setSidebarOpen(false);
    };

    useEffect(() => {
        const fetchMenuData = async () => {
            try {
                const res = await fetch('/api/data-page');
                if (!res.ok) return;
                const data = await res.json();
                if (data.headerItems) setMenuItems(data.headerItems);
                if (data.logos?.length > 0) setLogoData(data.logos[0]);
            } catch (error) {
                console.error('Error cargando menú:', error);
            }
        };
        fetchMenuData();
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY >= 30);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <header className={`header ${sticky ? 'header-sticky' : ''}`}>
                <div className="header_container">
                    {/* LOGO */}
                    <Logo logoData={logoData}/>
                    <div className="titulo-nav">
                        <Link href="/">Software Agency</Link>
                    </div>

                    {/* MENU DESKTOP */}
                    <nav className="header_nav">
                    {menuItems.map((item, index) => (
                            <Link
                                key={index}
                                href={item.href}
                                onClick={(e) => handleNavigation(e, item.href)}
                                className={`header_link ${activeSection && item.href.includes(activeSection) ? 'header_link-active' : ''}`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    {/* MENU MOBILE */}
                    <button
                        className="header_menu-button"
                        onClick={() => setSidebarOpen(true)}
                        aria-label="Abrir menú"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </header>

            {/* OVERLAY MOBILE */}
            {sidebarOpen && (
                <div
                    className="header_overlay"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* SIDEBAR MOBILE */}
            <aside className={`header_sidebar ${sidebarOpen ? 'header_sidebar-open' : ''}`}>
                <div className="header_sidebar-top">
                    <Logo logoData={logoData} />
                    <div className="titulo-nav">
                        <Link href="/">Software Agency</Link>
                    </div>
                    <button
                        className="header_close"
                        onClick={() => setSidebarOpen(false)}
                        aria-label="Cerrar menú"
                    >
                        ✕
                    </button>
                </div>

                {/* Navegación Mobile */}
                <nav className="header_mobile-nav">
                    {menuItems.map((item, index) => (
                        <Link
                            key={index}
                            href={item.href}
                            className={`header_link ${activeSection && item.href.includes(activeSection) ? 'header_link-active' : ''}`}
                            onClick={(e) => handleNavigation(e, item.href)}
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>
            </aside>
        </>
    );
};

export default Header;