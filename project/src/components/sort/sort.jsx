import React from 'react';
import PropTypes from 'prop-types';

export function Sort({by, onChange }) {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState('Popular');

  const onChangeSort = (e) => {
    onChange(e.target.id);
    //eslint-disable-next-line
    setName(e.target.textContent);
    setOpen(!open);
  };

  const onOpenListSort = () => {
    setOpen(!open);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex="0" onClick={onOpenListSort}>
        {name}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${open && 'places__options--opened'}`}>
        <li className= {`places__option ${by === 'popular' && 'places__option--active'}`} tabIndex="0" id="popular" onClick={onChangeSort}>Popular</li>
        <li className= {`places__option ${by === 'priceToHigh' && 'places__option--active'}`} tabIndex="0" id="priceToHigh" onClick={onChangeSort}>Price: low to high</li>
        <li className= {`places__option ${by === 'priceToLow' && 'places__option--active'}`} tabIndex="0" id="priceToLow" onClick={onChangeSort}>Price: high to low</li>
        <li className= {`places__option ${by === 'rating' && 'places__option--active'}`} tabIndex="0" id="rating" onClick={onChangeSort}>Top rated first</li>
      </ul>
    </form>
  );
}

Sort.propTypes = {
  by: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Sort;
