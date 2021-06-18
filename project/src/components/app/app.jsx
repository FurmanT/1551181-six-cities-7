import React from 'react';
import Main from './main/main';
import PropTypes from 'prop-types';
import { hotelPropTypes } from './prop-types';

function App(props) {
  const { hotels } = props;

  return <Main hotels={hotels}/>;
}

App.propTypes = {
  hotels: PropTypes.arrayOf(
    hotelPropTypes).isRequired,
};
export default App;
