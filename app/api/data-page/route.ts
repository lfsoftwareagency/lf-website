import { NextResponse } from 'next/server';
import {
    about_section,
    faq_img,
    faq_section,
    HeaderItem,
    hero_img,
    logo,
    procesos,
    proyectos_section,
    service_section,
    contacto_info
} from '@/app/types/menu';

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

const  aboutData : about_section = {
    titleAbout: "Tecnología que impulsa tu negocio",
    subtitle1: "En L&F Software Agency convertimos ideas y necesidades de negocio en soluciones digitales funcionales, modernas y escalables.",
    subtitle2: "Desarrollamos software a medida, páginas web y estrategias digitales que te ayudan a optimizar procesos, conectar con tus clientes y hacer crecer tu negocio.",
    badge_about: "NOSOTROS",

    services: [
        {
            id: "desarrollo-a-medida",
            title: "Desarrollo a medida",
            description: "Sistemas y aplicaciones adaptados a las necesidades de tu negocio.",
            iconName: "service1",
            bgColor: "bg-blue"
        },
        {
            id: "diseno-web",
            title: "Diseño web",
            description: "Páginas modernas, rápidas y enfocadas en ofrecer una gran experiencia de usuario.",
            iconName: "service2",
            bgColor: "bg-teal"
        },
        {
            id: "soluciones-digitales",
            title: "Soluciones digitales",
            description: "Estrategias y herramientas tecnológicas para resolver problemas reales y generar resultados.",
            iconName: "service3",
            bgColor: "bg-purple"
        }
    ],

    titleValues: "Lo que nos mueve",
    subtitleValues : "Creemos en la tecnología como una herramienta para generar impacto real. Por eso, trabajamos con compromiso, honestidad y una mentalidad siempre orientada a los resultados.",
    badge_values : "NUESTROS VALORES",
    values : [
        {
            id: "compromiso",
            theme: "purple",
            iconName: "val1",
            title: "Compromiso",
            description: "Nos involucramos profundamente en cada proyecto para entender tus necesidades."
        },
        {
            id: "innovacion",
            theme: "blue",
            iconName: "val2",
            title: "Innovación",
            description: "Buscamos constantemente nuevas y mejores soluciones tecnológicas"
        },
        {
            id: "calidad",
            theme: "teal",
            iconName: "val3",
            title: "Calidad",
            description: "Entregamos software robusto, escalable y con un diseño excepcional."
        },
        {
            id: "crecimiento",
            theme: "lime",
            iconName: "val4",
            title: "Crecimiento",
            description: "Nos enfocamos en el crecimiento de tu negocio y en el nuestro."
        }
    ]


}

const serviceData: service_section = {
    title: "Impulsamos tu negocio con tecnología sólida y escalable",
    subtitle: "Soluciones digitales a medida para empresas que quieren crecer.",
    badge_text: "SOLUCIONES DE IMPACTO",
    service: [
        {
            id : "desarrollo-medida",
            title : "Desarrollo de software a medida",
            description : "Diseñamos y construimos sistemas robustos desde cero. Creamos la infraestructura y el backend que tu empresa necesita para centralizar datos y escalar sin limites.",
            iconName: "software",
            bgColor : "blue"
        },
        {
            id : "diseño-producto",
            title : "Diseño de producto (UI/UX)",
            description : "Creamos interfaces intuitivas y atractivas centradas en el usuario. Convertimos procesos complejos en experiencias simples que tus clientes disfrutan usar.",
            iconName: "diseño",
            bgColor : "teal"
        },
        {
            id : "soporte-mantenimiento",
            title : "Soporte y Mantenimiento",
            description : "Acompañamos tu software después del lanzamiento. Monitoreo, actualizaciones y mejoras continuas para tu sistema nunca se quede atrás.",
            iconName: "soporte",
            bgColor : "purple"
        }
    ],

    solution: [

        {
            id : "estrategia",
            title: "Estrategia antes del desarrollo",
            description: "Analizamos las necesidadesde de tu negocio para crear soluciones web y sistemas que realmente se adapten a tus procesos y te ayuden a crecer",
            iconName: "solution1",
            number: "01",
            bgColor : "bg-blue"
        },
        {
            id: "avances",
            title: "Avances visibles paso a paso",
            description: "Te mantenemos al tanto del progreso durante todo el proyecto. Podrás revisar avances y darnos tu feedback para asegurar que el resultado se adapte a lo que necesitas.",
            iconName: "solution2",
            number: "02",
            bgColor : "bg-teal"
        },
        {
            id: "avances",
            title: "Soporte después del lanzamiento",
            description: "No terminamos el proyecto cuando se publica. Te acompañamos con soporte, mejoras y mantenimiento para que tu solución siga funcionando y creciendo contigo.",
            iconName: "solution3",
            number: "03",
            bgColor : "bg-purple"
        }
    ]






}

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

const proyectosData: proyectos_section = {
    badge_icon: '/img/proyectos/logo-badge.png',
    badge_text: 'PROYECTOS',
    title: 'Proyectos que convierten ideas en',
    title_highlight: 'soluciones',
    subtitle: 'Desarrollamos soluciones digitales pensadas para resolver necesidades reales y generar resultados.',
    projects: [
        {
            id: '1',
            category: 'Sistemas web',
            title: 'Sistemas de gestión empresarial',
            description: 'Plataforma web para la administración de procesos, usuarios y reportes.',
            image: '/img/proyectos/proyecto-1.png', // Reemplaza con tu imagen o mock
            tags: ['Web', 'Web', 'UI/UX', 'Desarrollo'],
            link: '#contacto'
        },
        {
            id: '2',
            category: 'Sistemas web',
            title: 'Sistemas de gestión empresarial',
            description: 'Plataforma web para la administración de procesos, usuarios y reportes.',
            image: '/img/proyectos/proyecto-2.png',
            tags: ['Web', 'Web', 'UI/UX', 'Desarrollo'],
            link: '#contacto'
        },
        {
            id: '3',
            category: 'Sistemas web',
            title: 'Sistemas de gestión empresarial',
            description: 'Plataforma web para la administración de procesos, usuarios y reportes.',
            image: '/img/proyectos/proyecto-3.png',
            tags: ['Web', 'Web', 'UI/UX', 'Desarrollo'],
            link: '#contacto'
        }
    ],
    view_more_card: {
        title: 'Ver más proyectos',
        description: 'Explore nuestra galería completa de soluciones digitales exitosas.',
        link: '#proyectos'
    }
};


const  faqData: faq_section = {
    title: "Preguntas frecuentes",
    subtitle: "Resolvemos algunas de las dudas mas comunes antes de comenzar tu proyecto.",
    badge_text: "FAQ",
    image: {
        image: '/img/faq/faq_img.png',
        title: 'img faq',
    },
    question: [
        {
            "iconName": "CircleHelp",
            "question": "¿Qué tipo de proyectos desarrollamos?",
            "answer": "Desarrollamos páginas web, sistemas de gestión, plataformas digitales y aplicaciones personalizadas, adaptadas a las necesidades y objetivos de cada negocio."
        },
        {
            "iconName": "UsersRound",
            "question": "¿Trabajan con empresas de cualquier tamaño?",
            "answer": "Sí, podemos trabajar con emprendedores, pequeñas empresas y organizaciones que busquen optimizar sus procesos mediante soluciones tecnológicas. Cada propuesta se adapta a las necesidades y al alcance del proyecto."
        },
        {
            "iconName": "Clock",
            "question": "¿Cuánto tiempo demora desarrollar un proyecto?",
            "answer": "El tiempo depende de la complejidad, las funcionalidades y los requerimientos del proyecto. Antes de comenzar, definimos el alcance y establecemos un cronograma de trabajo para mantener una planificación clara."
        },
        {
            "iconName": "SquarePen",
            "question": "¿Puedo solicitar cambios durante el desarrollo?",
            "answer": "Sí, puedes proponer ajustes durante el desarrollo. Evaluamos cada solicitud para determinar su impacto en el alcance, el presupuesto y los plazos, y coordinamos contigo su implementación."
        },
        {
            "iconName": "Headset",
            "question": "¿Ofrecen soporte después del lanzamiento?",
            "answer": "Podemos coordinar soporte y mantenimiento después del lanzamiento para ayudar a resolver incidencias y mantener la solución funcionando correctamente. Las condiciones y el alcance del servicio se definen según lo acordado para cada proyecto."
        }
    ]
}




const contactoData: contacto_info = {
    badge: 'Ponte en contacto',
    title: 'Ponte en',
    title_highlight: 'contacto',
    subtitle: '¿Tienes un proyecto en mente o necesitas asesoramiento? Escribenos  y nuestro equipo se pondra en contacto contigo a la brevedad.',
    telefonos: ['+51 926 997 532','+51 933 103 242'],
    email: 'lfsoftwareAgency@gmail.com',
    socials: [
        {platform: 'Instagram', username: 'L&F software Agency', icon: '/img/contacto/instagram.png', url:'https://www.instagram.com/lfsoftwareagency/'},
        {platform: 'Facebook', username: 'L&F software Agency', icon: '/img/contacto/facebook.png', url:'https://web.facebook.com/lfsoftwareagency'},
        {platform: 'TikTok', username: 'L&F software Agency', icon: '/img/contacto/tiktok.png', url:'https://www.tiktok.com/@lfsoftwareagency'},
        {platform: 'Threads', username: 'L&F software Agency', icon: '/img/contacto/threads.png', url:'https://www.threads.com/@lfsoftwareagency'}
    ]
}

export async function GET() {
    return NextResponse.json({
        headerItems,
        hero_imagen,
        logos,
        aboutData,
        serviceData,
        procesosData,
        proyectosData,
        faqData,
        contactoData
    });
}