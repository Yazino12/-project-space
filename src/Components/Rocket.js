import React from 'react';
import PropTypes from 'prop-types';

const Rocket = (props) => {
  const { id, rocket_name, description, flickr_images } = props;

  return (
    <div className="rocket">
      <img src={flickr_images[0]} alt="Rocket-image"></img>
      <div className="rocket-info">
        <h2>{rocket_name}</h2>
        <p>{description}</p>
        <button type="button">Reserve Rocket</button>
      </div>
    </div>
  );
};

Rocket.propTypes = {
  id: PropTypes.number,
  rocket_name: PropTypes.string,
  description: PropTypes.string,
  flickr_images: PropTypes.arrayOf(PropTypes.string),
};

export default Rocket;
