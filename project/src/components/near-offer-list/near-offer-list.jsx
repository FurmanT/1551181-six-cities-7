import React from 'react';
import NearCard from '../near-card/near-card';
import PropTypes from 'prop-types';
import { offerPropTypes } from '../../prop-types';
import withActiveOffer from '../../hooks/with-active-offer/with-active-offer';

function NearOfferList({offers, isActive, onActiveChange}) {
  return (
    <div className="near-places__list places__list">
      {
        offers.map((offer) =>
          <NearCard key={offer.id} offer={offer} onMouseEnter={onActiveChange}/>)
      }
    </div>
  );
}
NearOfferList.propTypes = {
  offers: PropTypes.arrayOf(
    offerPropTypes).isRequired,
  isActive: PropTypes.number.isRequired,
  onActiveChange: PropTypes.func.isRequired,
};
export default withActiveOffer(NearOfferList);
