// src/components/SearchBox/HotelSearch.tsx
'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function HotelSearch() {
  const [destination, setDestination] = useState('');

  const handleSearch = () => {
    console.log('Searching hotels in:', destination);
  };

  return (
    <>
      <div className="search-container">
        <div className="search-item search-item--full">
          <Image
            src="/img/svg/Buildings.svg"
            alt="Hotel"
            width={24}
            height={24}
            className="search-item-icon"
          />
          <input
            type="text"
            className="search-item-input lg lg--regular"
            placeholder="Where are you going?"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
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
          <p className="lg lg--regular">Check in - Check out</p>
        </div>
        <div className="search-item-wrapper">
          <div className="search-item--small">
            <Image
              src="/img/svg/Users.svg"
              alt="Users"
              width={24}
              height={24}
              className="search-item-icon"
            />
            <p className="lg lg--regular">1 adult</p>
          </div>
          <div className="dot"></div>
          <div className="search-item--small">
            <p className="lg lg--regular">0 children</p>
          </div>
          <div className="dot"></div>
          <div className="search-item--small">
            <p className="lg lg--regular">1 room</p>
          </div>
        </div>
      </div>
      <button className="btn btn-search bs bs--bold" onClick={handleSearch}>
        Search Hotel
      </button>
    </>
  );
}