import React from 'react';
import PropTypes from 'prop-types';
import { offerPropTypes } from '../../prop-types';
import OfferCard from '../offer-card/offer-card';
import withActiveOffer from '../../hooks/with-active-offer/with-active-offer';

function OfferList({offers, isActive, onActiveChange}) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offers.map((offer) =>
          <OfferCard key={offer.id} offer={offer} onMouseEnter={onActiveChange}/>)
      }
    </div>
  );
}
OfferList.propTypes = {
  offers: PropTypes.arrayOf(
    offerPropTypes).isRequired,
  isActive: PropTypes.number.isRequired,
  onActiveChange: PropTypes.func.isRequired,
};
export default withActiveOffer(OfferList);
