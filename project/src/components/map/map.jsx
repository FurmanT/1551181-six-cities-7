import React, {useEffect} from 'react';
import 'leaflet/dist/leaflet.css';
import leaflet from 'leaflet';
import useMap from '../use-map/use-map';
import {offerPropTypes} from '../../prop-types';
import PropTypes from 'prop-types';

function Map(props) {
  const mapRef = React.useRef(null);
  const offers = props.offers;
  const city = props.offers[0].city.location;
  // eslint-disable-next-line
  const map = useMap(mapRef, city);

  const divStyle = {
    height: '100%',
  };

  const icon = leaflet.icon({
    iconUrl: 'img/pin.svg',
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  });

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        leaflet
          .marker({
            lat: offer.city.location.latitude,
            lng: offer.city.location.longitude,
          }, {
            icon: icon,
          })
          .addTo(map);
      });
    }
  }, [map, offers, icon]);

  return (
    <section style={divStyle} ref={mapRef} className="cities__map map">
    </section>
  );
}
Map.propTypes = {
  offers: PropTypes.arrayOf(
    offerPropTypes).isRequired,
};
export default Map;


