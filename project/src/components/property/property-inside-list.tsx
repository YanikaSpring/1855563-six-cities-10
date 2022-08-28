import { Offer } from '../../types/offer';


type PropertyInsideListProps = {
  offer: Offer;
};

const PropertyInsideList = ({offer}: PropertyInsideListProps): JSX.Element => (
  <ul className="property__inside-list">
    {offer.goods.map((good) => (
      <li key={good} className="property__inside-item">
        {good}
      </li>
    ))};
  </ul>
);

export default PropertyInsideList;
