// src/components/SearchBox/Flight/FlightLocationModal.tsx
'use client';

import Image from 'next/image';

interface FlightLocationDropdownProps {
  searchQuery: string;
  onSelect: (location: string) => void;
}

const popularDestinations = [
  { name: 'Abha, Saudi Arabia', airport: 'Abha' },
  { name: 'Madinah, Saudi Arabia', airport: 'Jeddah' },
  { name: 'Riyadh, Saudi Arabia', airport: 'Jeddah' },
  { name: 'Al Baha, Saudi Arabia', airport: 'Al Baha' },
  { name: 'Al Kharj, Saudi Arabia', airport: 'Al Kharj' },
  { name: 'Al Ula, Saudi Arabia', airport: 'Al Kharj' },
];

export default function FlightLocationDropdown({ searchQuery, onSelect }: FlightLocationDropdownProps) {
  const filteredDestinations = popularDestinations.filter(dest =>
    dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    dest.airport.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="search-dropdown">
      {!searchQuery && (
        <div className="search-dropdown-header">
          <p className="xl xl--bold">Popular Destination</p>
        </div>
      )}

      <div className={`search-dropdown-list ${searchQuery ? 'search-dropdown-list--no-header' : ''}`}>
        {filteredDestinations.length > 0 ? (
          filteredDestinations.map((dest, index) => (
            <div
              key={index}
              className="search-dropdown-item"
              onClick={() => onSelect(dest.name)}
            >
              <Image src="/img/svg/Flight.svg" alt="Flight" width={20} height={20} />
              <div className="search-dropdown-item-text">
                <p className="bs bs--medium">{dest.name}</p>
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