import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { reserveRocket, cancelRocket } from '../Redux/Rockets/rockets';

const Rocket = (props) => {
  const { id, rocket_name, description, flickr_images, reserved } = props;

  const dispatch = useDispatch();

  return (
    <div className="rocket">
      <img src={flickr_images[0]} alt="Rocket-image"></img>
      <div className="rocket-info">
        <h2>{rocket_name}</h2>
        {reserved ? (
          <div>
            {' '}
            <p>
              <span className="reserved-badge">Reserved</span>
              {description}
            </p>
            <button
              type="button"
              className="reserved-button"
              onClick={() => dispatch(cancelRocket(id))}
            >
              Cancel Reservation
            </button>
          </div>
        ) : (
          <div>
            <p>{description}</p>
            <button type="button" onClick={() => dispatch(reserveRocket(id))}>
              Reserve Rocket
            </button>{' '}
          </div>
        )}
      </div>
    </div>
  );
};

Rocket.propTypes = {
  id: PropTypes.number,
  rocket_name: PropTypes.string,
  description: PropTypes.string,
  flickr_images: PropTypes.arrayOf(PropTypes.string),
  reserved: PropTypes.bool,
};

export default Rocket;
