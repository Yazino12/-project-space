import React from 'react';
import PropTypes from 'prop-types';

import { joinMission } from '../Redux/Missions/missions';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { leaveMission } from '../Redux/Missions/missions';

const Mission = (props) => {
  const { id, name, description, member } = props;

  return (
    <div className={member ? 'mission-div joined' : 'mission-div'}>
      <p className="mission bold">{name}</p>
      <p className="mission-description about">{description}</p>
      <div className="active-div" id={id}>
        <button className={member ? 'status-btn member' : 'status-btn'}>
          {member ? 'Active Member' : 'Not a member'}
        </button>
      </div>
      <div className="status-div">
        {member ? (
          <button
            className="join-btn leave-btn"
            onClick={() => dispatch(leaveMission(id))}
          >
            Leave Mission
          </button>
        ) : (
          <button
            className="join-btn"
            id={id}
            onClick={() => dispatch(joinMission(id))}
          >
            Join mission
          </button>
        )}
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
