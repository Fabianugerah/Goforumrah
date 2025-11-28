// src/components/SearchBox/HotelSearch.tsx
'use client';

import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import DestinationDropdown from './DestinationModal';
import DatePickerDropdown from './DatePickerModal';
import GuestRoomDropdown from './GuestRoomModal';

export default function HotelSearch() {
  const [destination, setDestination] = useState('');
  const [showDestinationDropdown, setShowDestinationDropdown] = useState(false);
  const [showDateDropdown, setShowDateDropdown] = useState(false);
  const [showGuestDropdown, setShowGuestDropdown] = useState(false);

  // Date states
  const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [checkOut, setCheckOut] = useState<Date | null>(null);

  // Guest states
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);

  // Refs for click outside detection
  const destinationRef = useRef<HTMLDivElement>(null);
  const dateRef = useRef<HTMLDivElement>(null);
  const guestRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (destinationRef.current && !destinationRef.current.contains(event.target as Node)) {
        setShowDestinationDropdown(false);
      }
      if (dateRef.current && !dateRef.current.contains(event.target as Node)) {
        setShowDateDropdown(false);
      }
      if (guestRef.current && !guestRef.current.contains(event.target as Node)) {
        setShowGuestDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = () => {
    console.log('Searching hotels:', {
      destination,
      checkIn,
      checkOut,
      adults,
      children,
      rooms
    });
  };

  const formatDate = (date: Date | null) => {
    if (!date) return '';
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <>
      <div className="search-container">
        {/* Destination Input */}
        <div
          className="search-item search-item--full search-item--dropdown"
          ref={destinationRef}
        >
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
            onFocus={() => {
              setShowDestinationDropdown(true);
              setShowDateDropdown(false);
              setShowGuestDropdown(false);
            }}
          />

          {showDestinationDropdown && (
            <DestinationDropdown
              searchQuery={destination}
              onSelect={(dest) => {
                setDestination(dest);
                setShowDestinationDropdown(false);
              }}
            />
          )}
        </div>

        {/* Date Picker */}
        <div
          className="search-item search-item--dropdown"
          ref={dateRef}
        >
          <Image
            src="/img/svg/Calendar.svg"
            alt="Calendar"
            width={24}
            height={24}
            className="search-item-icon"
          />
          <p
            className="lg lg--regular"
            style={{ 
              color:  checkIn ? '#1B1B1BF5' : undefined,
              cursor: 'pointer'
            }}
            onClick={() => {
              setShowDateDropdown(!showDateDropdown);
              setShowDestinationDropdown(false);
              setShowGuestDropdown(false);
            }}
          >
            {checkIn && checkOut
              ? `${formatDate(checkIn)} - ${formatDate(checkOut)}`
              : 'Check in - Check out'
            }
          </p>

          {showDateDropdown && (
            <DatePickerDropdown
              checkIn={checkIn}
              checkOut={checkOut}
              onSelectCheckIn={(date) => setCheckIn(date)}
              onSelectCheckOut={(date) => setCheckOut(date)}
            />
          )}
        </div>

        {/* Guest & Room Selector */}
        <div
          className="search-item-wrapper search-item--dropdown"
          ref={guestRef}
        >
          <div
            className="search-item-wrapper search-item-wrapper-container"
            onClick={() => {
              setShowGuestDropdown(!showGuestDropdown);
              setShowDestinationDropdown(false);
              setShowDateDropdown(false);
            }}
          >
            <div className="search-item--small">
              <Image
                src="/img/svg/Users.svg"
                alt="Users"
                width={24}
                height={24}
                className="search-item-icon"
              />
              <p className="lg lg--regular"
                style={{ 
                color:  adults > 1 ? '#1B1B1BF5' : undefined,
                cursor: 'pointer'
                }}
              >{adults} adult{adults > 1 ? 's' : ''}</p>
            </div>
            <div className="dot"></div>
            <div className="search-item--small">
              <p className="lg lg--regular"
              style={{ 
                color:  children > 0 ? '#1B1B1BF5' : undefined,
                cursor: 'pointer'
              }}
              >{children} children</p>
            </div>
            <div className="dot"></div>
            <div className="search-item--small">
              <p className="lg lg--regular"
              style={{ 
                color:  rooms > 1 ? '#1B1B1BF5' : undefined,
                cursor: 'pointer'
              }}
              >{rooms} room{rooms > 1 ? 's' : ''}</p>
            </div>
          </div>

          {showGuestDropdown && (
            <GuestRoomDropdown
              adults={adults}
              rooms={rooms}
              onUpdateAdults={setAdults}
              onUpdateChildren={setChildren}
              onUpdateRooms={setRooms}
            >
              {children}
            </GuestRoomDropdown>
          )}
        </div>
      </div>

      <button className="btn btn-search bs bs--bold" onClick={handleSearch}>
        Search Hotel
      </button>
    </>
  );
}