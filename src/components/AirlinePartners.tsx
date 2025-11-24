import Image from 'next/image';

const airlines = [
  'Emirates',
  'Island Airlines',
  'Etihad',
  'Qatar Airways',
  'Fly DUbai',
  'Garuda Indonesia',
  'Malaysia Airlines',
  'Singapore Airlines',
];

export default function AirlinePartners() {
  return (
    <section className="airline-partners section-padding">
      <div className="airline-partners__header">
        <h3 className="heading-3">Our airline partners</h3>
        <p className="lg lg--regular">
          With various partner airlines, we are ready to fly you anywhere.
        </p>
      </div>

      <div className="airline-partners__category">
        {airlines.map((airline) => (
          <div key={airline} className="airline-partners__category-item">
            <Image
              src={`/img/svg/Airline_Partner - ${airline}.svg`}
              alt={airline}
              width={120}
              height={60}
              className="airline-partners__category-img"
            />
          </div>
        ))}
      </div>
    </section>
  );
}