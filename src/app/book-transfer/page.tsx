'use client';

import Image from 'next/image';
import { useState } from 'react';
import Tabs from '@/components/Tabs';
import TransferSearch from '@/components/SearchBox/Book Transfer/TransferSearch';
import Banner from '@/components/Banner';
import CarBrand from '@/components/CarBrand';
import PopularDestination from '@/components/PopularDestination';
import InspirationTrip from '@/components/InspirationTrip';


export default function BookTransferPage() {

  const [transferType, setTransferType] = useState<'same-location' | 'different-location'>('same-location');

  return (
    <>
      {/* Header Section */}
      <header className="header header--book-transfer">
        {/* Tabs Navigation */}
        <Tabs />
        
        {/* Page Title */}
        <div className="header__title padding-container">
          <h1 className="heading-1">Find your best ride</h1>
          <p className="xl xl--medium">
            Search low prices on hotels, homes and much more...
          </p>
        </div>
        
        {/* Search Box */}
        <div className="search max-container padding-container">
          <div className="search-box">
            <TransferSearch onTransferTypeChange={setTransferType} />
          </div>
        </div>
        
        {/* Driver Age Checkbox */}
        <div className={`driver-age-wrapper max-container padding-container ${
          transferType === 'different-location' ? 'driver-age-wrapper--different-location' : ''
        }`}>
          <div className="driver-age-checkbox">
            <label className="driver-age-checkbox-form">
              <input 
                type="checkbox" 
                className="driver-age-checkbox-input" 
                name="driver-age" 
                value="30-65"
              />
              <span className="driver-age-checkbox-indicator"></span>
            </label>
            <div className="driver-age-checkbox-text">
              <span className="bs bs--medium">Driver aged between 30 - 65</span>
              <Image 
                src="/img/svg/Warning.svg" 
                alt="Warning" 
                width={20} 
                height={20} 
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main max-container padding-container">
        {/* Safety Banner */}
        <Banner 
          icon="/img/svg/Car.svg"
          title="Clean cars. Flexible bookings. Socially distant rental counters."
          description="We're working with our partners to keep you safe and in the driving seat."
          linkText="Learn more"
          linkHref="#"
          variant="book-transfer"
          transferType={transferType}
        />

        {/* Car Brands Section */}
        <CarBrand />

        {/* Popular Destination Section */}
        <PopularDestination />

        {/* Inspiration Trip Section */}
        <InspirationTrip />
      </main>
    </>
  );
}