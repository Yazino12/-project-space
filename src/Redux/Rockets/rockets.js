const link = 'https://api.spacexdata.com/v3/rockets';

const LOADROCKETS = 'LOADROCKETS';
const RESERVEROCKET = 'RESERVEROCKET';

//REDUCERS
const rocketsReducer = (state = [], action) => {
  switch (action.type) {
    case LOADROCKETS:
      return action.playload;
    case RESERVEROCKET:
      const id = action.playload;
      const newState = state.map((rocket) => {
        if (rocket.id !== id) return rocket;
        return { ...rocket, reserved: true };
      });
      return newState;
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
      description: item.description,
      flickr_images: [...item.flickr_images],
    };
    rockets.push(rocket);
  });
  dispatch({
    type: LOADROCKETS,
    playload: rockets,
  });
};

export const reserveRocket = (id) => {
  return {
    type: RESERVEROCKET,
    playload: id,
  };
};

export default rocketsReducer;
