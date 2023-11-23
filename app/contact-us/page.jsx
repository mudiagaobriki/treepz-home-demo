'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";

import { Modal } from 'flowbite';

import NavBar from '@/components/sections/NavBar';
import ReviewReservation from '@/components/modals/ReviewReservation';
import Button2 from '@/components/items/Button2';
import ContactCard from '@/components/items/ContactCard';
import CommonQuestions from '@/components/sections/CommonQuestions';
import Footer from '@/components/sections/Footer';

const CONTENTS = [
    {
        key: 1,
        image: "/assets/images/get-help.png",
        imgWidth: 88,
        title: "Get help",
        description: "Speak to our team today, and ask anything about Treepz",
        btnText: "Speak with us",
        btnLink: ""
    },
    {
        key: 2,
        image: "/assets/images/have-a-question.png",
        imgWidth: 112,
        title: "Have a question",
        description: "We have being asked a ton of questions. Find all answers.",
        btnText: "See FAQs",
        btnLink: "/faqs"
    },
    {
        key: 3,
        image: "/assets/images/partners.png",
        imgWidth: 96,
        title: "Partners",
        description: "We love partnering with other businesses. Let us know what you’re thinking.",
        btnText: "Contact us",
        btnLink: ""
    },
    {
        key: 4,
        image: "/assets/images/press-and-media.png",
        imgWidth: 96,
        title: "Press & media",
        description: "Download our brand guide including logos and product images.",
        btnText: "Download assets",
        btnLink: ""
    },
]

const Page = () => {

    return (
        <div>
            <NavBar bgColor="#FFF" />
            <div className="flex flex-col items-start gap-5 justify-center w-full mb-20 -space-y-12">
                {/*<Image src="/assets/images/people.png" alt="" width={1080} height={400} className="self-center" />  */}
                <div className="flex items-center justify-center w-full h-40 bg-cover bg-center bg-[url('/assets/images/carOnRoad.png')]"> </div>
                <div className="px-20 w-full">
                    <div className="flex items-center justify-between w-full px-10 py-8 rounded-b-xl mb-10 tz-bg-orange">
                        <h1 className="text-7xl font-medium tz-text-dark">Get in touch</h1>
                        <button 
                            data-modal-target="review-reservation-modal" 
                            data-modal-toggle="review-reservation-modal" 
                            // href="" 
                            className="flex items-center justify-center w-48 rounded-lg self-stretch font-semibold hover:bg-[#101010] hover:text-white tz-text-dark tz-border-dark"
                        >
                            Ask a human
                        </button>
                    </div>
                    <div className="flex items-center justify-center w-full">
                        <p className="text-2xl text-center w-[52.5rem] self-stretch tz-text-gray">Choose a category below to email the support team so we can get back to you as quickly as possible.</p> 
                    </div>
                </div>
            </div>
            <div className="my-52"></div>
            <div className="px-32 w-full">
                <div className='flex justify-between items-start self-stretch'>
                    {
                        CONTENTS.map((item, index) => {
                            return <div key={item?.key}>
                                    <ContactCard image={item?.image} imgWidth={item?.imgWidth} title={item?.title} description={item?.description} btnText={item?.btnText} btnLink={item?.btnLink} />
                                </div>
                        })
                    }
                </div>
            </div>
            <div className="my-40"></div>
            <div className="px-32 w-full">
                <div className="flex items-start justify-between w-full">
                    <div className="">
                        <h2 className="text-[2.5rem] font-medium mb-6 tz-text-dark">Have any <br />questions for us?</h2>
                        <p className="text-xl mb-5 tz-text-gray">Send us a message!</p>
                        <div className="flex items-center px-3 py-1 gap-1 rounded-2xl bg-[#2F2B43] mb-24">
                            <span className="w-2 h-2 bg-[#53B483] rounded-full"></span>
                            <span className="font-medium text-white text-center">We typically respond in an hour</span>
                        </div>
                        <Image src="/assets/images/woman-on-call.png" alt="lady-on-call" width={440} height={315} />
                    </div>
                    <div className="flex flex-col items-start gap-12 px-8 py-14 w-[42rem] md:w-[30rem] rounded-2xl bg-white flex-shrink-0 tz-border-gray-2">
                        <form className="w-full" action="#">
                            <div className="flex flex-col items-start gap-8 mb-12 w-full">
                                <div className="flex items-start justify-between w-full">
                                    <div className="relative w-64">
                                        <a href="#" className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-cursor">
                                            <Image src="/assets/images/user-6-fill.png" alt="user-icon" width={20} height={20} />
                                        </a>
                                        <input type="text" id="firstName" className="block rounded-lg pl-10 pr-3 pt-6 pb-2 w-full text-base bg-white  border appearance-none focus:outline-none focus:ring-0 focus:border-[#A0A3A6] peer tz-text-gray-2 tz-border-light-3" placeholder=" " />
                                        <label for="firstName" className="absolute text-base duration-100 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-10 peer-focus:text-[#A0A3A6] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 tz-text-gray-2">First name</label>
                                    </div>
                                    <div className="relative w-64">
                                        <a href="#" className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-cursor">
                                            <Image src="/assets/images/side-bar-fill.png" alt="side-bar-icon" width={20} height={20} />
                                        </a>
                                        <input type="text" id="lastName" className="block rounded-lg pl-10 pr-3 pt-6 pb-2 w-full text-base bg-white  border appearance-none focus:outline-none focus:ring-0 focus:border-[#A0A3A6] peer tz-text-gray-2 tz-border-light-3" placeholder=" " />
                                        <label for="lastName" className="absolute text-base duration-100 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-10 peer-focus:text-[#A0A3A6] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 tz-text-gray-2">Last name</label>
                                    </div>
                                </div>
                                <div className="relative w-full">
                                    <a href="#" className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-cursor">
                                        <Image src="/assets/images/mail-fill.png" alt="email-icon" width={20} height={20} />
                                    </a>
                                    <input type="email" id="emailAddress" className="block rounded-lg pl-10 pr-3 pt-6 pb-2 w-full text-base bg-white  border appearance-none focus:outline-none focus:ring-0 focus:border-[#A0A3A6] peer tz-text-gray-2 tz-border-light-3" placeholder=" " />
                                    <label for="emailAddress" className="absolute text-base duration-100 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-10 peer-focus:text-[#A0A3A6] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 tz-text-gray-2">Email address</label>
                                </div>
                                <div className="relative w-full">
                                    <a href="#" className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-cursor">
                                        <Image src="/assets/images/phone-fill.png" alt="phone-icon" width={20} height={20} />
                                    </a>
                                    <input type="text" id="phoneNumber" className="block rounded-lg pl-10 pr-3 pt-6 pb-2 w-full text-base bg-white  border appearance-none focus:outline-none focus:ring-0 focus:border-[#A0A3A6] peer tz-text-gray-2 tz-border-light-3" placeholder=" " />
                                    <label for="phoneNumber" className="absolute text-base duration-100 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-10 peer-focus:text-[#A0A3A6] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 tz-text-gray-2">Phone number</label>
                                </div>
                                <div className="relative w-full">
                                    <a href="#" className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-cursor">
                                        <Image src="/assets/images/flag-fill.png" alt="flag-icon" width={20} height={20} />
                                    </a>
                                    <select id="country" className="block rounded-lg pl-10 pr-3 py-4 w-full text-base bg-white  border appearance-none focus:outline-none focus:ring-0 focus:border-[#A0A3A6] peer tz-text-gray-2 tz-border-light-3">
                                        <option value="">Country</option>
                                        <option>United States</option>
                                        <option>Canada</option>
                                        <option>France</option>
                                        <option>Germany</option>
                                    </select>
                                    {/*<label for="country" className="absolute text-base duration-100 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-10 peer-focus:text-[#A0A3A6] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 tz-text-gray-2">Country</label>*/}
                                </div>
                                <div className="relative w-full">
                                    <a href="#" className="absolute inset-y-0 left-0 top-5 pl-3 pointer-cursor">
                                        <Image src="/assets/images/paragraph.png" alt="paragraph-icon" width={20} height={20} />
                                    </a>
                                    <textarea id="message" rows="4" class="block rounded-lg pl-10 pr-3 pt-6 pb-2 w-full text-base bg-white  border appearance-none focus:outline-none focus:ring-0 focus:border-[#A0A3A6] peer tz-text-gray-2 tz-border-light-3" placeholder=" "></textarea>
                                    <label for="message" className="absolute text-base duration-100 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-10 peer-focus:text-[#A0A3A6] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 tz-text-gray-2">Your message</label>
                                </div>
                            </div>
                            <div className="w-full">
                                <button 
                                    type="submit"
                                    className={`flex py-3 px-6 justify-center items-center font-semibold w-full rounded-lg bg-[#FBDF88] tz-text-dark-1`}
                                >
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="mt-60 h-32 tz-bg-light"></div>
            <CommonQuestions />
            <div className="h-64 w-full pt-32 tz-bg-light">
                <div className="h-[1px] self-stretch tz-bg-gray-3"></div>
            </div>
            <Footer />
            <ReviewReservation />
        </div>
    );
};

export default Page;
