import { useEffect, useRef } from 'react';
import useMap from '../../hooks/useMap';
import { City } from '../../types/map';
import 'leaflet/dist/leaflet.css';
import { Offer } from '../../types/offer';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../const';
import { Icon, Marker } from 'leaflet';

type MapProps = {
  city: City;
  offers: Offer[];
  activeOfferId: number;
}

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const Map = ({city, offers, activeOfferId}: MapProps): JSX.Element => {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });

        marker
          .setIcon(
            activeOfferId === offer.id ? currentCustomIcon : defaultCustomIcon
          )
          .addTo(map);
      });
    }
  }, [map, offers, activeOfferId]);

  return (
    <section className="cities__map map" ref={mapRef}></section>
  );
};

export default Map;
