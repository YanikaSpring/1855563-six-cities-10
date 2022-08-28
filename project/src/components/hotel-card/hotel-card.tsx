import { generatePath, Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import {Offer} from '../../types/offer';
import ButtonBookmark from './button-bookmark';

type CardType = 'cities' | 'favorites' | 'near';

type HotelCardProps = {
  offer: Offer;
  cardType: CardType;
  onFocusOffer?: (id: number) => void;
  onClearOfferId?: () => void;
};

const cardImageSize = {
  cities: {
    width: 260,
    height: 200,
  },
  favorites: {
    width: 150,
    height: 110,
  },
  near: {
    width: 260,
    height: 200,
  }
};

const HotelCard = ({offer, cardType, onClearOfferId, onFocusOffer}: HotelCardProps): JSX.Element => {
  const {price, rating, type, title, previewImage, id} = offer;

  const infoWrapperClass = cardType === 'favorites' ? 'favorites__card-info' : '';
  const width = cardImageSize[cardType].width;
  const height = cardImageSize[cardType].height;

  return (
    <article className={`${cardType}__card place-card`} onMouseOver={() => onFocusOffer?.(id)} onMouseOut={() => onClearOfferId?.()}>
      <div className={`${cardType}__image-wrapper place-card__image-wrapper`}>
        <Link to={generatePath(AppRoute.Offer, { id: String(offer.id)})}>
          <img className="place-card__image" src={previewImage} width={width} height={height} alt={title} />
        </Link>
      </div>
      <div className={`${infoWrapperClass} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <ButtonBookmark className='place-card__bookmark-button place-card__bookmark-button--active button' buttonType='cities' />
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

