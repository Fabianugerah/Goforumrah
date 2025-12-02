// src/components/SearchBox/Transfer/Location/LocationDropdown.tsx
'use client';

import Image from 'next/image';

interface LocationDropdownProps {
  searchQuery: string;
  onSelect: (location: string) => void;
}

const popularDestinations = [
  { name: 'Clarion Hotel Jeddah Airport', area: 'Jeddah, Makkah, Saudi Arabia' },
  { name: 'Movenpick Hotel Jeddah', area: 'Jeddah, Makkah, Saudi Arabia' },
  { name: 'Mena Airport Hotel Jeddah', area: 'Jeddah, Makkah, Saudi Arabia' },
  { name: 'Karam Jeddah Hotel', area: 'Jeddah, Makkah, Saudi Arabia' },
];

export default function LocationDropdown({ searchQuery, onSelect }: LocationDropdownProps) {
  const filteredDestinations = popularDestinations.filter(dest =>
    dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    dest.area.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="search-dropdown">
      {!searchQuery && (
        <div className="search-dropdown-header">
          <p className="xl xl--bold">Popular Destination</p>
        </div>
      )}

      <div className="search-dropdown-list">
        {filteredDestinations.length > 0 ? (
          filteredDestinations.map((dest, index) => (
            <div
              key={index}
              className="search-dropdown-item"
              onClick={() => onSelect(dest.name)}
            >
              <Image src="/img/svg/MapPin_subtle.svg" alt="Location" width={20} height={20} />
              <div className="search-dropdown-item-text">
                <p className="bs bs--medium">{dest.name}</p>
                <p className="sm sm--regular">{dest.area}</p>
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