import { combineReducers, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import missionsReducer from './Missions/missions';
import rocketsReducer from './Rockets/rockets';

const rootReducer = combineReducers({
  missions: missionsReducer,
  rockets: rocketsReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk, logger));
