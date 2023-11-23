'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";

// Custom components
import VehicleSearchBox from '@/components/searchboxes/VehicleSearchBox'
import AirportSearchBox from '@/components/searchboxes/AirportSearchBox'
import IntercitySearchBox from "../searchboxes/IntercitySearchBox";
// import isMobile from '@/components/helpers/isMobile'

const SearchBoxArea = ({page}) => {

    // let mobPad = isMobile ? "px-5 py-2" : "px-20 py-3";

    return (
        <div className="mb-20">
            <div className={`flex items-center justify-center py-6 w-full bg-white tz-border-top-2 tz-border-bottom-1`}> 
                {page == 'market-place' && <VehicleSearchBox />} 
                {page == 'airport-transfers' && <AirportSearchBox />}
                {page == 'intercity-travels' && <IntercitySearchBox />}
            </div>
        </div>
    );
};

export default SearchBoxArea;
