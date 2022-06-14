import React from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { fetchRockets } from '../Redux/Rockets/rockets';

const Rockets = () => {
  const dispatch = useDispatch();

  window.addEventListener('load', () => dispatch(fetchRockets()));

  return <div>Rockets</div>;
};

export default Rockets;
