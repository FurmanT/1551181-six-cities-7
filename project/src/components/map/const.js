import leaflet from 'leaflet';

export const optionsIconMap = {
  iconUrl: 'img/pin.svg',
  iconSize: [30, 30],
  iconAnchor: [15, 30],
};
export const optionsActiveIconMap = {
  iconUrl: 'img/pin-active.svg',
  iconSize: [30, 30],
  iconAnchor: [15, 30],
};

export const activeIconLeaflet = leaflet.icon(optionsActiveIconMap);

export const iconLeaflet = leaflet.icon(optionsIconMap);
