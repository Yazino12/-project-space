import React from 'react';
import PropTypes from 'prop-types';

const Mission = (props) => {
  const { id, name, description, member } = props;

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

Mission.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  member: PropTypes.bool.isRequired,
};

export default Mission;
