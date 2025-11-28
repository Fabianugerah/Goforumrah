// src/components/SearchBox/index.tsx
'use client';

import HotelSearch from './Hotel/HotelSearch';
import FlightSearch from './Flight/FlightSearch';
import TransferSearch from './TransferSearch';

interface SearchBoxProps {
  type: 'hotel' | 'flight' | 'transfer';
}

export default function SearchBox({ type }: SearchBoxProps) {
  return (
    <div className="search max-container padding-container">
      <div className="search-box">
        {type === 'hotel' && <HotelSearch />}
        {type === 'flight' && <FlightSearch />}
        {type === 'transfer' && <TransferSearch />}
      </div>
    </div>
  );
}