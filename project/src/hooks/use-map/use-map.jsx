import {useEffect, useState} from 'react';
import leaflet from 'leaflet';

function useMap(mapRef, center) {
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (mapRef.current !== null && map === null) {
      const instance = leaflet.map(mapRef.current, {
        zoomControl: false,
        marker: true,
      });

      leaflet
        .tileLayer(
          'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
          {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          },
        )
        .addTo(instance);
      setMap(instance);
    }
  }, [mapRef, map]);

  useEffect(() => {
    if (mapRef.current !== null && map && center) {
      map.setView({ lat: center.latitude, lng :center.longitude}, center.zoom );
    }
  }, [mapRef, map, center]);

  return map;
}

export default useMap;
