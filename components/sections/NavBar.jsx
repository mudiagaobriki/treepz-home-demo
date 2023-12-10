'use client';

import React, {useState} from 'react';
import Image from "next/image";
import Link from "next/link";

// Third party components
import { Dropdown } from 'flowbite-react';
import {useRouter} from "next/navigation";
import {useDispatch, useSelector} from "react-redux";
import {setSignOut} from "../../redux/features/authSlice";
import Login from "../modals/Login";
import Signup from "../modals/Signup";
import NewPassword from "../modals/NewPassword";
import ForgotPassword from "../modals/ForgotPassword";
import EmailOTP from "../modals/EmailOTP";
import SuccessCard from "../modals/SuccessCard";
// import {isMobile} from "react-device-detect";

const NavBar = ({bgColor='white'}) => {
    const [showLoginModal, setShowLoginModal] = useState(false)
    const [showSignupModal, setShowSignupModal] = useState(false)
    const [showForgotModal, setShowForgotModal] = useState(false)
    const [showOTPModal, setShowOTPModal] = useState(false)
    const [showResetModal, setShowResetModal] = useState(false)
    const [showSuccessCard, setShowSuccessCard] = useState(false)

    const isMobile = () => typeof window !== 'undefined' ? (window.matchMedia && window.matchMedia("(max-width: 480px)").matches ? true : false) : false

    let mobPad = isMobile() ? "px-5 py-2" : "px-20 py-3";
    const bg = {white: "bg-white", yellow: "bg-[#FDF2D0]"};
    const router = useRouter();
    const dispatch = useDispatch();

    const {currentUser, token} = useSelector(state => state.auth);
    console.log({currentUser, token})

    const handleSignInOrOut = () => {
        if (!currentUser){
            setShowLoginModal(true)
        }
        else{
            dispatch(setSignOut())
            setTimeout(() => window.location?.reload(),1000)
        }
    }

    const handleProfileClicked = () => {
        if (!currentUser){
            setShowLoginModal(true)
        }
        else{
            router?.push('/account/profile')
        }
    }

    const handleWalletClicked = () => {
        if (!currentUser){
            setShowLoginModal(true)
        }
        else{
            router?.push('/account/wallet')
        }
    }

    const handleContactUsClicked = () => {
        if (!currentUser){
            setShowLoginModal(true)
        }
        else{
            router?.push('/contact-us')
        }
    }

    const handleTripsClicked = () => {
        if (!currentUser){
            setShowLoginModal(true)
        }
        else{
            router?.push('/trips/booked')
        }
    }

    const handleCloseModal = () => {
        setShowLoginModal(false)
    }

    const handleCloseSignupModal = () => {
        setShowSignupModal(false)
    }

    const handleCloseForgotModal = () => {
        setShowForgotModal(false)
    }

    const handleCloseOTPModal = () => {
        setShowOTPModal(false)
    }

    const handleCloseResetModal = () => {
        setShowResetModal(false)
    }

    const handleCloseSuccessCard = () => {
        setShowSuccessCard(false)
        setShowLoginModal(true)
    }

    const handleSignupLinkClicked = () => {
        setShowLoginModal(false)
        setShowSignupModal(true)
    }

    const handleLoginLinkClicked = () => {
        setShowLoginModal(true)
        setShowSignupModal(false)
    }

    const handleForgotLinkClicked = () => {
        setShowLoginModal(false)
        setShowForgotModal(true)
    }

    const handleBackToLogin = () => {
        setShowForgotModal(false)
        setShowSignupModal(false)
        setShowLoginModal(true)
    }

    const handleBackToForgotPassword = () => {
        setShowForgotModal(true)
        setShowOTPModal(false)
    }

    const handleShowEmailOTP = () => {
        setShowForgotModal(false)
        setShowOTPModal(true)
    }

    const handleShowNewPassword = () => {
        setShowOTPModal(false)
        setShowResetModal(true)
    }

    const handleShowNSuccessCard = () => {
        setShowResetModal(false)
        setShowSuccessCard(true)
    }

    return (
        <div className={`flex justify-between items-center w-full px-20 py-3 ${bg[bgColor]}`}>
            <Link href='/home'>
                <Image src="/assets/images/logo.png" alt="logo icon" width={120} height={32} />
            </Link>
            <div className="flex items-start gap-5">
            {!isMobile ? 
                <div className="">
                    <div className="flex items-center gap-2 py-2 px-3">
                        <Image src="/assets/images/menu-line.png" alt="menu-line icon" width={20} height={20} />
                        <Image src="/assets/images/user-5-fill.png" alt="user-5-fill icon" width={20} height={20} />
                    </div>
                </div> :
                <div className="flex items-center gap-2">
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2 py-2 px-3">
                            <Image src="/assets/images/car.png" alt="car icon" width={20} height={20} />
                            <Link href="" className="text-sm font-medium">Become a host</Link>
                        </div>
                        <div className="flex items-center gap-1 py-2 px-3">
                            <Image src="/assets/images/nigeria.png" alt="car icon" width={20} height={20} />
                            <p className="text-sm font-medium">NGN</p>
                        </div>
                    </div>
                    <Dropdown 
                        label="" 
                        dismissOnClick={false} 
                        renderTrigger={() => <div className="flex items-center gap-2 py-2 px-3">
                            <Image src="/assets/images/menu-line.png" alt="menu-line icon" width={20} height={20} />
                            <Image src="/assets/images/user-5-fill.png" alt="user-5-fill icon" width={20} height={20} />
                        </div>}
                    >
                                <Dropdown.Item onClick={handleProfileClicked}>Profile</Dropdown.Item>
                                <Dropdown.Item onClick={handleWalletClicked}>Wallet</Dropdown.Item>
                                <Dropdown.Item onClick={handleTripsClicked}>Trips</Dropdown.Item>
                                <Dropdown.Item onClick={handleContactUsClicked}>Contact Us</Dropdown.Item>
                                <Dropdown.Item onClick={handleSignInOrOut}>{!currentUser? "Sign in": "Sign out"}</Dropdown.Item>
                            </Dropdown>
                        {/*<div className="flex items-center gap-2 py-2 px-3">
                                                    <Image src="/assets/images/menu-line.png" alt="menu-line icon" width={20} height={20} />
                                                    <Image src="/assets/images/user-5-fill.png" alt="user-5-fill icon" width={20} height={20} />
                                                    
                                                </div>*/}
                    
                </div>
            }
                <Signup isOpen={showSignupModal} closeModal={handleCloseSignupModal} onLoginPressed={handleLoginLinkClicked} />
                <Login isOpen={showLoginModal} closeModal={handleCloseModal} onRegister={handleSignupLinkClicked}
                       onForgotPassword={handleForgotLinkClicked} />
                <NewPassword isOpen={showResetModal} closeModal={handleCloseResetModal}
                             onBackClicked={handleBackToForgotPassword} onNextStep={handleShowNSuccessCard} />
                <ForgotPassword isOpen={showForgotModal} closeModal={handleCloseForgotModal} onBackClicked={handleBackToLogin}
                                onNextStep={handleShowEmailOTP}/>
                <EmailOTP numberOfDigits={5} isOpen={showOTPModal} closeModal={handleCloseOTPModal}
                          onBackClicked={handleBackToForgotPassword} onNextStep={handleShowNewPassword}/>
                <SuccessCard
                    title={"Password reset successful!"}
                    description={"Your request to reset your password is completed. Proceed to login with your new password."}
                    btnText={"Log in"}
                    modalId={"password-reset-success-modal"}
                    isOpen={showSuccessCard} closeModal={handleCloseSuccessCard}
                    onNextStep={handleShowNewPassword}
                />
            </div>
        </div>
    );
};

export default NavBar;
