import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const rockets = useSelector((state) => state.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved === true);
  const missions = useSelector((state) => state.missions).filter(
    (mission) => mission.member === true
  );

  return (
    <div className="profile-container">
      <div className="missions-profile">
        <h2>My Missions</h2>
        <div className={missions.length > 0 ? 'profile-rocket-div' : 'none'}>
          {missions.length > 0
            ? missions.map((mission) => (
                <p key={mission.mission_id} className="mission-profile">
                  {mission.mission_name}
                </p>
              ))
            : 'No missions booked'}
        </div>
      </div>
      <div className="rockets-profile">
        <h2>My Rockets</h2>
        <div
          className={reservedRockets.length > 0 ? 'profile-rocket-div' : 'none'}
        >
          {reservedRockets.length > 0
            ? reservedRockets.map((rocket) => {
                return (
                  <p key={rocket.id} className="rocket-profile">
                    {rocket.rocket_name}
                  </p>
                );
              })
            : 'No rockets reserved'}
        </div>
      </div>
    </div>
  );
};

export default Profile;
