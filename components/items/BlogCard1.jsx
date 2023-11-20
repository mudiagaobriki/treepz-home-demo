'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";

// Custom components
// import isMobile from '@/components/helpers/isMobile'



const BlogCard1 = ({image, title, description}) => {

    // let mobPad = isMobile ? "px-5 py-2" : "px-20 py-3";

    return (
        <div className="flex flex-col items-center gap-5 w-96 h-64">
            <div>
                <Image src={image} alt="logo icon" width={384} height={256} className="rounded-xl" />
            </div>
            <div className="flex flex-col items-center self-stretch gap-2">
                <h4 className="self-stretch text-2xl font-medium tz-text-dark">{title}</h4>
                <p className="text-base font-normal tz-text-gray">{description}</p>
            </div>
        </div>
    );
};

export default BlogCard1;
