import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../Redux/Rockets/rockets';
import Rocket from './Rocket';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    if (rockets.length === 0) dispatch(fetchRockets());
  }, [dispatch]);

  return (
    <div className="rockets-container">
      {rockets.map((item) => (
        <Rocket
          id={item.id}
          rocket_name={item.rocket_name}
          description={item.description}
          flickr_images={item.flickr_images}
          key={item.id}
          reserved={item.reserved}
        />
      ))}
    </div>
  );
};

export default Rockets;
