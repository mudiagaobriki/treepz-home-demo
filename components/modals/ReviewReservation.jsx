'use client';

import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";

import { Modal } from 'flowbite-react';

// Custom components
import Button1 from '@/components/items/Button1';
import Button2 from '@/components/items/Button2';
import ProgressBar from '@/components/modals/ProgressBar';
// import isMobile from '@/components/helpers/isMobile'

const ReviewReservation = ({show, hideModal}) => {
    
    // let mobPad = isMobile ? "px-5 py-2" : "px-20 py-3";

    return (
        <Modal size="xl" show={show} onClick={() => hideModal()} >
            <Modal.Header>
                <h4 className="font-medium tz-text-dark-1">Host has accepted trip</h4>
            </Modal.Header>
            <Modal.Body>
                <div className="w-full pb-20">
                    <div className="my-20"></div>
                    <div className="flex place-content-center">
                        <ProgressBar minutes={0} seconds={30} color="green" background={false} />
                    </div>
                    <div className="my-14"></div>
                    <h3 className="text-3xl font-semibold text-center self-stretch mb-3 tz-text-dark">Host is reviewing your booking</h3>
                    <p className="text-center self-stretch mb-10 text-sm tz-text-gray-3">
                        We’ve sent your offer to the driver, you’ll get feedback in a <span className="font-bold tz-text-dark">10 minutes</span>
                    </p>
                    <div className="flex flex-col gap-5 self-stretch">
                        <Button1 text="Make payment" url="" />
                        <Button2 text="Cancel offer" url="" />
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default ReviewReservation;
