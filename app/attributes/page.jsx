'use client';

import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";

// Custom components
import NavBar from '@/components/sections/NavBar';
import GuestHost from '@/components/items/GuestHost';
import FaqsItem from '@/components/items/FaqsItem';
import GetStartedSection from '@/components/sections/GetStartedSection';
import ProgressBar from '@/components/modals/ProgressBar';
import ReviewReservation from '@/components/modals/ReviewReservation';
import Footer from '@/components/sections/Footer';

const Page = () => {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <div>
            <NavBar bgColor="#FFF" />
            <div className="my-20"></div>
            <div className="w-full px-32">
                <div className="text-7xl font-medium mb-16 text-center self-stretch tz-text-dark">Attributes</div>
                <div className="flex flex-col items-start gap-14">
                    <div>
                        <h4 className="text-[2.5rem] font-medium mb-6 tz-text-dark">1.  Introduction</h4>
                        <div className="text-lg tz-text-dark">
                            <p>TreepzNg Limited (“Treepz ”, “we”, “us”, “our” “Company”), recognizes your privacy rights as guaranteed under the 1999 Constitution of the Federal Republic of Nigeria; The Nigerian Data Protection Regulation (NDPR), and other applicable privacy laws in Nigeria. Thus, it is important to us as a law-abiding organisation that your Personal Data is managed, processed and protected in accordance with the provisions of the applicable laws. In the course of our business and/or your engagement with us and third parties through our Platforms (this includes but are not limited to our websites, digital platforms, mobile applications, physical operations/offices, amongst others), we may process your Personal Data, subject however to the terms of this Policy. This Privacy Policy (“Policy”) therefore explains our privacy practices with respect to how we collect, process your Personal Data and describes your rights as a user of any of our services and Platforms.</p>
                            <p>This Policy applies to all our Platforms, and all related sites, applications, services and tools regardless of how they are accessed or used. In this Privacy Policy, “we”, “us” or “our” refers to Treepz Limited and its successors, agents and assigns, while “you”, “your” refers to you and/or any person who subscribes for, uses or authorizes the use of the Service.</p>
                            <p>Our Privacy Policy explains our user’s privacy rights regarding:</p>
                            <p>1. What Personal Data we collect</p>
                            <p>2. Why we collect such Personal Data</p>
                            <p>3. The use of such Personal Data</p>
                            <p>4. The storage, sharing and protection of such Personal Data</p>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-[2.5rem] font-medium mb-6 tz-text-dark">2.  Consent</h4>
                        <p className="text-lg tz-text-dark">As a user of any of our Platforms, you accept this Privacy Policy when you sign up for, or use our products, services, content, technologies or functions offered on our Platforms and all related sites and services (“Services”).</p>
                    </div>
                    <div>
                        <h4 className="text-[2.5rem] font-medium mb-6 tz-text-dark">3.  Definition of terms</h4>
                        <p className="text-lg tz-text-dark">For the purpose of this Policy:</p>
                        <ol>
                            <li><b>Personal Data:</b> Means any information relating to you, including your name, identification number, location data, online identifier address, photo, email address, pins, passwords, bank details, posts on our Platforms, religion, date of birth, health, race/tribe, nationality, ethnicity, political views, trade union membership, criminal records, medical information, and other unique identifiers such as but not limited to MAC address, IP address, IMEI number, Bank Verification Number, IMSI number, SIM and others. It also includes factors specific to your physical, physiological, genetic, mental, economic, cultural or social identity.</li>
                            <li><b>Process/Processing:</b> Means any operation or set of operations which is performed on your Personal Data or sets of Personal Data, whether or not by automated means, such as collection, recording, organisation, structuring, storage, adaptation or alteration, retrieval, consultation, use, disclosure by transmission, dissemination or otherwise making available, alignment or combination, restriction, erasure or destruction.</li>
                            <li><b>Consent:</b> We kindly request that you carefully read through this Policy and click on the ‘Agree’ icon below, if you consent to the terms of this Policy, particularly with respect to the processing of your Personal Data. That notwithstanding, if you proceed to use any of our Platforms and services, it will deemed that you have provided your express consent to the terms of this Policy.</li>
                            <li><b>Age:</b> You must be at least 18 years old to use our services or any of our Platforms. Individuals under the age of 18, or applicable age of maturity, may utilize our Platforms services only with involvement of a parent or legal guardian, under such person’s account. Regardless, all Personal Data which we may process shall be in accordance with this Policy and other applicable laws.</li>
                        </ol>
                    </div>
                    <div>
                        <h4 className="text-[2.5rem] font-medium mb-6 tz-text-dark">4.  Collection of personal data</h4>
                        <p className="text-lg tz-text-dark">In the course of your engagement with us or with third parties through our Platforms, we may collect your Personal Data and non-Personal Data in the following ways:</p><br />
                        <ul>
                            <li><b>Automatic Information collection:</b> We may automatically collect Information upon your engagement with us or our Platforms through your computer, mobile phones, forms, documents made available to us and other access devices. The information sent includes, but is not limited to, data about our pages you access, geo-location information; statistics on page views; traffic to and from our Platforms.</li>
                            <li><b>Information from downloads:</b> When you download or use our digital Platforms or access our site, we may receive non personal information from your mobile device about your location, number of downloads, geo location of downloads. You may disable your location in the settings menu of the device.</li>
                            <li><b>Physically or Digitally Provided Personal Data:</b> We may collect and process your Personal Data when you create and/or update your account on our Platform; complete forms, questionnaires, surveys etc. We may also collect Personal Data from information you provide to us through documents, letters, e-mail, agreements, correspondence, ID cards, passports, or through any other means by which you wilfully provide information to us. When you use Treepz Services, we may also collect Personal Data about your transactions and your activities. In addition, when you open an account on our Platform, we may collect Personal Data such as your contact information, which includes your name, address, phone number, email or other similar information; financial information such as your full bank account numbers and/or credit card or debit card numbers.</li>
                            <li><b>Third Parties:</b> We may also receive your Personal Data from third parties such as, guardians, financial institutions, identity verification services, vendors, and service providers etc.</li>
                            <li><b>Social Media:</b> We also receive Personal Data through your engagements with us on social media sites (e.g., Facebook, Instagram, LinkedIn, Twitter, etc). This includes but are not limited to your replies to our posts, your comments, enquiries, messages to us, etc. We may also collect Personal Data from your public profile and updates on social media.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="my-32"></div>
            <div className="flex place-content-center">
                {/*<ProgressBar minutes={0} seconds={59} color="red" background={false} />*/}
                <button 
                    onClick={() => setModalOpen(true)}
                    className="flex py-3 px-6 justify-center items-center font-semibold w-60 rounded-lg bg-[#F8B02B] hover:bg-[#F8B02B]/80 tz-text-dark-1"
                >
                    Progress bar
                </button>
            </div>
            <div className="my-32"></div>
            <div className="h-28 w-full tz-bg-light tz-border-top-3"></div>
            <GetStartedSection />
            <div className="h-28 w-full tz-bg-light"></div>
            <ReviewReservation show={modalOpen} hideModal={() => setModalOpen(false)} />
            <Footer />
        </div>
    );
};

export default Page;
