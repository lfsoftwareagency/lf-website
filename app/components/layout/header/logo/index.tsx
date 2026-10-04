'use client';
import Image from 'next/image';
import Link from 'next/link';
import { logo } from '@/app/types/menu';
import "@/app/sass/header.modulo.scss";

interface LogoProps {
    logoData?: logo | null;
}

const Logo = ({ logoData }: LogoProps) => {
    return (
        <Link href="/" className="header-logo">
            <Image
                src={logoData?.image || '/img/logo-nav.png'}
                alt={logoData?.title || 'L&F Software Agency'}
                width={90}
                height={60}
                quality={100}
                priority
            />
        </Link>
    );
};

export default Logo;