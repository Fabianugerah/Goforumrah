import Tabs from '@/components/Tabs';
import SearchBox from '@/components/SearchBox';
import TrendingCities from '@/components/TrendingCities';
import AirlinePartners from '@/components/AirlinePartners';
import FeaturedHotels from '@/components/FeaturedHotels';
import InspirationTrip from '@/components/InspirationTrip';

export default function FlightPage() {
  return (
    <>
      <header className="header header--flight">
        <Tabs />
        <div className="header__title padding-container">
          <h1 className="heading-1">Find the best flight</h1>
          <p className="xl xl--medium">
            Search low prices on hotels, homes and much more...
          </p>
        </div>
        <SearchBox type="flight" />
      </header>

      <main className="main max-container padding-container">
        <TrendingCities />
        <AirlinePartners />
        <FeaturedHotels />
        <InspirationTrip />
      </main>
    </>
  );
}