import FavoriteCard from '../../components/favorite-card/favorite-card';
import Header from '../../components/header/header';
import { Offer } from '../../types/offer';

type FavoritePageProps = {
  offers: Offer[];
}

type ReduceReturnType = {
  [cityName: string]: Offer[];
};

const FavoritesPage = (props: FavoritePageProps): JSX.Element => {

  const {offers} = props;

  const favorites = offers.reduce<ReduceReturnType>((acc, cur) => {
    acc[cur.city.name] = acc[cur.city.name] ? [...(acc[cur.city.name]), cur] : [cur];
    return acc;
  }, {});

  return (
    <div className="page">
      <Header isFull />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>

            <ul className="favorites__list">
              {Object.keys(favorites).map((cityName: string) => (
                <li className="favorites__locations-items" key={cityName} >
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <a className="locations__item-link" href="/#">
                        <span>{cityName}</span>
                      </a>
                    </div>
                  </div>
                  <div className="favorites__places">
                    {favorites[cityName].map((offer: Offer) => <FavoriteCard key={offer.id} offer={offer}/>)}
                  </div>
                </li>
              )
              )}
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );
};

export default FavoritesPage;
