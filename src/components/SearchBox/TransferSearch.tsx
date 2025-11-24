'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function TransferSearch() {
  const [transferType, setTransferType] = useState('Return to same location');
  const [location, setLocation] = useState('');

  const handleSearch = () => {
    console.log('Searching car:', { transferType, location });
  };

  return (
    <>
      <div className="flight-type">
        <label className="flight-type-item">
          <input
            type="radio"
            name="flight-type"
            value="Return to same location"
            checked={transferType === 'Return to same location'}
            onChange={(e) => setTransferType(e.target.value)}
          />
          <span className="flight-type-indicator"></span>
          <span className="bs bs--medium">Return to same location</span>
        </label>
        <label className="flight-type-item">
          <input
            type="radio"
            name="flight-type"
            value="Return to different location"
            checked={transferType === 'Return to different location'}
            onChange={(e) => setTransferType(e.target.value)}
          />
          <span className="flight-type-indicator"></span>
          <span className="bs bs--medium">Return to different location</span>
        </label>
      </div>

      <div className="search-container">
        <div className="search-item search-item--full">
          <Image
            src="/img/svg/MapPin_subtle.svg"
            alt="Location"
            width={24}
            height={24}
            className="search-item-icon"
          />
          <input
            type="text"
            className="search-item-input lg lg--regular"
            placeholder="Where your pick-up location?"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="search-item">
          <Image
            src="/img/svg/Calendar.svg"
            alt="Calendar"
            width={24}
            height={24}
            className="search-item-icon"
          />
          <p className="lg lg--regular">Pick-up Date & Time</p>
        </div>
        <div className="search-item">
          <Image
            src="/img/svg/Calendar.svg"
            alt="Calendar"
            width={24}
            height={24}
            className="search-item-icon"
          />
          <p className="lg lg--regular">Drop-off Date & Time</p>
        </div>
      </div>
      <button className="btn btn-search bs bs--bold" onClick={handleSearch}>
        Search Car
      </button>
    </>
  );
}