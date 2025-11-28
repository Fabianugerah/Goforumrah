// src/components/SearchBox/Flight/FlightPassengerModal.tsx
'use client';

import Image from 'next/image';

interface FlightPassengerDropdownProps {
  adults: number;
  children: number;
  babies: number;
  cabinClass: 'economy' | 'premium-economy' | 'business' | 'first';
  onUpdateAdults: (value: number) => void;
  onUpdateChildren: (value: number) => void;
  onUpdateBabies: (value: number) => void;
  onUpdateCabinClass: (value: 'economy' | 'premium-economy' | 'business' | 'first') => void;
}

export default function FlightPassengerDropdown({
  adults,
  children,
  babies,
  cabinClass,
  onUpdateAdults,
  onUpdateChildren,
  onUpdateBabies,
  onUpdateCabinClass
}: FlightPassengerDropdownProps) {
  const increment = (setter: (value: number) => void, value: number) => {
    setter(value + 1);
  };

  const decrement = (setter: (value: number) => void, value: number, min: number = 0) => {
    if (value > min) {
      setter(value - 1);
    }
  };

  const cabinClasses: Array<{
    value: 'economy' | 'premium-economy' | 'business' | 'first';
    label: string;
  }> = [
    { value: 'economy', label: 'Economy' },
    { value: 'premium-economy', label: 'Premium Economy' },
    { value: 'business', label: 'Business' },
    { value: 'first', label: 'First' },
  ];

  return (
    <div className="search-dropdown search-dropdown--guest">
      {/* Container untuk 2 kolom */}
      <div className="passenger-cabin-container">
        {/* LEFT SIDE - Passenger Section */}
        <div className="passenger-section">
          <div className="search-dropdown-header">
            <p className="xl xl--bold">Passenger</p>
          </div>

          <div className="guest-counter-list">
            {/* Adults */}
            <div className="guest-counter-item">
              <div className="guest-counter-info">
                <p className="lg lg--medium">Adult</p>
                <p className="sm sm--regular" style={{ color: '#9e9e9e' }}>Age 12+</p>
              </div>
              <div className="guest-counter-controls">
                <button
                  className={`counter-btn ${adults <= 1 ? 'counter-btn--disabled' : ''}`}
                  onClick={() => decrement(onUpdateAdults, adults, 1)}
                  disabled={adults <= 1}
                  type="button"
                >
                  <Image src="/img/svg/Minus.svg" alt="Minus" width={20} height={20} />
                </button>
                <span className="counter-value lg lg--medium">{adults}</span>
                <button
                  className="counter-btn"
                  onClick={() => increment(onUpdateAdults, adults)}
                  type="button"
                >
                  <Image src="/img/svg/Plus.svg" alt="Plus" width={20} height={20} />
                </button>
              </div>
            </div>

            {/* Children */}
            <div className="guest-counter-item">
              <div className="guest-counter-info">
                <p className="lg lg--medium">Children</p>
                <p className="sm sm--regular" style={{ color: '#9e9e9e' }}>Age 2-17</p>
              </div>
              <div className="guest-counter-controls">
                <button
                  className={`counter-btn ${children <= 0 ? 'counter-btn--disabled' : ''}`}
                  onClick={() => decrement(onUpdateChildren, children, 0)}
                  disabled={children <= 0}
                  type="button"
                >
                  <Image src="/img/svg/Minus.svg" alt="Minus" width={20} height={20} />
                </button>
                <span className="counter-value lg lg--medium">{children}</span>
                <button
                  className="counter-btn"
                  onClick={() => increment(onUpdateChildren, children)}
                  type="button"
                >
                  <Image src="/img/svg/Plus.svg" alt="Plus" width={20} height={20} />
                </button>
              </div>
            </div>

            {/* Babies */}
            <div className="guest-counter-item">
              <div className="guest-counter-info">
                <p className="lg lg--medium">Baby</p>
                <p className="sm sm--regular" style={{ color: '#9e9e9e' }}>Under 2 yo</p>
              </div>
              <div className="guest-counter-controls">
                <button
                  className={`counter-btn ${babies <= 0 ? 'counter-btn--disabled' : ''}`}
                  onClick={() => decrement(onUpdateBabies, babies, 0)}
                  disabled={babies <= 0}
                  type="button"
                >
                  <Image src="/img/svg/Minus.svg" alt="Minus" width={20} height={20} />
                </button>
                <span className="counter-value lg lg--medium">{babies}</span>
                <button
                  className="counter-btn"
                  onClick={() => increment(onUpdateBabies, babies)}
                  type="button"
                >
                  <Image src="/img/svg/Plus.svg" alt="Plus" width={20} height={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - Cabin Class Section */}
        <div className="cabin-section">
          <div className="search-dropdown-header">
            <p className="xl xl--bold">Cabin Class</p>
          </div>

          <div className="cabin-class-list">
            {cabinClasses.map((cabin) => (
              <div
                key={cabin.value}
                className={`cabin-class-item ${cabinClass === cabin.value ? 'cabin-class-item--active' : ''}`}
                onClick={() => onUpdateCabinClass(cabin.value)}
              >
                <p className="lg lg--medium">{cabin.label}</p>
                {cabinClass === cabin.value && (
                  <Image src="/img/svg/Check.svg" alt="Selected" width={20} height={20} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}