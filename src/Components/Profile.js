import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const rockets = useSelector((state) => state.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved === true);

  return (
    <div className="profile-container">
      <div className="joined-missions">
        <h2>My Missions</h2>
      </div>
      <div className="reserved-rockets">
        <h2>My Rockets</h2>
        {reservedRockets.map((rocket) => {
          return (
            <p key={rocket.id} className="reserved-rocket">
              {rocket.rocket_name}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Profile;
