const link = 'https://api.spacexdata.com/v3/rockets';

const LOADROCKETS = 'LOADROCKETS';

//REDUCERS
const rocketsReducer = (state = [], action) => {
  switch (action.type) {
    case LOADROCKETS:
      return [...state, action.playload];
    default:
      return state;
  }
};

// ACTIONS
export const fetchRockets = () => async (dispatch) => {
  const response = await fetch(link);
  const data = await response.json();
  const rockets = [];
  data.forEach((item) => {
    const rocket = {
      id: item.id,
      rocket_name: item.rocket_name,
      rocket_type: item.rocket_type,
      flickr_images: [...item.flickr_images],
    };
    rockets.push(rocket);
  });
  dispatch({
    type: LOADROCKETS,
    playload: rockets,
  });
};

export default rocketsReducer;
