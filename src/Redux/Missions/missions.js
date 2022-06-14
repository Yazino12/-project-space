const link = 'https://api.spacexdata.com/v3/missions';

//REDUCERS
const missionsReducer = (state = [], action) => {
  switch (action.type) {
    case 'loadMissions':
      state = action.playload;
      return state;
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

export default missionsReducer;
