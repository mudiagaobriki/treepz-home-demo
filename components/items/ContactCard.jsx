'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";

// Custom components
import Button2 from '@/components/items/Button2';
// import isMobile from '@/components/helpers/isMobile'

const ContactCard = ({image, title, description, btnText, btnLink, imgWidth=96}) => {

    // let mobPad = isMobile ? "px-5 py-2" : "px-20 py-3";

    return (
        <div className="flex flex-col items-center gap-8 px-5 py-7 rounded-2xl bg-white w-72 tz-border-light-2">
            <div className="flex items-center justify-center">
                <Image src={image} alt="icon" width={imgWidth} height={96} />
            </div>
            <div className="w-full">
                <h4 className="text-2xl font-medium text-center self-stretch mb-4 tz-text-dark">{title}</h4>
                <p className="text-base font-normal text-center self-stretch tz-text-gray">{description}</p>
            </div>
            <div className="w-full">
                <Button2 text={btnText} url={btnLink} width="width_full" />
            </div>
        </div>
    );
};

export default ContactCard;
