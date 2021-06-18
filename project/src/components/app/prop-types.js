import PropTypes from 'prop-types';

export const hotelPropTypes = PropTypes.shape({
  id: PropTypes.string.isRequired,
  isPremium: PropTypes.bool,
  previewImage: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
});
