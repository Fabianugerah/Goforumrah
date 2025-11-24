'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Tabs() {
  const pathname = usePathname();

  const tabs = [
    { name: 'Hotel', icon: '/img/svg/Buildings_tabs.svg', href: '/' },
    { name: 'Flights', icon: '/img/svg/Flight.svg', href: '/flight' },
    { name: 'Book Transfer', icon: '/img/svg/Car.svg', href: '/book-transfer' },
    { name: 'Tour Package', icon: '/img/svg/SunHorizon.svg', href: '#' },
  ];

  return (
    <div className="tabs">
      {tabs.map((tab) => (
        <Link
          key={tab.name}
          href={tab.href}
          className={`tabs-item ${pathname === tab.href ? 'tabs-item--active' : ''}`}
        >
          <Image 
            src={tab.icon} 
            alt={tab.name} 
            width={24} 
            height={24} 
            className="tabs-item-icon" 
          />
          <p className="bs bs--bold tabs-item-text">{tab.name}</p>
        </Link>
      ))}
    </div>
  );
}