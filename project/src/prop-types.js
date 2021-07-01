import PropTypes from 'prop-types';

export const offerPropTypes = PropTypes.shape({
  id: PropTypes.string.isRequired,
  isPremium: PropTypes.bool,
  previewImage: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  city: PropTypes.shape({
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired,
    }),
    name: PropTypes.string.isRequired,
  }),
  images: PropTypes.arrayOf(PropTypes.string),
  goods: PropTypes.arrayOf(PropTypes.string),
});
