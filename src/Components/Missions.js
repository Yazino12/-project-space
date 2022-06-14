import React from 'react';
import { fetchMissions } from '../Redux/Missions/missions';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import Mission from './Mission';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions);
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
