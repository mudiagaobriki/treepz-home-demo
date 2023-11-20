'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";

import NavBar from '@/components/sections/NavBar';
import OurValues from '@/components/sections/OurValues';
import JustMove from '@/components/sections/JustMove';
import ExploreSection from '@/components/sections/ExploreSection';
import Button1 from '@/components/items/Button1';
import Button2 from '@/components/items/Button2';
import ClientSection2 from '@/components/sections/ClientSection2';
import MeetNewPeople from '@/components/sections/MeetNewPeople';
import MeetNewPeople2 from '@/components/sections/MeetNewPeople2';
import TreepzExperience from '@/components/sections/TreepzExperience';
import DrivingEfficiency from '@/components/sections/DrivingEfficiency';
import DirectorCard from '@/components/items/DirectorCard';
import BlogCard1 from '@/components/items/BlogCard1';
import Footer from '@/components/sections/Footer';

const DIRECTORS = [
    {
        key: 1,
        image: "/assets/images/directors/Jane-Egerton-Idehen.png",
        name: "Jane Egerton-Idehen",
        role: "MD/CEO, NIGCOMSAT",
        board: "BOARD CHAIRMAN",
        bg: "grey1"
    },
    {
        key: 2,
        image: "/assets/images/directors/Ebenezer-Arthur.png",
        name: "Ebenezer Arthur",
        role: "MD, Wangara Green Ventures",
        board: "BOARD MEMBER",
        bg: "grey2"
    },
    {
        key: 3,
        image: "/assets/images/directors/Sunil-Sharma.png",
        name: "Sunil Sharma",
        role: "MD, Techstars Toronto",
        board: "BOARD MEMBER",
        bg: "grey1"
    },
    {
        key: 4,
        image: "/assets/images/directors/Laura-Venasse.png",
        name: "Laura Venasse",
        role: "Partner, LaBarge Weinstein LLP",
        board: "BOARD MEMBER",
        bg: "grey2"
    },
    {
        key: 5,
        image: "/assets/images/directors/Adejare-Rasheed-Olaoluwa.png",
        name: "Adejare Rasheed Olaoluwa",
        role: "EX MD, Bank of Industry Limited",
        board: "BOARD MEMBER",
        bg: "grey1"
    },
]

const FOUNDERS = [
    {
        key: 1,
        image: "/assets/images/directors/Onyeka-Akumah.png",
        name: "Onyeka Akumah",
        role: "Co-Founder/CEO",
        board: "",
        bg: "yellow"
    },
    {
        key: 2,
        image: "/assets/images/directors/Johnny-Enagwolor.png",
        name: "Johnny Enagwolor",
        role: "Co-Founder & President",
        board: "",
        bg: "yellow"
    },
    {
        key: 3,
        image: "/assets/images/directors/Afolabi-Oluseyi.png",
        name: "Afolabi Oluseyi",
        role: "Co-Founder/VP of Products",
        board: "",
        bg: "yellow"
    },
    {
        key: 4,
        image: "/assets/images/directors/John-Atumeyi-Shaibu.png",
        name: "John Atumeyi Shaibu",
        role: "Co-Founder/VP of Customer Engagement",
        board: "",
        bg: "yellow"
    },
]

const CONTENTS = [
    {
        key: 1,
        image: "/assets/images/two-ladies-in-car.png",
        title: "Moving in the heart of Africa",
        description: "Moving in the heart of Africa can be an exciting and enriching experience.",
    },
    {
        key: 2,
        image: "/assets/images/two-ladies-in-car.png",
        title: "Moving in the heart of Africa",
        description: "Moving in the heart of Africa can be an exciting and enriching experience.",
    },
    {
        key: 3,
        image: "/assets/images/two-ladies-in-car.png",
        title: "Moving in the heart of Africa",
        description: "Moving in the heart of Africa can be an exciting and enriching experience.",
    },
]

const Page = () => {

    return (
        <div>
            <NavBar bgColor="#FFF" />
            <div className="mb-20 -space-y-44">
                <div className="px-32 w-full self-stretch pt-20 pb-64 z-0 tz-bg-light">
                    <div className="flex flex-col items-start gap-2">
                        <div className="flex items-center justify-center px-3 py-2 rounded-3xl tz-bg-orange">
                            <div className="text-xl font-medium tz-text-brown-2">OUR MISSION</div>
                        </div>
                        <div className="text-7xl font-medium tz-text-dark">Putting Africa’s 26 million <br /> cars to better use.</div>
                    </div>
                    <div className="flex items-start justify-end w-full">
                        <div className="inline-flex flex-col items-start gap-3 p-4 rounded-xl bg-white self-stretch w-[30.5rem] tz-border-light-2">
                            <p className="text-xl font-medium tz-text-orange-1">OUR VISION</p>
                            <p className="text-xl tz-text-dark">To ensure wherever you are, you can book and pay for the perfect vehicle to explore Africa with our reliable Treepz hosts.</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-start gap-5 justify-center w-full z-10">
                    <Image src="/assets/images/people.png" alt="" width={1080} height={400} className="self-center" />  
                    <p className="text-xl font-medium text-center self-stretch tz-text-gray">A dedicated team focused on improving Africa’s transportation system.</p> 
                </div>
            </div>
            <div className="my-40"></div>
            <div className="w-full h-24 px-32">
                <div className="flex justify-between items-center w-full px-6 py-8 bg-white">
                    <p className="text-2xl font-medium tz-text-gray">We support the productivity <br /> of Africa’s big teams</p>
                    <div className="flex items-center flex-col gap-2">
                        <div className="flex items-center justify-between w-[40rem]">
                            <Image src="/assets/images/clients/img_6.png" alt="logo icon" width={60} height={16} />
                            <Image src="/assets/images/clients/img_7.png" alt="logo icon" width={60} height={24} />
                            <Image src="/assets/images/clients/img_8.png" alt="logo icon" width={60} height={30} />
                            <Image src="/assets/images/clients/img_10.png" alt="logo icon" width={60} height={20} />
                            <Image src="/assets/images/clients/img_11.png" alt="logo icon" width={60} height={20} />
                            <Image src="/assets/images/clients/img_13.png" alt="logo icon" width={40} height={40} />
                        </div>
                        <div className="flex items-center justify-between w-[40rem]">
                            <Image src="/assets/images/clients/img_9.png" alt="logo icon" width={60} height={36} />
                            <Image src="/assets/images/clients/img_15.png" alt="logo icon" width={60} height={48} />
                            <Image src="/assets/images/clients/img_14.png" alt="logo icon" width={60} height={20} />
                            <Image src="/assets/images/clients/img_16.png" alt="logo icon" width={60} height={60} />
                            <Image src="/assets/images/clients/img_17.png" alt="logo icon" width={40} height={40} />
                            <Image src="/assets/images/clients/img_12.png" alt="logo icon" width={60} height={20} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-40"></div>
            <div className="px-32">
                <div className="flex items-start gap-16">
                    <div className="flex items-start pt-36">
                        <div className="pt-12">
                            <Image src="/assets/images/friendz1.png" alt="logo icon" width={360} height={480} />
                        </div>
                        
                        <div className="h-[44rem]">
                            <div className="flex flex-col items-start gap-4 w-full pl-16 mb-16">
                                <p className="self-stretch text-center text-xl font-medium tz-text-gray">OUR STORY</p>
                                <p className="self-stretch text-center text-3xl font-medium tz-text-dark">Treepz was founded by four entrepreneurs who were tired of the broken transport system in Africa and wanted to make a change.</p>
                                <p className="self-stretch text-center text-xl tz-text-gray">They started with bus-hailing solution which grew quickly, and they realized make an even great impact, more has to be done, hence Treepz.</p>
                            </div>
                            <Image src="/assets/images/friendz3.png" alt="logo icon" width={412} height={284} />
                        </div>
                    </div>
                    <div>
                        <Image src="/assets/images/friendz2.png" alt="logo icon" width={360} height={480} />
                    </div>
                </div>
            </div>
            {/*<div className="w-full">
            	<Image src="/assets/images/toyota-forerunner-bg.png" alt="" width={1440} height={480} className="flex-shrink-0 self-stretch" />
            </div>*/}
            <div className="my-20"></div>
            <OurValues />
            <div className="my-48"></div>
            <div className="w-full px-32">
                <h4 className="text-2xl font-medium mb-10 self-stretch text-center tz-text-gray">INVESTORS IN TREEPZ</h4>
                <div className="flex justify-center items-center gap-16 w-full">
                    <Image src="/assets/images/investors/google-logos-idP6g0Ep4y-1.png" alt="logo icon" width={140} height={44} />
                    <Image src="/assets/images/investors/Techstars_Logo_Primary_Black-1.png" alt="logo icon" width={152} height={44} />
                    <Image src="/assets/images/investors/sosv-positive.png" alt="logo icon" width={102} height={44} />
                    <Image src="/assets/images/investors/shockventures-white.png" alt="logo icon" width={44} height={44} />
                    <Image src="/assets/images/investors/LoftyInc-Logo-1.png" alt="logo icon" width={80} height={44} />
                    <Image src="/assets/images/investors/BKR-Capital-Logo-1.png" alt="logo icon" width={80} height={44} />
                    <Image src="/assets/images/investors/ODBA-logo.png" alt="logo icon" width={132} height={44} />
                    <Image src="/assets/images/investors/MT-Logo.png" alt="logo icon" width={70} height={44} />
                </div>
            </div>
            <div className="my-40"></div>
            <div className="px-32 flex items-start justify-between self-stretch w-full">
                <div className="flex flex-col items-start gap-4 w-1/4">
                    <p className="text-xl font-medium tz-text-gray">OUR BOARD OF DIRECTORS</p>
                    <p className="text-2xl font-medium tz-text-dark">Board members bring expertise in impact investing, strategic management, law, sales, and technology</p>
                    <p className="tz-text-gray">Each person has an history with transportation and technology business in Africa</p>
                </div>
                <div className="grid grid-cols-3 gap-10">
                    {
                        DIRECTORS.map((item, index) => {
                            return <div key={item?.key}>
                                    <DirectorCard image={item?.image} name={item?.name} role={item?.role} board={item?.board} bg={item?.bg} />
                                </div>
                        })
                    }
                </div>
            </div>
            <div className="my-40"></div>
            <div className="px-32 flex items-start justify-between self-stretch w-full">
                <div className="flex flex-col items-start gap-4 w-1/4">
                    <p className="text-xl font-medium tz-text-gray">Our Founders</p>
                    <p className="text-2xl font-medium tz-text-dark">The team brings together decades of experience across transportation, and technology</p>
                    <p className="tz-text-gray">Each person has an history with transportation and technology business in Africa</p>
                </div>
                <div className="grid grid-cols-3 gap-10">
                    {
                        FOUNDERS.map((item, index) => {
                            return <div key={item?.key}>
                                    <DirectorCard image={item?.image} name={item?.name} role={item?.role} board={item?.board} bg={item?.bg} />
                                </div>
                        })
                    }
                </div>
            </div>
            <div className="my-40"></div>
            <div className="px-32 py-14 flex items-center justify-between w-full tz-bg-light">
                <div className="flex flex-col items-start gap-1 pb-6 w-72 tz-border-bottom">
                    <h1 className="text-7xl font-medium tz-text-dark">11K+</h1>
                    <p className="text-sm font-light tz-text-gray">Total completed bookings</p>
                </div>
                <div className="flex flex-col items-start gap-1 pb-6 w-72 tz-border-bottom">
                    <h1 className="text-7xl font-medium tz-text-dark">2K+</h1>
                    <p className="text-sm font-light tz-text-gray">Total hosts doing business on Treepz*</p>
                </div>
                <div className="flex flex-col items-start gap-1 pb-6 w-72 tz-border-bottom">
                    <h1 className="text-7xl font-medium tz-text-dark">20K+</h1>
                    <p className="text-sm font-light tz-text-gray">Vehicles listed on Treepz marketplace*</p>
                </div>
                <div className="flex flex-col items-start gap-1 pb-6 w-72 tz-border-bottom">
                    <h1 className="text-7xl font-medium tz-text-dark">12K+</h1>
                    <p className="text-sm font-light tz-text-gray">African countries covered*</p>
                </div>
            </div>
            <div className="my-40"></div>
            <div className="px-32 w-full">
                <div className="flex items-end justify-center px-9 pb-10 h-72 rounded-3xl w-full relative tz-bg-dark-1">
                    <div className="flex items-center justify-between w-full">
                        <div className="text-[2.5rem] font-medium text-white">
                            <span className="tz-text-gray-2">Join </span> our team
                        </div>
                        <Button1 text="View open roles" url="" width="width2" />
                    </div>
                    <Image src="/assets/images/team.png" alt="team" width={420} height={280} className="absolute bottom-0" />
                </div>
            </div>
            <div className="my-40"></div>
            <div className="px-32 w-full">
                <div className="flex items-center gap-8 mb-16">
                    <h2 className="text-[2.5rem] font-medium tz-text-dark">Keep up to date</h2>
                    <Button2 text="Read our blog" />
                </div>
                <div className='flex justify-between items-start self-stretch'>
                    {
                        CONTENTS.map((item, index) => {
                            return <div key={item?.key}>
                                    <BlogCard1 image={item?.image} title={item?.title} description={item?.description} />
                                </div>
                        })
                    }
                </div>
            </div>
            <div className="my-80"></div>
            <Footer />
        </div>
    );
};

export default Page;
