export type HeaderItem = {
    label: string;
    href: string;
};

export type hero_img = {
    image: string;
    title: string;
}

export type logo = {
    image: string;
    title: string;
}

export type proceso_step = {
    id: string;
    title: string;
    description: string;
    color: string;
    bgColor: string;
    position: 'top' | 'bottom';
    icon: string;
};

export type procesos = {
    badge: string;
    logo_badge: string;
    title: string;
    title_highlight: string;
    subtitle: string;
    steps: proceso_step[];
};

export type proyectos_item = {
    id: string;
    category:string;
    title: string;
    description: string;
    image: string;
    tags: string[];
    link: string;
}

export type proyectos_section = {
    badge_icon: string;
    badge_text: string;
    title: string;
    title_highlight: string;
    subtitle: string;
    projects: proyectos_item[];
    view_more_card: {
        title: string;
        description: string;
        link: string;
    };
};