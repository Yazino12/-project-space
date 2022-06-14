import React from 'react';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { fetchMissions } from '../Redux/Missions/missions';

const Missions = () => {
  const dispatch = useDispatch();
  window.addEventListener('load', () => dispatch(fetchMissions()));

  <div>Missions</div>;
};

export default Missions;
