import Image from 'next/image';

const destinations = [
  { id: 1, name: 'Makkah', price: 50.00, image: '/img/Popular-Destination_1.png' },
  { id: 2, name: 'Madinah', price: 56.00, image: '/img/Popular-Destination_2.png' },
  { id: 3, name: 'Jeddah', price: 72.00, image: '/img/Popular-Destination_3.png' },
  { id: 4, name: 'Riyadh', price: 68.00, image: '/img/Popular-Destination_4.png' },
];

export default function PopularDestination() {
  return (
    <section className="popular-destination section-padding">
      <div className="popular-destination__header">
        <h3 className="heading-3">Popular destinations for book transfers</h3>
        <p className="lg lg--regular">
          Know your destination like your own city.
        </p>
      </div>

      <div className="popular-destination__container">
        {destinations.map((destination) => (
          <div key={destination.id} className="popular-destination__container-category">
            <Image
              src={destination.image}
              alt={destination.name}
              width={285}
              height={285}
              className="popular-destination__container-category-img"
            />
            <div className="popular-destination__container-category-content">
              <div className="popular-destination__container-category-content-title">
                <h5 className="heading-5">{destination.name}</h5>
              </div>
              <div className="popular-destination__container-category-content-price">
                <p className="bs bs--regular">Start from</p>
                <p className="xl xl--bold">$ {destination.price.toFixed(2)}</p>
                <p className="bs bs--regular">/ day</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}