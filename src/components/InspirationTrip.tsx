import Image from 'next/image';
import Link from 'next/link';

const articles = [
  {
    id: 1,
    title: '7 unique stays for your next Arabican holiday',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '/img/trip_1.png',
  },
  {
    id: 2,
    title: 'The 9 most beautiful cities for autumn travel',
    description: '',
    image: '/img/trip_2.png',
  },
  {
    id: 3,
    title: 'The top 10 places to celebrate Islamic New year',
    description: '',
    image: '/img/trip_3.png',
  },
];

export default function InspirationTrip() {
  return (
    <section className="inspiration-trip padding-container section-padding">
      <div className="inspiration-trip__header">
        <h3 className="heading-3">Get inspiration for your next trip</h3>
        <p className="lg lg--regular">
          Know your destination like your own city.
        </p>
      </div>
      
      <div className="inspiration-trip__article">
        {articles.map((article) => (
          <div key={article.id} className="inspiration-trip__article-card">
            <Image
              src={article.image}
              alt={article.title}
              width={285}
              height={248}
              className="inspiration-trip__article-card-img"
            />
            <div className="inspiration-trip__article-card-content">
              <div className="inspiration-trip__article-card-content-text">
                <h5 className="heading-5">{article.title}</h5>
                {article.description && (
                  <p className="lg lg--regular">{article.description}</p>
                )}
              </div>
              <Link href="#" className="btn-link bs bs--bold">
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="inspiration-trip__button">
        <Link href="#" className="btn-link lg lg--bold">
          Read all blogs
        </Link>
        <Image 
          src="/img/svg/ArrowCircleRight.svg" 
          alt="Arrow" 
          width={24} 
          height={24}
        />
      </div>
    </section>
  );
}