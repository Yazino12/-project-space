import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions } from '../Redux/Missions/missions';
import Mission from './Mission';

const Missions = () => {
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    if (missions.length === 0) dispatch(fetchMissions());
  }, [dispatch]);

  return (
    <section className="missions-section">
      <div className="missions">
        <div className="container">
          <div className="missions-header-section">
            <p className="mission bold">Mission</p>
            <p className="mission-description bold">Description</p>
            <p className="active-div bold">Status</p>
          </div>
          {missions.map((item) => (
            <Mission
              id={item.mission_id}
              name={item.mission_name}
              description={item.description}
              key={item.mission_id}
              member={item.member}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Missions;
