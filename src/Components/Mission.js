import React from 'react';

const Mission = ({ name, id, description, member }) => {
  return (
    <div className="mission-div">
      <p className="mission bold">{name}</p>
      <p className="mission-description about">{description}</p>
      <div className="active-div" id={id}>
        <button className="status-btn">Not a member</button>
      </div>
      <div className="status-div">
        <button className="join-btn">Join mission</button>
      </div>
    </div>
  );
};

export default Mission;
