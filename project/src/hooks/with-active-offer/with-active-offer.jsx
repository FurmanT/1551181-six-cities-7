import React from 'react';
import {ActionCreator} from '../../store/action';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const withActiveOffer = (Component) => {
  function WithActiveOffer(props) {

    const { onSetActiveOffer } = props;

    const handleActiveChange = (evt) => {
      onSetActiveOffer(Number.parseInt(evt.currentTarget.id, 10));
    };

    return (
      <Component
        {...props}
        isActive={4}
        onActiveChange={handleActiveChange}
      />
    );
  }


  const mapDispatchToProps = (dispatch) => ({
    onSetActiveOffer(id) {
      dispatch(ActionCreator.setActiveOffer(id));
    },
  });

  WithActiveOffer.propTypes = {
    onSetActiveOffer: PropTypes.func.isRequired,
  };

  return connect(null, mapDispatchToProps)(WithActiveOffer);
};

export default withActiveOffer;

