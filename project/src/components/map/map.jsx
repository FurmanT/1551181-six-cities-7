import React, { useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import leaflet from 'leaflet';
import useMap from '../../hooks/use-map/use-map';
import { offerPropTypes } from '../../prop-types';
import PropTypes from 'prop-types';
import { iconLeaflet, activeIconLeaflet } from './const';
import { connect } from 'react-redux';
import { getActiveOffer } from '../../store/offers-process/selector';

function Map({offers, activeOffer, showActiveMarker = false, className}) {
  const mapRef = React.useRef(null);
  const center = offers[0].city.location;
  const map = useMap(mapRef, center);
  const group = leaflet.layerGroup();

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        leaflet.marker([offer.location.latitude, offer.location.longitude],
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
    if (!showActiveMarker) { return; }
    if (activeOffer) {
      group.eachLayer((layer) => {
        const data = layer.getLatLng();
        if (data.lat === activeOffer.location.latitude && data.lng === activeOffer.location.longitude) {
          layer.setIcon(activeIconLeaflet);
        }
      });
    } else {
      group.eachLayer((layer) => {
        layer.setIcon(iconLeaflet);
      });
    }
  });

  return (
    <section className={`${className} map`}  ref={mapRef} />
  );
}
Map.propTypes = {
  offers: PropTypes.arrayOf(
    offerPropTypes).isRequired,
  className: PropTypes.string.isRequired,
  activeOffer: offerPropTypes,
  showActiveMarker: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  activeOffer: getActiveOffer(state),
});

export default connect(mapStateToProps, null)(Map);

