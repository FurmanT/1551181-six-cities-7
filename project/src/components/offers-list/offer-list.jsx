import React from 'react';
import OfferCard from '../offer-card/offer-card';
import PropTypes from 'prop-types';
import { offerPropTypes } from '../../prop-types';

function OfferList({offers}) {
  // eslint-disable-next-line
  const [activeOffer, setActiveOffer] = React.useState(0);
  const onMouseEnter = (evt) => {
    setActiveOffer(evt.currentTarget.id);
  };

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">312 places to stay in Amsterdam</b>
          <form className="places__sorting" action="#" method="get">
            <span className="places__sorting-caption">Sort by</span>
            <span className="places__sorting-type" tabIndex="0">
              Popular
              <svg className="places__sorting-arrow" width="7" height="4">
                <use xlinkHref="#icon-arrow-select"></use>
              </svg>
            </span>
            <ul className="places__options places__options--custom places__options--opened">
              <li className="places__option places__option--active" tabIndex="0">Popular</li>
              <li className="places__option" tabIndex="0">Price: low to high</li>
              <li className="places__option" tabIndex="0">Price: high to low</li>
              <li className="places__option" tabIndex="0">Top rated first</li>
            </ul>
          </form>
          <div className="cities__places-list places__list tabs__content">
            {
              offers.map((offer) =>
                <OfferCard key={offer.id} offer={offer} onMouseEnter={onMouseEnter}/>)
            }
          </div>
        </section>
        <div className="cities__right-section">
          <section className="cities__map map"></section>
        </div>
      </div>
    </div>
  );
}
OfferList.propTypes = {
  offers: PropTypes.arrayOf(
    offerPropTypes).isRequired,
};
export default OfferList;