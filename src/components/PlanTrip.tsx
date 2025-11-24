import Image from 'next/image';

const cities = [
  { name: 'Al-Ḥawiyah', accommodations: 120, image: '/img/image_1.png' },
  { name: 'Al-Hudā', accommodations: 132, image: '/img/image_2.png' },
  { name: 'Ju\'rānah', accommodations: 145, image: '/img/image_3.png' },
  { name: 'Makkah', accommodations: 40, image: '/img/image_4.png' },
  { name: 'Mastūrah', accommodations: 26, image: '/img/image_5.png' },
  { name: 'Rābigh', accommodations: 73, image: '/img/image_6.png' },
];

export default function PlanTrip() {
  return (
    <section className="plan-trip section-padding">
      <div className="plan-trip__header">
        <h3 className="heading-3">Plan your perfect trip</h3>
        <p className="lg lg--regular">
          Search Flights, Hotels & Car Hire to our most popular destinations.
        </p>
      </div>
      <div className="plan-trip__cities">
        {cities.map((city) => (
          <div key={city.name} className="plan-trip__cities-category">
            <Image
              src={city.image}
              alt={city.name}
              width={140}
              height={140}
              className="plan-trip__cities-category-img"
            />
            <div className="plan-trip__cities-category-content">
              <p className="xl xl--bold">{city.name}</p>
              <p className="lg lg--regular">{city.accommodations} accommodations</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}