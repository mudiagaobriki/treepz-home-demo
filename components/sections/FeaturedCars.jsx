'use client';

import React, {useEffect, useState} from 'react';
import Image from "next/image";
import Link from "next/link";

// Custom components
import CarCard from '@/components/items/CarCard';
import Card3 from '@/components/items/Card3';
import {fetchVehicleListing} from "../../services/dataservices/vehicleService";
import {isMobile} from "react-device-detect";
import {
    setAllVehicleListings,
    setFilterResult,
    setSelectedRide,
    setVehiclesListing
} from "../../redux/features/marketplaceSlice";
import {useDispatch} from "react-redux";
import {useRouter} from "next/navigation";
import {Spinner} from "flowbite-react";
// import isMobile from '@/components/helpers/isMobile'


const FeaturedCars = ({fetching=true, carsData=[]}) => {
    const [data, setData] = useState(carsData);
    const [loading, setLoading] = useState(fetching);

    useEffect(() => {
        setData(carsData)
    },[carsData])

    useEffect(() => {
        setLoading(fetching)
    }, [fetching]);

    // const { vehicles, isLoading, isError } = fetchVehicleListing();
    // console.log({vehicles, isLoading, isError});
    //
    const dispatch = useDispatch();
    const router = useRouter();
    //
    // useEffect(() => {
    //     // add condition to make it load only if vehicle data is empty
    //     console.log("Use effect called")
    //
    //     // if (isLoading) return <Spinner/>
    //     // add available filter
    //     // add filter for intercity or rental or airport transfer
    //
    //     // restructure the fetched data to get the keys we need
    //     if (!isLoading){
    //         console.log("Loading---")
    //         let data = vehicles?.data;
    //         // dispatch(setAllVehicleListings(data));
    //         data = data?.map(({id,currencySymbol,driveType,pricePerDay,vehicle,vehicleId,isAvailable,
    //                               pricePerHour, pricePerMonth, pricePerWeek, halfDayPrice,availableTimes}) =>
    //             ({id,currencySymbol,driveType,pricePerDay,vehicle,vehicleId,isAvailable,
    //                 pricePerHour, pricePerMonth, pricePerWeek, halfDayPrice,availableTimes}))
    //
    //         setVehiclesData(data); // actual
    //         // setVehiclesData(FEATURED_CARS); // dummy data
    //         // dispatch(setVehiclesListing(data)) // actual
    //         // dispatch(setVehiclesListing(FEATURED_CARS)) // dummy data
    //         // dispatch(setFilterResult(data)) // actual
    //         // dispatch(setFilterResult(FEATURED_CARS)) // dummy data
    //         // console.log({FEATURED_CARS})
    //         setFetching(false)
    //         console.log({data})
    //     }
    //
    // },[isLoading])

    // useEffect(() => {
    //     console.log({vehiclesData})
    // }, [vehiclesData]);

    const cardClicked = async (item) => {
        dispatch(setSelectedRide(item));
        // localStorage.setItem("selected", JSON.stringify(item))
        await router.push("/vehicle-details")
    }

    // let mobPad = isMobile ? "px-5 py-2" : "px-20 py-3";

    if (data?.length === 0){
        return <Spinner />
    }


    return data?.length !== 0 ? (
        <>
            <div className='flex items-center gap-6 w-30 tz-px-30'>
                {/*<h1>Length of vehicles; {Array.from(vehiclesData).length}</h1>*/}
                {
                    data?.slice(0,3)?.map((item, index) => {
                        return <div key={index} style={{cursor: 'pointer'}}>
                            <CarCard
                                onClick={() => cardClicked(item)}
                                carImage={item?.vehicle?.vehicleImages}
                                carName={item.vehicle?.vehicleMake?.name + " " + item?.vehicle?.vehicleModel?.name}
                                location={item.location}
                                hasAC={item.vehicle?.vehicleHasAirCondition}
                                hasWifi={item.hasWifi}
                                hasDisabledSeat={item.hasDisabledSeat}
                                isChauffeured={item?.driveType === "chaffeured"}
                                isPromoted={item.isPromoted}
                                isSelfDrive={item.isSelfDrive}
                                isRareFind={item.isRareFind}
                                rating={item.rating}
                                numSeats={item?.vehicle?.vehicleSittingCapacity}
                                price={Number(item.pricePerDay).toLocaleString()}
                                tripsCount={item.trips}
                                // carName={item.carName}
                                // carImage={item.image}
                                // location={item.location}
                                // hasAC={item.hasAC}
                                // hasWifi={item.hasWifi}
                                // hasDisabledSeat={item.hasDisabledSeat}
                                // isChauffeured={item.isChauffeured}
                                // isPromoted={item.isPromoted}
                                // isSelfDrive={item.isSelfDrive}
                                // isRareFind={item.isRareFind}
                                // rating={item.rating}
                                // numSeats={item.seats}
                                // price={item.price}
                                // tripsCount={item.trips}
                            />
                        </div>
                    })
                }
                <Card3 />
            </div>
        </>

    ): <Spinner />


};

export default FeaturedCars;
