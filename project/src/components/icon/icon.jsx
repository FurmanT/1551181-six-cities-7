import React from 'react';
import PropTypes from 'prop-types';

function Icon({name, width = '20', height= '20', color =''}) {

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={width}
      height={height}
      color={color}
    >
      <use xlinkHref={`#icon-${name}`} />
    </svg>
  );
}
Icon.propTypes = {
  name: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Icon;
