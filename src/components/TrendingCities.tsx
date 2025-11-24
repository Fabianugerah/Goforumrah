import Image from 'next/image';

const cities = [
  {
    id: 1,
    name: 'Madinah',
    subtitle: 'Flights from Jakarta',
    className: 'trending-cities__category-card--1',
  },
  {
    id: 2,
    name: 'Makkah',
    subtitle: 'Flights from Jakarta',
    className: 'trending-cities__category-card--2',
  },
  {
    id: 3,
    name: 'Jeddah',
    subtitle: 'Flights from Jakarta',
    className: 'trending-cities__category-card--3',
  },
];

export default function TrendingCities() {
  return (
    <section className="trending-cities">
      <div className="trending-cities__header">
        <h3 className="heading-3">Trending cities</h3>
        <p className="lg lg--regular">
          Book flights to a destination popular with travelers from Indonesia
        </p>
      </div>

      <div className="trending-cities__category">
        {cities.map((city) => (
          <div
            key={city.id}
            className={`trending-cities__category-card ${city.className}`}
          >
            <div className="trending-cities__category-card-content">
              <h5 className="heading-5 trending-cities__category-card-content-title">
                {city.name}
              </h5>
              <div className="trending-cities__category-card-content-location">
                <Image
                  src="/img/svg/Flight.svg"
                  alt="Flight"
                  width={20}
                  height={20}
                  className="trending-cities__category-card-content-location-icon"
                />
                <p className="lg lg--regular">{city.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}