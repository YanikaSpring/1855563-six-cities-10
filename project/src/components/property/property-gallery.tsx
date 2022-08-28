import { Offer } from '../../types/offer';

type PropertyGalleryProps = {
  offer: Offer;
}

const PropertyGallery = ({offer}: PropertyGalleryProps): JSX.Element => (
  <div className="property__gallery">
    {offer.images.map((image) =>(
      <div className="property__image-wrapper" key={image}>
        <img className="property__image" src={image} alt="studio" />
      </div>
    ))}
  </div>
);

export default PropertyGallery;
