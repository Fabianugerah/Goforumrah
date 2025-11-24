import Tabs from '@/components/Tabs';
import SearchBox from '@/components/SearchBox';
import Banner from '@/components/Banner';
import PlanTrip from '@/components/PlanTrip';
import FeaturedHotels from '@/components/FeaturedHotels';
import InspirationTrip from '@/components/InspirationTrip';

export default function Home() {
  return (
    <>
      <header className="header header--hotel">
        <Tabs />
        <div className="header__title padding-container">
          <h1 className="heading-1">Find your next stay</h1>
          <p className="xl xl--medium">
            Search low prices on hotels, homes and much more...
          </p>
        </div>
        <SearchBox type="hotel" />
      </header>

      <main className="main max-container padding-container">
        <Banner 
          icon="/img/svg/FaceMask.svg"
          title="Keep calm with health protocol"
          description="Get the advice you need. Check the latest COVID-19 restrictions before you travel."
        />
        <PlanTrip />
        <FeaturedHotels />
        <InspirationTrip />
      </main>
    </>
  );
}