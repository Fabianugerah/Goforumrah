// src/components/SearchBox/Flight/FlightLocationModal.tsx
'use client';

import Image from 'next/image';

interface FlightLocationDropdownProps {
  searchQuery: string;
  onSelect: (location: string) => void;
}

const popularDestinations = [
  { name: 'Jeddah, Saudi Arabia', code: 'JED', airport: 'King Abdulaziz International Airport' },
  { name: 'Madinah, Saudi Arabia', code: 'MED', airport: 'Prince Mohammad Bin Abdulaziz Airport' },
  { name: 'Riyadh, Saudi Arabia', code: 'RUH', airport: 'King Khalid International Airport' },
  { name: 'Makkah, Saudi Arabia', code: 'MKA', airport: 'Near King Abdulaziz International Airport' },
  { name: 'Jakarta, Indonesia', code: 'CGK', airport: 'Soekarno-Hatta International Airport' },
  { name: 'Surabaya, Indonesia', code: 'SUB', airport: 'Juanda International Airport' },
];

export default function FlightLocationDropdown({ searchQuery, onSelect }: FlightLocationDropdownProps) {
  const filteredDestinations = popularDestinations.filter(dest =>
    dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    dest.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
    dest.airport.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="search-dropdown">
      <div className="search-dropdown-header">
        <p className="xl xl--bold">Popular Destination</p>
      </div>

      <div className="search-dropdown-list">
        {filteredDestinations.length > 0 ? (
          filteredDestinations.map((dest, index) => (
            <div
              key={index}
              className="search-dropdown-item"
              onClick={() => onSelect(dest.name)}
            >
              <Image src="/img/svg/Flight.svg" alt="Flight" width={20} height={20} />
              <div className="search-dropdown-item-text">
                <p className="bs bs--medium">{dest.name} ({dest.code})</p>
                <p className="sm sm--regular">{dest.airport}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="search-dropdown-empty">
            <p className="lg lg--regular">No destinations found</p>
          </div>
        )}
      </div>
    </div>
  );
}