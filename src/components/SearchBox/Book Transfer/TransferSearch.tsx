// src/components/SearchBox/Transfer/TransferSearch.tsx
'use client';

import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import LocationDropdown from './Location';
import DatePickerDropdown from './DatePicker';

export default function TransferSearch() {
  const [transferType, setTransferType] = useState<'same-location' | 'different-location'>('same-location');
  
  // Location states
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropoffLocation, setDropoffLocation] = useState('');
  const [showPickupDropdown, setShowPickupDropdown] = useState(false);
  const [showDropoffDropdown, setShowDropoffDropdown] = useState(false);
  
  // DatePicker states
  const [pickupDate, setPickupDate] = useState<Date | null>(null);
  const [dropoffDate, setDropoffDate] = useState<Date | null>(null);
  const [showDateDropdown, setShowDateDropdown] = useState(false);

  // Refs for click outside detection
  const pickupLocationRef = useRef<HTMLDivElement>(null);
  const dropoffLocationRef = useRef<HTMLDivElement>(null);
  const pickupDateRef = useRef<HTMLDivElement>(null);
  const dropoffDateRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (pickupLocationRef.current && !pickupLocationRef.current.contains(target)) {
        setShowPickupDropdown(false);
      }
      if (dropoffLocationRef.current && !dropoffLocationRef.current.contains(target)) {
        setShowDropoffDropdown(false);
      }

      // Date dropdown - check both refs
      const isClickInsideDate =
        (pickupDateRef.current && pickupDateRef.current.contains(target)) ||
        (dropoffDateRef.current && dropoffDateRef.current.contains(target)) ||
        (target as HTMLElement).closest('.search-dropdown--datepicker');

      if (!isClickInsideDate) {
        setShowDateDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = () => {
    console.log('Searching transfer:', {
      transferType,
      pickupLocation,
      dropoffLocation: transferType === 'different-location' ? dropoffLocation : pickupLocation,
      pickupDate,
      dropoffDate
    });
  };

  const formatDate = (date: Date | null) => {
    if (!date) return '';
    return date.toLocaleString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <>
      {/* Transfer Type Radio Buttons */}
      <div className="flight-type">
        <label className="flight-type-item">
          <input
            type="radio"
            name="transfer-type"
            value="same-location"
            checked={transferType === 'same-location'}
            onChange={(e) => setTransferType(e.target.value as 'same-location')}
          />
          <span className="flight-type-indicator"></span>
          <span className="bs bs--medium">Return to same location</span>
        </label>
        <label className="flight-type-item">
          <input
            type="radio"
            name="transfer-type"
            value="different-location"
            checked={transferType === 'different-location'}
            onChange={(e) => setTransferType(e.target.value as 'different-location')}
          />
          <span className="flight-type-indicator"></span>
          <span className="bs bs--medium">Return to different location</span>
        </label>
      </div>

      <div className="search-container">
        {/* Pickup Location */}
        <div 
          className={`search-item ${transferType === 'same-location' ? 'search-item--full' : ''} search-item--dropdown`}
          ref={pickupLocationRef}
        >
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
            placeholder={
            transferType === 'same-location'
              ? "Where your pick-up location?"
              : "Your pick-up location?"
            }
            value={pickupLocation}
            onChange={(e) => setPickupLocation(e.target.value)}
            onFocus={() => {
              setShowPickupDropdown(true);
              setShowDropoffDropdown(false);
              setShowDateDropdown(false);
            }}
          />

          {showPickupDropdown && (
            <LocationDropdown
              searchQuery={pickupLocation}
              onSelect={(location) => {
                setPickupLocation(location);
                setShowPickupDropdown(false);
              }}
            />
          )}
        </div>

        {/* Dropoff Location - Only show if different location */}
        {transferType === 'different-location' && (
          <div className="search-item search-item--full search-item--dropdown" ref={dropoffLocationRef}>
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
              placeholder="Your drop-off location?"
              value={dropoffLocation}
              onChange={(e) => setDropoffLocation(e.target.value)}
              onFocus={() => {
                setShowDropoffDropdown(true);
                setShowPickupDropdown(false);
                setShowDateDropdown(false);
              }}
            />

            {showDropoffDropdown && (
              <LocationDropdown
                searchQuery={dropoffLocation}
                onSelect={(location) => {
                  setDropoffLocation(location);
                  setShowDropoffDropdown(false);
                }}
              />
            )}
          </div>
        )}

        {/* Pickup Date & Time */}
        <div className="search-item search-item--dropdown" ref={pickupDateRef}>
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
              color: pickupDate ? '#1B1B1BF5' : undefined,
              cursor: 'pointer'
            }}
            onClick={() => {
              setShowDateDropdown(!showDateDropdown);
              setShowPickupDropdown(false);
              setShowDropoffDropdown(false);
            }}
          >
            {pickupDate ? formatDate(pickupDate) : 'Pick-up Date & Time'}
          </p>

          {/* Shared DatePicker Dropdown */}
          {showDateDropdown && (
            <DatePickerDropdown
              pickupDate={pickupDate}
              dropoffDate={dropoffDate}
              onSelectPickup={(date) => setPickupDate(date)}
              onSelectDropoff={(date) => {
                setDropoffDate(date);
                setTimeout(() => setShowDateDropdown(false), 300);
              }}
            />
          )}
        </div>

        {/* Dropoff Date & Time */}
        <div className="search-item search-item--dropdown" ref={dropoffDateRef}>
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
              color: dropoffDate ? '#1B1B1BF5' : undefined,
              cursor: 'pointer'
            }}
            onClick={() => {
              setShowDateDropdown(!showDateDropdown);
              setShowPickupDropdown(false);
              setShowDropoffDropdown(false);
            }}
          >
            {dropoffDate ? formatDate(dropoffDate) : 'Drop-off Date & Time'}
          </p>
        </div>
      </div>

      <button className="btn btn-search bs bs--bold" onClick={handleSearch}>
        Search Car
      </button>
    </>
  );
}