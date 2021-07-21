import OffersList from '../offers-list/offer-list';
import Map from '../map/map';
import React from 'react';
import PropTypes from 'prop-types';
import { Sort } from '../sort/sort';
import {offerPropTypes} from '../../prop-types';
import {getSortOffers} from '../../store/offers/selector';
import {connect} from 'react-redux';

function City({name, offers, sortBy, setSort}) {
  const title = `${offers.length} places to stay in ${name}`;

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{title}</b>
          <Sort by={sortBy} onChange={setSort}/>
          <OffersList offers={offers} />
        </section>
        <div className="cities__right-section">
          <Map className="cities__map" offers={offers}/>
        </div>
      </div>
    </div>
  );
}

City.propTypes = {
  name: PropTypes.string.isRequired,
  offers: PropTypes.arrayOf(
    offerPropTypes).isRequired,
  sortBy: PropTypes.string.isRequired,
  setSort: PropTypes.func.isRequired,
};

const mapStateToProps = (state, props) => ({
  offers: getSortOffers(state, props.sortBy),
});

export default connect(mapStateToProps, null)(City);

