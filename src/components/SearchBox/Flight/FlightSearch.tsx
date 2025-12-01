'use client';

import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import FlightLocationDropdown from './FlightLocation';
import FlightDatePickerDropdown from './FlightDatePicker';
import FlightPassengerDropdown from './FlightPassenger';

export default function FlightSearch() {
  const [flightType, setFlightType] = useState<'round-trip' | 'one-way'>('round-trip');
  
  // Location states
  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');
  const [showFromDropdown, setShowFromDropdown] = useState(false);
  const [showToDropdown, setShowToDropdown] = useState(false);
  
  // Date states
  const [departureDate, setDepartureDate] = useState<Date | null>(null);
  const [returnDate, setReturnDate] = useState<Date | null>(null);
  const [showDateDropdown, setShowDateDropdown] = useState(false);
  const [datePickerType, setDatePickerType] = useState<'departure' | 'return'>('departure');
  
  // Passenger states
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [babies, setBabies] = useState(0);
  const [cabinClass, setCabinClass] = useState<'economy' | 'premium-economy' | 'business' | 'first'>('economy');
  const [showPassengerDropdown, setShowPassengerDropdown] = useState(false);

  // Refs
  const fromRef = useRef<HTMLDivElement>(null);
  const toRef = useRef<HTMLDivElement>(null);
  const departureRef = useRef<HTMLDivElement>(null);
  const returnRef = useRef<HTMLDivElement>(null);
  const passengerRef = useRef<HTMLDivElement>(null);

  // Click outside handler
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      // From
      if (fromRef.current && !fromRef.current.contains(target)) {
        setShowFromDropdown(false);
      }

      // To
      if (toRef.current && !toRef.current.contains(target)) {
        setShowToDropdown(false);
      }

      // Date (check both refs)
      const isClickInsideDate =
        (departureRef.current && departureRef.current.contains(target)) ||
        (returnRef.current && returnRef.current.contains(target)) ||
        (target as HTMLElement).closest('.search-dropdown--datepicker');

      if (!isClickInsideDate) {
        setShowDateDropdown(false);
      }

      // Passengers
      if (passengerRef.current && !passengerRef.current.contains(target)) {
        setShowPassengerDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSwapLocations = () => {
    const temp = fromLocation;
    setFromLocation(toLocation);
    setToLocation(temp);
  };

  const handleSearch = () => {
    console.log('Searching flights:', {
      flightType,
      from: fromLocation,
      to: toLocation,
      departureDate,
      returnDate: flightType === 'round-trip' ? returnDate : null,
      adults,
      children,
      babies,
      cabinClass
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

  const getCabinClassLabel = (cabin: string) => {
    const labels = {
      economy: 'Economy',
      'premium-economy': 'Premium Economy',
      business: 'Business',
      first: 'First'
    };
    return labels[cabin as keyof typeof labels];
  };

  const getTotalPassengers = () => adults + children + babies;

  const getPassengerText = () => {
    const total = getTotalPassengers();
    return `${total} passenger${total > 1 ? 's' : ''}`;
  };

  return (
    <>
      {/* Flight Type Radio Buttons */}
      <div className="flight-type">
        <label className="flight-type-item">
          <input
            type="radio"
            name="flight-type"
            value="round-trip"
            checked={flightType === 'round-trip'}
            onChange={() => setFlightType('round-trip')}
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
            onChange={() => {
              setFlightType('one-way');
              setReturnDate(null);
            }}
          />
          <span className="flight-type-indicator"></span>
          <span className="bs bs--medium">One-way</span>
        </label>
      </div>

      <div className="search-container search-container--flight">
        {/* From Location */}
        <div className="search-item search-item--dropdown" ref={fromRef}>
          <Image src="/img/svg/AirplaneTakeoff.svg" alt="AirplaneTakeoff" width={24} height={24} className="search-item-icon" />
          <input
            type="text"
            className="search-item-input lg lg--regular"
            placeholder="Where from?"
            value={fromLocation}
            onChange={(e) => setFromLocation(e.target.value)}
            onFocus={() => {
              setShowFromDropdown(true);
              setShowToDropdown(false);
              setShowDateDropdown(false);
              setShowPassengerDropdown(false);
            }}
          />
          {showFromDropdown && (
            <FlightLocationDropdown
              searchQuery={fromLocation}
              onSelect={(location) => {
                setFromLocation(location);
                setShowFromDropdown(false);
              }}
            />
          )}
        </div>

        {/* Swap Button */}
        <Image
          src="/img/svg/ArrowsLeftRight.svg"
          alt="ArrowsLeftRight"
          width={32}
          height={32}
          className="arrow-leftright-icon"
          onClick={handleSwapLocations}
          style={{ cursor: 'pointer' }}
        />

        {/* To Location */}
        <div className="search-item search-item--dropdown" ref={toRef}>
          <Image src="/img/svg/AirplaneLanding.svg" alt="AirplaneLanding" width={24} height={24} className="search-item-icon" />
          <input
            type="text"
            className="search-item-input lg lg--regular"
            placeholder="Where to?"
            value={toLocation}
            onChange={(e) => setToLocation(e.target.value)}
            onFocus={() => {
              setShowToDropdown(true);
              setShowFromDropdown(false);
              setShowDateDropdown(false);
              setShowPassengerDropdown(false);
            }}
          />
          {showToDropdown && (
            <FlightLocationDropdown
              searchQuery={toLocation}
              onSelect={(location) => {
                setToLocation(location);
                setShowToDropdown(false);
              }}
            />
          )}
        </div>

        {/* Departure Date */}
        <div className="search-item search-item--dropdown" ref={departureRef}>
          <Image src="/img/svg/Calendar.svg" alt="Calendar" width={24} height={24} className="search-item-icon" />
          <p
            className="lg lg--regular"
            style={{ color: departureDate ? '#1B1B1BF5' : undefined, cursor: 'pointer' }}
            onClick={() => {
              setDatePickerType('departure');
              setShowDateDropdown(!showDateDropdown);
              setShowFromDropdown(false);
              setShowToDropdown(false);
              setShowPassengerDropdown(false);
            }}
          >
            {departureDate ? formatDate(departureDate) : 'Departure'}
          </p>

          {/* Shared DatePicker Dropdown */}
          {showDateDropdown && (
            <FlightDatePickerDropdown
              flightType={flightType}
              departureDate={departureDate}
              returnDate={returnDate}
              datePickerType={datePickerType}
              onSelectDeparture={(date) => {
                setDepartureDate(date);
                if (flightType === 'one-way') {
                  setTimeout(() => setShowDateDropdown(false), 300);
                } else {
                  setDatePickerType('return');
                }
              }}
              onSelectReturn={(date) => {
                setReturnDate(date);
                setTimeout(() => setShowDateDropdown(false), 300);
              }}
            />
          )}
        </div>

        {/* Return Date */}
        {flightType === 'round-trip' && (
          <div className="search-item search-item--dropdown" ref={returnRef}>
            <Image src="/img/svg/Calendar.svg" alt="Calendar" width={24} height={24} className="search-item-icon" />
            <p
              className="lg lg--regular"
              style={{ color: returnDate ? '#1B1B1BF5' : undefined, cursor: 'pointer' }}
              onClick={() => {
                setDatePickerType('return');
                setShowDateDropdown(!showDateDropdown);
                setShowFromDropdown(false);
                setShowToDropdown(false);
                setShowPassengerDropdown(false);
              }}
            >
              {returnDate ? formatDate(returnDate) : 'Return'}
            </p>
          </div>
        )}

        {/* Passenger & Class Selector */}
        <div className="search-item-wrapper search-item--dropdown" ref={passengerRef}>
          <div
            className="search-item-wrapper search-item-wrapper-container"
            onClick={() => {
              setShowPassengerDropdown(!showPassengerDropdown);
              setShowFromDropdown(false);
              setShowToDropdown(false);
              setShowDateDropdown(false);
            }}
            style={{ cursor: 'pointer' }}
          >
            <div className="search-item--small">
              <Image src="/img/svg/Users.svg" alt="Users" width={24} height={24} className="search-item-icon" />
              <p className="lg lg--regular" style={{ color: getTotalPassengers() > 1 ? '#1B1B1BF5' : undefined }}>
                {getPassengerText()}
              </p>
            </div>

            <div className="dot"></div>

            <div className="search-item--small">
              <p className="lg lg--regular" style={{ color: cabinClass !== 'economy' ? '#1B1B1BF5' : undefined }}>
                {getCabinClassLabel(cabinClass)}
              </p>
            </div>
          </div>

          {showPassengerDropdown && (
            <FlightPassengerDropdown
              adults={adults}
              babies={babies}
              cabinClass={cabinClass}
              onUpdateAdults={setAdults}
              onUpdateChildren={setChildren}
              onUpdateBabies={setBabies}
              onUpdateCabinClass={setCabinClass}
            >
              {children}
            </FlightPassengerDropdown>
          )}
        </div>
      </div>

      <button className="btn btn-search bs bs--bold" onClick={handleSearch}>
        Search Flight
      </button>
    </>
  );
}