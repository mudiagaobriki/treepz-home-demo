'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";

import { Modal } from 'flowbite';

import NavBar from '@/components/sections/NavBar';
import GuestHost from '@/components/items/GuestHost';
import FaqsItem from '@/components/items/FaqsItem';
import GetStartedSection from '@/components/sections/GetStartedSection';
import Footer from '@/components/sections/Footer';

const DATA = [
    {
        key: 1,
        question: 'Where is Treepz available?',
        title: "Affordable car rental in seconds",
        description: 'As a renter, you can search for available cars on our platform and book the one that best fits your needs. '+
            'As an owner, you can list your car on our platform, set your rental rates and availability, and earn money by renting out your vehicle.',
    },
    {
        key: 2,
        question: "How does Treepz works",
        title: "One search, multiple options",
        description: 'As a renter, you can search for available cars on our platform and book the one that best fits your needs. '+
            'As an owner, you can list your car on our platform, set your rental rates and availability, and earn money by renting out your vehicle.',
    },
    {
        key: 3,
        question: "How does Treepz works",
        title: "Flexible booking policy",
        description: 'As a renter, you can search for available cars on our platform and book the one that best fits your needs. '+
            'As an owner, you can list your car on our platform, set your rental rates and availability, and earn money by renting out your vehicle.',
    },
    {
        key: 4,
        question: 'Where is Treepz available?',
        title: "Affordable car rental in seconds",
        description: 'As a renter, you can search for available cars on our platform and book the one that best fits your needs. '+
            'As an owner, you can list your car on our platform, set your rental rates and availability, and earn money by renting out your vehicle.',
    },
]

const Page = () => {

    return (
        <div>
            <NavBar bgColor="#FFF" />
            <div className="inline-flex items-center py-20 px-32 w-60 flex-shrink-0 w-full tz-bg-orange">
                <h1 className="text-7xl font-medium tz-text-dark">Frequently asked questions</h1>
            </div>
            <div className="my-28"></div>
            <div className="px-32 w-full">
                <div className='flex justify-center items-center self-stretch'>
                    <GuestHost />
                </div>
            </div>
            <div className="my-24"></div>
            <div className="flex flex-col items-start gap-6 flex-shrink-0 px-52 w-full">
                {
                    DATA.map((item, index) => {
                        return <div key={item?.key} className="w-full">
                                <FaqsItem question={item?.question} title={item?.title} description={item?.description} faqsPage={true} />
                            </div>
                    })
                }
            </div>
            <div className="my-40"></div>
            <div className="w-full px-32">
                <div className="text-2xl mb-5 tz-text-dark">STILL HAVE A QUESTION?</div>
                <div className="text-5xl font-medium tz-text-dark mb-6">
                    <span className="tz-text-gray">Still have a question? </span>
                    If you have questions <br />
                    or need further assistance, please do not <br />
                    hesitate and contact us by email
                </div>
                <div className="flex items-center gap-5 mb-3">
                    <div className="text-5xl font-medium tz-text-orange-1">support@treepz.com</div>
                    <Image src="/assets/images/arrow-right-gold.png" alt="" width={52} height={52} />
                </div>
            </div>
            <div className="my-32"></div>
            <div className="h-28 w-full tz-bg-light tz-border-top-3"></div>
            <GetStartedSection />
            <div className="h-28 w-full tz-bg-light"></div>
            <Footer />
        </div>
    );
};

export default Page;
