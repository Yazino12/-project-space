import React from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { fetchMissions } from '../Redux/Missions/missions';

const Rockets = () => {
  const dispatch = useDispatch();
  window.addEventListener('load', () => dispatch(fetchMissions()));
  return <div>Rockets</div>;
};

export default Rockets;
