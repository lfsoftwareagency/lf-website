
import React, { ElementType } from 'react';
import '../../sass/components/badge.scss'

interface BadgeProps {
    titleBadge : string,
    icon? : ElementType
}

const Badge = ({titleBadge, icon: Icon}: BadgeProps) => {
    return (
        <>
            <div className="badge-us">
                {Icon && <Icon className="w-4 h-4" />}
                <span className="us">{titleBadge}</span>
            </div>


        </>

    );
};

export default Badge;