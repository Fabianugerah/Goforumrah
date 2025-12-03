// src/components/SearchBox/DestinationDropdown.tsx
'use client';

import Image from 'next/image';

interface DestinationDropdownProps {
  searchQuery: string;
  onSelect: (destination: string) => void;
}

const popularDestinations = [
  { name: 'Makkah', area: 'Makkah, Al Mukarramah Province, Saudi Arabia' },
  { name: 'Makkah Clock Royal Tower', area: 'Makkah, Al Mukarramah Province, Saudi Arabia' },
  { name: 'Pullman ZamZam Makkah', area: 'Makkah, Al Mukarramah Province, Saudi Arabia' },
  { name: 'Swissôtel Al Maqam Makkah', area: 'Makkah, Al Mukarramah Province, Saudi Arabia' },
  { name: 'Dar Al Tawhid Intercontinental Makkah, An IHSG', area: 'Makkah, Al Mukarramah Province, Saudi Arabia' },
  
];

export default function DestinationDropdown({ searchQuery, onSelect }: DestinationDropdownProps) {
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

      <div className={`search-dropdown-list ${searchQuery ? 'search-dropdown-list--no-header' : ''}`}>
        {filteredDestinations.length > 0 ? (
          filteredDestinations.map((dest, index) => (
            <div
              key={index}
              className="search-dropdown-item"
              onClick={() => onSelect(dest.name)}
            >
              <Image src="/img/svg/Buildings_tabs.svg" alt="Location" width={20} height={20} />
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