import React, {useEffect} from 'react';
import 'leaflet/dist/leaflet.css';
import leaflet from 'leaflet';
import useMap from '../../hooks/use-map/use-map';
import {offerPropTypes} from '../../prop-types';
import PropTypes from 'prop-types';
import {iconLeaflet} from './const';

function Map(props) {
  const mapRef = React.useRef(null);
  const offers = props.offers;
  const city = props.offers[0].city.location;
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        leaflet
          .marker({
            lat: offer.city.location.latitude,
            lng: offer.city.location.longitude,
          }, {
            icon: iconLeaflet,
          })
          .addTo(map);
      });
    }
  }, [map, offers]);

  return (
    <section className={`${props.className} map`} style={{height: '100%'}} ref={mapRef} />
  );
}
Map.propTypes = {
  offers: PropTypes.arrayOf(
    offerPropTypes).isRequired,
  className: PropTypes.string,
};
export default Map;


