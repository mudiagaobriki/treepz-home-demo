'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";

// Custom components
// import isMobile from '@/components/helpers/isMobile'



const DirectorCard = ({image, name, role, board="", linkedin="", bg="yellow"}) => {

    // let mobPad = isMobile ? "px-5 py-2" : "px-20 py-3";
    const bgColor = {
        grey1: "bg-[#AAAFB3]",
        grey2: "bg-[#CACACA]",
        yellow: "bg-[#F8B02B]",
    };

    return (
        <div className="flex flex-col items-center gap-2 p-3 w-64 h-80 flex-shrink-0 rounded-3xl tz-bg-light">
            <div className={`rounded-2xl ${bgColor[bg]}`}>
                <Image src={image} alt="director image" width={288} height={288} className="self-stretch rounded-2xl" />
            </div>
            <div className="flex flex-col items-center gap-1 w-full">
                <div className="flex items-center gap-1 justify-start w-full">
                    <p className="text-left self-stretch font-medium tz-text-dark">{name}</p>
                    <Link href={linkedin}>
                        <Image src="/assets/images/linkedin-box-line.png" alt="linkedin" width={16} height={16} />
                    </Link>
                </div>
                <p className="text-left self-stretch text-sm tz-text-gray">{role}</p>
                <p className="text-left self-stretch text-xs tz-text-gray">{board}</p>
            </div>
            
            
        </div>
    );
};

export default DirectorCard;
