import React, {useEffect} from 'react';
import 'leaflet/dist/leaflet.css';
import leaflet from 'leaflet';
import useMap from '../../hooks/use-map/use-map';
import {offerPropTypes} from '../../prop-types';
import PropTypes from 'prop-types';
import {iconLeaflet, activeIconLeaflet} from './const';
import {connect} from 'react-redux';

function Map(props) {
  const mapRef = React.useRef(null);
  const offers = props.offers;
  const city = props.offers[0].city.location;
  const map = useMap(mapRef, city);
  const group = leaflet.layerGroup();
  const activeOffer = props.activeOffer;

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        leaflet.marker([offer.city.location.latitude, offer.city.location.longitude],
          { icon: iconLeaflet})
          .addTo(group);
      });
      group.addTo(map);
    }
    return () => {
      if (map) {
        map.removeLayer(group);
      }
    };
  }, [map, offers, group]);

  useEffect(() => {
    if (activeOffer) {
      group.eachLayer((layer) => {
        const data = layer.getLatLng();
        if (data.lat === activeOffer.city.location.latitude && data.lng === activeOffer.city.location.longitude) {
          layer.setIcon(activeIconLeaflet);
        }
      });
    }
  });

  return (
    <section className={`${props.className} map`} style={{height: '100%'}} ref={mapRef} />
  );
}
Map.propTypes = {
  offers: PropTypes.arrayOf(
    offerPropTypes).isRequired,
  className: PropTypes.string,
  activeOffer: offerPropTypes,
};

const mapStateToProps = (state) => ({
  activeOffer: state.activeOffer,
});

export default connect(mapStateToProps, null)(Map);

