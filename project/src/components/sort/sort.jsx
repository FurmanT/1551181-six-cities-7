import React from 'react';
import PropTypes from 'prop-types';

export function Sort({value, options, onChange}) {
  const [open, setOpen] = React.useState(false);

  const onChangeSort = (e) => {
    onChange({name: e.target.id, label: e.target.textContent});
    setOpen(!open);
  };

  const onOpenListSort = () => {
    setOpen(!open);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex="0" onClick={onOpenListSort}>
        {value.label}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${open && 'places__options--opened'}`}>
        {
          options.map((option, index) =>
            <li key={option.name} className={`places__option ${value.name === option.name && 'places__option--active'}`} tabIndex="0" id={option.name} onClick={onChangeSort}>{option.label}</li>)
        }
      </ul>
    </form>
  );
}

Sort.propTypes = {
  value: PropTypes.shape({
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Sort;
