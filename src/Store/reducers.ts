import {combineReducers} from 'redux';
import WheatherReducer from './Wheather/reducers';
import TeleportReducer from './Teleport/reducers';

export default combineReducers({
  weather: WheatherReducer,
  teleport: TeleportReducer,
});
