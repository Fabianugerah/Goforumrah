import Image from 'next/image';

const carBrands = [
  'Car-hire-brand-04',
  'Car-hire-brand-03',
  'Car-hire-brand-02',
  'Car-hire-brand-01',
];

export default function CarBrand() {
  return (
    <section className="car-brand section-padding">
      <div className="car-brand__header">
        <h3 className="heading-3">Popular car hire brands</h3>
        <p className="lg lg--regular">
          With various partner airlines, we are ready to fly you anywhere.
        </p>
      </div>

      <div className="car-brand__category">
        {carBrands.map((brand) => (
          <div key={brand} className="car-brand__category-item">
            <Image
              src={`/img/svg/${brand}.svg`}
              alt={brand}
              width={120}
              height={60}
              className="car-brand__category-img"
            />
          </div>
        ))}
      </div>
    </section>
  );
}