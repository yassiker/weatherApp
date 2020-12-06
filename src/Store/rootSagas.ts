import {fork} from 'redux-saga/effects';
import WEATHER_OPEN_API from '../Services/api';
import TELEPORT_API from '../Services/teleportApi';
import WheatherSagas from './Wheather/sagas';
import CitiesSagas from './Teleport/sagas';

const weatherApi = WEATHER_OPEN_API.create();
const teleportApi = TELEPORT_API.create();

// start the daemons
export default function* root() {
  yield fork(WheatherSagas(weatherApi).watcher);
  yield fork(CitiesSagas(teleportApi).watcher);
}
