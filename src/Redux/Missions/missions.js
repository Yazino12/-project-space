const link = 'https://api.spacexdata.com/v3/missions';

//REDUCERS
const missionsReducer = (state = [], action) => {
  switch (action.type) {
    case 'loadMissions':
      state = action.playload;
      return state;
    case 'join':
      const id = action.playload;
      const newState = state.map((mission) => {
        if (mission.mission_id !== id) return mission;
        return { ...mission, member: true };
      });
      return newState;
    case 'leave':
      const key = action.playload;
      const leaveMission = state.map((mission) => {
        if (mission.mission_id !== key) return mission;
        return { ...mission, member: false };
      });
      return leaveMission;
    default:
      return state;
  }
};

// ACTIONS
export const fetchMissions = () => async (dispatch) => {
  const response = await fetch(link);
  const data = await response.json();
  const missions = [];
  data.forEach((item) => {
    const mission = {
      mission_id: item.mission_id,
      mission_name: item.mission_name,
      description: item.description,
      member: false,
    };
    missions.push(mission);
  });
  dispatch({
    type: 'loadMissions',
    playload: missions,
  });
};

export const joinMission = (id) => {
  return {
    type: 'join',
    playload: id,
  };
};

export const leaveMission = (id) => {
  return {
    type: 'leave',
    playload: id,
  };
};
export default missionsReducer;
