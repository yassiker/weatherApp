import {take, put, call} from 'redux-saga/effects';
import Actions from './actions';

export default (api: any) => {
  function* worker() {
    try {
      const response = yield call(api.getCityForcast);
      yield put(Actions.getCityForecastSuccessful(response.data));
    } catch (error) {
      yield put(Actions.getCityForecastFailure(true));
    }
  }

  function* watcher() {
    while (true) {
      yield take(Actions.GET_CITY_FORECAST_REQUEST);
      yield call(worker);
    }
  }

  return {
    watcher,
    worker,
  };
};
