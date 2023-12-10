'use client';

import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import Autocomplete, {usePlacesWidget} from "react-google-autocomplete";

// Third party component
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// Custom components
import Button1 from '@/components/items/Button1'
import {useDispatch, useSelector} from "react-redux";
import {setFilterResult, setVehiclesListing} from "../../redux/features/marketplaceSlice";
import {fetchVehicleListing} from "../../services/dataservices/vehicleService";
import {searchRentals} from "../../services/functions/filters";
import {useRouter} from "next/navigation";
// import isMobile from '@/components/helpers/isMobile'

const VehicleSearchBox = ({data,marketPlace=false}) => {
  const [selectedPickDate, setSelectedPickDate] = useState(new Date());
  const [selectedPickTime, setSelectedPickTime] = useState(new Date());
  const [selectedDropDate, setSelectedDropDate] = useState(new Date());
  const [selectedDropTime, setSelectedDropTime] = useState(new Date());
  const [toLocation, setToLocation] = useState('');
  const [locality, setLocality] = useState('');
  const [stateInCountry, setStateInCountry] = useState('');
  const [country, setCountry] = useState('');
  // const [listingsData, setToLocation] = useState('');

  const dispatch = useDispatch();
  const router = useRouter();

    // let mobPad = isMobile ? "px-5 py-2" : "px-20 py-3";

    const handleSearch = () => {
        // if (toLocation === ""){
        //     dispatch(setFilterResult(data))
        // }
        console.log({selectedPickDate})
        let pDate = selectedPickDate
        //format the selected pickup date
        let year = pDate.toLocaleString("default", { year: "numeric" });
        let month = pDate.toLocaleString("default", { month: "2-digit" });
        let day = pDate.toLocaleString("default", { day: "2-digit" });

        // Generate yyyy-mm-dd date string
        let formattedDate = year + "-" + month + "-" + day;
        console.log(formattedDate)
        const availableRides = data?.filter(el => (el?.isAvailable === true));
        console.log({availableRides})
        // const carsInLocation = data?.filter(el => el?.locationKeywords?.includes(toLocation?.toLowerCase()))
        let searchResults
        if (toLocation === ""){
            searchResults = searchRentals(availableRides,formattedDate,'','','',false)
        }
        else{
            // console.log("Searching here")
            // console.log({formattedDate,locality,stateInCountry,country})
            searchResults = searchRentals(availableRides,formattedDate,locality,stateInCountry,country)
        }

        console.log({searchResults})
        dispatch(setFilterResult(searchResults));
        console.log({toLocation})

        if (!marketPlace){
            router.push(`/market-place?location=${toLocation}&pickup=${selectedPickDate}&dropoff=${selectedDropDate}`)
        }
    }

    const { ref, autocompleteRef } = usePlacesWidget({
        apiKey:"AIzaSyDcpqQNbjIQasjqRriOGOYnnSQdAGOUvVs",
        onPlaceSelected: (place) => {
            console.log(place);
            console.log('locality: ',place?.address_components?.find(el => el?.types?.includes('locality')))
            console.log('State in country: ',place?.address_components?.find(el => el?.types?.includes('administrative_area_level_1')))
            console.log('Country: ',place?.address_components?.find(el => el?.types?.includes('country')))
            setLocality(place?.address_components?.find(el => el?.types?.includes('locality'))?.long_name)
            setStateInCountry(place?.address_components?.find(el => el?.types?.includes('administrative_area_level_1'))?.long_name)
            setCountry(place?.address_components?.find(el => el?.types?.includes('country'))?.long_name)
            setToLocation(place?.formatted_address)
        },
        options: {
            types: ["geocode", "establishment",],
        }
    });

    return (
        <div className={`flex flex-col justify-center items-center ${!marketPlace && '-space-y-3'}`}>
            {!marketPlace && <div className="flex items-center gap-3 px-3 py-2 rounded-[3.75rem] tz-searchbox-buttons">
                            <Link href="/airport-transfers" className="flex items-center gap-2 px-3 py-2 rounded-3xl">
                                <Image src="/assets/images/plane-light.png" alt="" width={20} height={20} />
                                <span className="text-white">Airport transfers</span>
                            </Link>
                            <Link href="" className="flex items-center gap-2 px-3 py-2 rounded-3xl bg-white">
                                <Image src="/assets/images/car.png" alt="" width={20} height={20} />
                                <span className="tz-text-dark">Vehicle rentals</span>
                            </Link>
                            <Link href="/inter-city-travels" className="flex items-center gap-2 px-3 py-2 rounded-3xl">
                                <Image src="/assets/images/car-light.png" alt="" width={20} height={20} />
                                <span className="text-white">Inter-city travels</span>
                            </Link>
                        </div>}
            <div className="flex flex-col items-start gap-4 rounded-2xl bg-white pt-6 pb-5 px-5">
                <div className="flex items-center gap-4 self-stretch w-full">
                    <div className="flex items-center px-3 py-2 rounded-lg bg-white w-[30rem] tz-border-light-3">
                        <div className="flex justify-center items-center gap-3 w-full">
                            <Image src="/assets/images/map-pin.png" alt="" width={20} height={20} />
                            <div className="w-full">
                                <p className="mb-1 text-xs tz-text-gray-2">Where are you going?</p>
                                <input ref={ref} value={toLocation} onChange={e => setToLocation(e.target.value)} type="text" className="text-base self-stretch p-0 w-full outline-none border-0 focus:ring-0 placeholder-[#C8CCD0] tz-text-gray-5" placeholder="City, airport, address or hotel" />
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white w-56 tz-border-light-3">
                        <Image src="/assets/images/calendar-event-fill.png" alt="" width={20} height={20} />
                        <div className="w-full">
                            <p className="mb-1 text-xs tz-text-gray-2">Pick-up Date</p>
                            {/*<input type="date" className="text-sm outline-none border-0 focus:ring-0 p-0 placeholder-[#C8CCD0] tz-text-gray-2" placeholder="Sun, Sep 10" />*/}
                            <DatePicker
                                className="outline-none border-0 focus:ring-0 w-20 p-0 text-sm tz-text-gray-2"
                                selected={selectedPickDate}
                                onChange={(date) => setSelectedPickDate(date)}
                                dateFormat="MMM dd" // Customize the date format if needed
                            />
                        </div>
                        <div className="w-[1px] flex-shrink-0 self-stretch tz-bg-light-1"></div>
                        <div>
                            <p className="mb-1 text-xs tz-text-gray-2">Time</p>
                            {/*<input type="time" className="text-sm outline-none border-0 focus:ring-0 p-0 placeholder-[#C8CCD0] tz-text-gray-2" placeholder="01:10 PMl" />*/}
                            <DatePicker
                                className="outline-none border-0 focus:ring-0 w-16 p-0 text-sm tz-text-gray-2"
                                selected={selectedPickTime}
                                showTimeSelect
                                timeFormat="HH:mm aa"
                                onChange={(date) => setSelectedPickTime(date)}
                                dateFormat="HH:mm aa" // Customize the date format if needed
                            />
                        </div>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white w-56 tz-border-light-3">
                        <Image src="/assets/images/calendar-event-fill.png" alt="" width={20} height={20} />
                        <div>
                            <p className="mb-1 text-xs tz-text-gray-2">Drop-off Date</p>
                            {/*<input type="date" className="text-sm outline-none border-0 focus:ring-0 p-0 placeholder-[#C8CCD0] tz-text-gray-2" placeholder="Sun, Sep 10" />*/}
                            <DatePicker
                                className="outline-none border-0 focus:ring-0 w-20 p-0 text-sm tz-text-gray-2"
                                selected={selectedDropDate}
                                onChange={(date) => setSelectedDropDate(date)}
                                dateFormat="MMM dd" // Customize the date format if needed
                            />
                        </div>
                        <div className="w-[1px] flex-shrink-0 self-stretch tz-bg-light-1"></div>
                        <div>
                            <p className="mb-1 text-xs tz-text-gray-2">Time</p>
                            {/*<input type="time" className="text-sm outline-none border-0 focus:ring-0 p-0 placeholder-[#C8CCD0] tz-text-gray-2" placeholder="01:10 PMl" />*/}
                            <DatePicker
                                className="outline-none border-0 focus:ring-0 w-16 p-0 text-sm tz-text-gray-2"
                                selected={selectedDropTime}
                                showTimeSelect
                                timeFormat="HH:mm aa"
                                onChange={(date) => setSelectedDropTime(date)}
                                dateFormat="HH:mm aa" // Customize the date format if needed
                            />
                        </div>
                    </div>
                    <div>
                        <Button1 onClick={handleSearch} text={"Search"} submit={true} width={"[21.5rem]"} iconLeft={true} img={"/assets/images/search-line.png"} />
                    </div>
                </div>
                {!marketPlace && <div>
                                    <label className="flex items-center gap-2" for="workTravel">
                                        <input type="checkbox" name="" className="w-4 h-4 accent-[#F8B02B] focus:ring-2 focus:ring-[#F8B02B] rounded tz-text-orange-1 tz-checbox-border" id="workTravel" /> 
                                        <span className="text-sm tz-text-gray-3">I’m travelling for work</span>
                                    </label>
                                </div>}
            </div>
        </div>
    );
};

export default VehicleSearchBox;
