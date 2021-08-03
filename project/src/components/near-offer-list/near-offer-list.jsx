import React from 'react';
import NearCard from '../near-card/near-card';
import PropTypes from 'prop-types';
import { offerPropTypes } from '../../prop-types';
import withActiveOffer from '../../hocs/with-active-offer/with-active-offer';

function NearOfferList({offers}) {
  return (
    <div className="near-places__list places__list">
      {
        offers.map((offer) =>
          <NearCard key={offer.id} offer={offer}/>)
      }
    </div>
  );
}
NearOfferList.propTypes = {
  offers: PropTypes.arrayOf(
    offerPropTypes).isRequired,
};
export default withActiveOffer(NearOfferList);
