// src/components/SearchBox/FlightSearch.tsx
'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function FlightSearch() {
  const [flightType, setFlightType] = useState('round-trip');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  const handleSearch = () => {
    console.log('Searching flights:', { flightType, from, to });
  };

  return (
    <>
      <div className="flight-type">
        <label className="flight-type-item">
          <input
            type="radio"
            name="flight-type"
            value="round-trip"
            checked={flightType === 'round-trip'}
            onChange={(e) => setFlightType(e.target.value)}
          />
          <span className="flight-type-indicator"></span>
          <span className="bs bs--medium">Round-trip</span>
        </label>
        <label className="flight-type-item">
          <input
            type="radio"
            name="flight-type"
            value="one-way"
            checked={flightType === 'one-way'}
            onChange={(e) => setFlightType(e.target.value)}
          />
          <span className="flight-type-indicator"></span>
          <span className="bs bs--medium">One-way</span>
        </label>
      </div>

      <div className="search-container search-container--flight">
        <div className="search-item">
          <Image
            src="/img/svg/AirplaneTakeoff.svg"
            alt="AirplaneTakeoff"
            width={24}
            height={24}
            className="search-item-icon"
          />
          <input
            type="text"
            className="search-item-input lg lg--regular"
            placeholder="Where from?"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          />
        </div>
        <Image
          src="/img/svg/ArrowsLeftRight.svg"
          alt="ArrowsLeftRight"
          width={32}
          height={32}
          className="arrow-leftright-icon"
        />
        <div className="search-item">
          <Image
            src="/img/svg/AirplaneLanding.svg"
            alt="AirplaneLanding"
            width={24}
            height={24}
            className="search-item-icon"
          />
          <input
            type="text"
            className="search-item-input lg lg--regular"
            placeholder="Where to?"
            value={to}
            onChange={(e) => setTo(e.target.value)}
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
          <p className="lg lg--regular">Departure</p>
        </div>
        <div className="search-item">
          <Image
            src="/img/svg/Calendar.svg"
            alt="Calendar"
            width={24}
            height={24}
            className="search-item-icon"
          />
          <p className="lg lg--regular">Return</p>
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
            <p className="lg lg--regular">Economy</p>
          </div>
        </div>
      </div>
      <button className="btn btn-search bs bs--bold" onClick={handleSearch}>
        Search Flight
      </button>
    </>
  );
}