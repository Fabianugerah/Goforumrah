'use client';

import Image from 'next/image';
import { useState } from 'react';

// Type untuk hotel
interface Hotel {
  id: number;
  name: string;
  location: string;
  price: number;
  image: string;
}

// Type untuk region
type RegionName = 'Al-Ḥawiyah' | 'Al-Hudā' | 'Ju\'rānah' | 'Makkah' | 'Mastūrah';

// Data hotels berdasarkan region
const hotelsByRegion: Record<RegionName, Hotel[]> = {
  'Al-Ḥawiyah': [
    {
      id: 1,
      name: 'Fiori Airport Hotel',
      location: 'Airport Rd, Al Faisaliyyah, Taif 26525, Arab Saudi',
      price: 280.00,
      image: '/img/Al-Hawiyah--1.png',
    },
    {
      id: 2,
      name: 'Al Qasr Hotel Taif',
      location: 'Al Rayyan, Taif, Provinsi Makkah, Arab Saudi',
      price: 320.00,
      image: '/img/Al-Hawiyah--2.png',
    },
    {
      id: 3,
      name: 'Warwick Al Taif Hotel',
      location: 'Airport Rd, Alqayam Al Aala, Taif 26561, Arab Saudi',
      price: 295.00,
      image: '/img/Al-Hawiyah--3.png',
    },
    {
      id: 4,
      name: 'InterContinental Taif by IHG',
      location: 'Airport Rd, Alqayam Al Asfal, Taif 21944, Arab Saudi',
      price: 340.00,
      image: '/img/Al-Hawiyah--4.png',
    },
  ],
  'Al-Hudā': [
    {
      id: 5,
      name: 'Al Hidayah Towers & Hotel',
      location: 'Al Hedaya، 3995, Makkah 24242, Arab Saudi',
      price: 360.00,
      image: '/img/Al-Huda--1.png',
    },
    {
      id: 6,
      name: 'Jiwar Al Bait Makkah',
      location: 'Al Aziziyah, 24225 Mekkah, Arab Saudi',
      price: 385.00,
      image: '/img/Al-Huda--2.png',
    },
    {
      id: 7,
      name: 'Hotel Mohammed Abdullah Al-Ghammas',
      location: 'Al Ghammas, Near Prophet Mosque, Makkah, Arab Saudi',
      price: 420.00,
      image: '/img/Al-Huda--3.png',
    },
    {
      id: 8,
      name: 'Al Massa Bader Hotel',
      location: 'Al Misfalah, Misfalah, Makkah 11211, Arab Saudi',
      price: 395.00,
      image: '/img/Al-Huda--4.png',
    },
  ],
  'Ju\'rānah': [
    {
      id: 9,
      name: 'Kenana Al Aziziah Hotel by Orvana',
      location: 'Northern Aziziah, near Al Romansiah restaurant, 24247 Mekkah, Arab Saudi',
      price: 245.00,
      image: '/img/Ju\'ranah--1.png',
    },
    {
      id: 10,
      name: 'Wirgan Hotel Al Azizyah',
      location: 'Masjid Al Haram Rd - Al Ju\'ranah Dist. Unit No 2222, 24242 Mecca, 24242 Mekkah, Arab Saudi',
      price: 265.00,
      image: '/img/Ju\'ranah--2.png',
    },
    {
      id: 11,
      name: 'Saif Plus 2 Hotel by Orvana',
      location: 'Al Rahma street, Mahbas Al Jinn, Al Aziziyah, 21955 Mekkah, Arab Saudi',
      price: 290.00,
      image: '/img/Ju\'ranah--3.png',
    },
    {
      id: 12,
      name: 'Wassad Hotel Makkah',
      location: 'Al Aziziah Main Road, Mekkah, Arab Saudi',
      price: 275.00,
      image: '/img/Ju\'ranah--4.png',
    },
  ],
  'Makkah': [
    {
      id: 13,
      name: 'Anjum Makkah Hotel',
      location: 'Umm Al Qura Street, Jabal Al Kaaba District, Mekkah, Arab Saudi',
      price: 450.00,
      image: '/img/Makkah--1.png',
    },
    {
      id: 14,
      name: 'Raffles Makkah Palace',
      location: 'King Abdul Aziz Endowment, Abraj Al Bait, Near King Abdul Aziz Gate, 21955 Mekkah, Arab Saudi',
      price: 550.00,
      image: '/img/Makkah--2.png',
    },
    {
      id: 15,
      name: 'Hilton Suites Jabal Omar Makkah',
      location: 'Ibrahim Al Khalil Street , 21955 Mekkah, Arab Saudi',
      price: 520.00,
      image: '/img/Makkah--3.png',
    },
    {
      id: 16,
      name: 'Le Meridien Towers Makkah',
      location: 'P.O.Box 9991 Kudai Road, 99999* Mekkah, Arab Saudi',
      price: 480.00,
      image: '/img/Makkah--4.png',
    },
  ],
  'Mastūrah': [
    {
      id: 17,
      name: 'Zaman Homeland Hotel',
      location: 'Ta\'if, Mastūrah 28910 Arab Saudi',
      price: 310.00,
      image: '/img/Masturah--1.png',
    },
    {
      id: 18,
      name: 'Remaj Hotel',
      location: 'Wadi Waj Road, 21944 Ta\'if, Mastūrah Arab Saudi',
      price: 335.00,
      image: '/img/Masturah--2.png',
    },
    {
      id: 19,
      name: 'Lavender Serviced Apartments',
      location: 'Bin Al Khateeb street, 26523 Mastūrah, Arab Saudi',
      price: 365.00,
      image: '/img/Masturah--3.png',
    },
    {
      id: 20,
      name: 'Platinum Al Khamseen Serviced Apartments',
      location: '50th Street, AL Biea District, 21944 Ta\'if, Arab Saudi',
      price: 345.00,
      image: '/img/Masturah--4.png',
    },
  ],
};

const tabs: RegionName[] = ['Al-Ḥawiyah', 'Al-Hudā', 'Ju\'rānah', 'Makkah', 'Mastūrah'];

export default function FeaturedHotels() {
  const [activeTab, setActiveTab] = useState<RegionName>(tabs[0]);

  // Get hotels for active tab
  const currentHotels = hotelsByRegion[activeTab] || [];

  return (
    <section className="featured-hotels section-padding">
      <div className="featured-hotels__header">
        <h3 className="heading-3">Featured hotels recommended for you</h3>
        <div className="featured-hotels__header-tabs">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`featured-hotels__header-tabs-menu bs ${
                activeTab === tab
                  ? 'bs--bold featured-hotels__header-tabs-menu--active'
                  : 'bs--regular'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="featured-hotels__container">
        {currentHotels.map((hotel) => (
          <div key={hotel.id} className="featured-hotels__container-category">
            <Image
              src={hotel.image}
              alt={hotel.name}
              width={285}
              height={285}
              className="featured-hotels__container-category-img"
            />
            <div className="featured-hotels__container-category-content">
              <div className="featured-hotels__container-category-content-title">
                <h5 className="heading-5">{hotel.name}</h5>
                <div className="featured-hotels__container-category-content-location">
                  <Image
                    src="/img/svg/MapPin.svg"
                    alt="MapPin"
                    width={20}
                    height={20}
                  />
                  <p className="lg lg--regular">{hotel.location}</p>
                </div>
              </div>
              <div className="featured-hotels__container-category-content-price">
                <p className="xl xl--bold">$ {hotel.price.toFixed(2)}</p>
                <p className="bs bs--regular">/ night</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}