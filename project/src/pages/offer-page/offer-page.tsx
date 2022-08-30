import { useParams } from 'react-router-dom';
import Header from '../../components/header/header';
import ButtonBookmark from '../../components/hotel-card/button-bookmark';
import Map from '../../components/map/map';
import OfferList from '../../components/offers-list/offers-list';
import PropertyGallery from '../../components/property/property-gallery';
import PropertyInsideList from '../../components/property/property-inside-list';
import ReviewForm from '../../components/review/review-form';
import { CITY, OFFER_NEAR_AMOUNT } from '../../const';
import { reviews } from '../../mocks/reviews';
import { Offer } from '../../types/offer';
import NotFound from '../not-found-page/not-found-page';

type OfferPageProps = {
  offers: Offer[];
}

const OfferPage = ({offers}: OfferPageProps): JSX.Element => {
  const {id} = useParams();
  const offer = offers.find((e) => e.id === Number(id));

  if (offer === undefined) {
    return <NotFound />;
  }
  offers = offers.filter((e) => e.id !== offer.id).slice(0, OFFER_NEAR_AMOUNT);

  return (
    <div className="page">
      <Header isFull />
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <PropertyGallery offer={offer} />
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              <div className="property__mark">
                <span>Premium</span>
              </div>
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {offer.title}
                </h1>
                <ButtonBookmark className='property__bookmark-button' buttonType='offer'/>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: '80%'}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">4.8</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {offer.type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {`${offer.bedrooms} Bedrooms`}
                </li>
                <li className="property__feature property__feature--adults">
                  {`Max ${offer.maxAdults} adults`}
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{offer.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <PropertyInsideList offer={offer} />
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={offer.host.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {offer.host.name}
                  </span>
                  <span className="property__user-status">
                    Pro
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {offer.description}
                  </p>
                </div>
              </div>
              <ReviewForm reviews={reviews}/>
            </div>
          </div>
          <Map city={CITY} offers={offers} offerProperty={offer} className="property__map"/>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <OfferList offers={offers} />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default OfferPage;
