import HotelCard from '../../components/hotel-card';
import { Offer } from '../../types/offer';

type OfferListProps = {
  offers: Offer[];
  handlerFocusOffer:(id: number)=>void;
  clearOfferId:()=>void;
}

const OfferList = ({ offers, handlerFocusOffer, clearOfferId }: OfferListProps): JSX.Element => (
  <div className="cities__places-list places__list tabs__content">
    {offers.map((offer) => <HotelCard key={offer.id} offer={offer} handlerFocusOffer={handlerFocusOffer} clearOfferId={clearOfferId} />)}
  </div>
);

export default OfferList;
