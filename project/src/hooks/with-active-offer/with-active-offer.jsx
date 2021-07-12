import React from 'react';

const withActiveOffer = (Component) => {
  function WithActiveOffer(props) {
    const [activeOfferId, setActiveOfferId] = React.useState(0);
    const handleActiveChange = (evt) => {
      setActiveOfferId( Number.parseInt(evt.currentTarget.id, 10));
    };

    return (
      <Component
        {...props}
        isActive={activeOfferId}
        onActiveChange={handleActiveChange}
      />
    );
  }

  return WithActiveOffer;
};

export default withActiveOffer;
