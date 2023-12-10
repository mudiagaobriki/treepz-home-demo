'use client';

import React, {useEffect, useState} from 'react';
// import Image from "next/image";
// import Link from "next/link";

import NavBar from '@/components/sections/NavBar';
import HeroBanner from '@/components/sections/HeroBanner';
import CardSection1 from '@/components/sections/CardSection1';
import FeaturedCars from '@/components/sections/FeaturedCars';
import DiscountOffer from '@/components/sections/DiscountOffer';
import Community from '@/components/sections/Community';
import CitySection from '@/components/sections/CitySection';
import BlogSection from '@/components/sections/BlogSection';
import ReviewSection1 from '@/components/sections/ReviewSection1';
import ClientSection1 from '@/components/sections/ClientSection1';
import StatsSection from '@/components/sections/StatsSection';
import GetStartedSection from '@/components/sections/GetStartedSection';
import CommonQuestions from '@/components/sections/CommonQuestions';
import Footer from '@/components/sections/Footer';
import {fetchVehicleListing} from "../../services/dataservices/vehicleService";
import {useDispatch} from "react-redux";
import {useRouter} from "next/navigation";
import {setFilterResult} from "../../redux/features/marketplaceSlice";

const Page = () => {
    const [vehiclesData, setVehiclesData] = useState([]);
    const [fetching, setFetching] = useState(true);

    const { vehicles, isLoading, isError } = fetchVehicleListing();
    console.log({vehicles, isLoading, isError});

    const dispatch = useDispatch();
    const router = useRouter();

    useEffect(() => {
        // add condition to make it load only if vehicle data is empty
        console.log("Use effect called")

        // if (isLoading) return <Spinner/>
        // add available filter
        // add filter for intercity or rental or airport transfer

        // restructure the fetched data to get the keys we need
        if (!isLoading){
            console.log("Loading---")
            let data = vehicles?.data;
            // dispatch(setAllVehicleListings(data));
            data = data?.map(({id,currencySymbol,locationKeywords,driveType,pricePerDay,vehicle,vehicleId,isAvailable,
                                  pricePerHour, pricePerMonth, pricePerWeek, halfDayPrice,availableTimes}) =>
                ({id,currencySymbol,locationKeywords,driveType,pricePerDay,vehicle,vehicleId,isAvailable,
                    pricePerHour, pricePerMonth, pricePerWeek, halfDayPrice,availableTimes}))

            setVehiclesData(data); // actual
            dispatch(setFilterResult(data))
            setFetching(false)
            console.log({data})
        }

    },[isLoading])

    useEffect(() => {
        console.log({vehiclesData})
    }, [vehiclesData]);


    return (
        <div>
            <NavBar bgColor="#FFF" />
            
            <div className="flex flex-col items-start w-full -space-y-20">
                <HeroBanner data={vehiclesData} bgImg={"bg-[url('/assets/images/home-hero-head.png')]"} page="vehicle-rentals" />
                <div className="px-20 w-full flex flex-col items-start gap-1">
                    <h1 className="text-7xl font-medium text-white">Find a ride.</h1>
                    <h1 className="text-7xl font-medium tz-text-dark">Drive your dream.</h1>
                </div>
            </div>
            <div className="my-20"></div>
            <CardSection1 />
            <div className="my-20"></div>
            <FeaturedCars carsData={vehiclesData} fetcing={fetching} />
            <div className="my-20"></div>
            <DiscountOffer />
            <div className="my-20"></div>
            <Community />
            <div className="my-20"></div>
            <CitySection />
            <div className="my-20"></div>
            <BlogSection />
            <div className="my-20"></div>
            <ReviewSection1 />
            <div className="my-20"></div>
            <ClientSection1 />
            <div className="my-20"></div>
            <StatsSection />
            <div className="my-20"></div>
            <GetStartedSection />
            <div className="my-20"></div>
            <CommonQuestions />
            <div className="my-20"></div>
            <Footer />
            <div className="my-20"></div>
        </div>
    );
};

export default Page;
