import React, {useEffect} from 'react';
import 'leaflet/dist/leaflet.css';
import leaflet from 'leaflet';
import useMap from '../../hooks/use-map/use-map';
import {offerPropTypes} from '../../prop-types';
import {optionsIconMap} from '../../const';
import PropTypes from 'prop-types';

function Map(props) {
  const mapRef = React.useRef(null);
  const offers = props.offers;
  const city = props.offers[0].city.location;
  // eslint-disable-next-line
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        leaflet
          .marker({
            lat: offer.city.location.latitude,
            lng: offer.city.location.longitude,
          }, {
            icon: leaflet.icon(optionsIconMap),
          })
          .addTo(map);
      });
    }
  }, [map, offers]);

  return (
    <div style={{height: '100%'}} ref={mapRef}>
    </div>
  );
}
Map.propTypes = {
  offers: PropTypes.arrayOf(
    offerPropTypes).isRequired,
};
export default Map;


