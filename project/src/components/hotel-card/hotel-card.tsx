import { generatePath, Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import {Offer} from '../../types/offer';

type HotelCardProps = {
  offer: Offer;
  onFocusOffer: (id: number) => void;
  onClearOfferId: () => void;
};

const HotelCard = (props: HotelCardProps): JSX.Element => {
  const {offer, onClearOfferId, onFocusOffer} = props;
  const {price, rating, type, title, previewImage, id} = offer;

  return (
    <article className="cities__card place-card" onMouseOver={() => onFocusOffer(id)} onMouseOut={() => onClearOfferId()}>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={generatePath(AppRoute.Offer, { id: String(id)})}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt={title} />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: '80%'}}>{rating}</span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="/#">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

export default HotelCard;
