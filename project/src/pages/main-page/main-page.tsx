import Header from '../../components/header/header';
import { Offer } from '../../types/offer';
import OfferList from '../../components/offers-list/offers-list';
import {useState} from 'react';
import Map from '../../components/map/map';
import { CITY } from '../../const';
import LocationsList from '../../components/locations-list/locations-list';
import PlacesSorting from '../../components/locations-list/places-sorting';

type MainPageProps = {
  offers: Offer[];
}

const MainPage = ({offers}: MainPageProps): JSX.Element => {
  const [activeOfferId, setActiveOfferId] = useState(0);

  const onFocusOffer = (id: number): void => {
    setActiveOfferId(id);
  };

  const onClearOfferId = (): void => {
    setActiveOfferId(0);
  };

  return (
    <div className="page page--gray page--main">
      <Header isFull />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <LocationsList />
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length} places to stay in Amsterdam</b>
              <PlacesSorting />
              <OfferList offers={offers} onFocusOffer={onFocusOffer} onClearOfferId={onClearOfferId} />
            </section>
            <div className="cities__right-section">
              <Map city={CITY} offers={offers} activeOfferId={activeOfferId} className="cities__map"/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MainPage;
