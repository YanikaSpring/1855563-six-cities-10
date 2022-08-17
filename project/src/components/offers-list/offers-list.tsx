import HotelCard from '../hotel-card/hotel-card';
import { Offer } from '../../types/offer';

type OfferListProps = {
  offers: Offer[];
  onFocusOffer: (id: number) => void;
  onClearOfferId: () => void;
}

const OfferList = ({ offers, onFocusOffer, onClearOfferId }: OfferListProps): JSX.Element => (
  <div className="cities__places-list places__list tabs__content">
    {offers.map((offer) => <HotelCard key={offer.id} offer={offer} onFocusOffer={onFocusOffer} onClearOfferId={onClearOfferId} />)}
  </div>
);

export default OfferList;
