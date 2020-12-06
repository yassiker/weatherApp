import {take, put, call} from 'redux-saga/effects';
import Actions from './actions';

export default (api: any) => {
  function* worker() {
    try {
      const response = yield call(api.getCitiesByName);
      yield put(Actions.getCitiesSuccess(response.data));
    } catch (error) {
      yield put(Actions.getCitiesFailure(true));
    }
  }

  function* watcher() {
    while (true) {
      yield take(Actions.GET_CITY_BY_NAME_REQUEST);
      yield call(worker);
    }
  }

  return {
    watcher,
    worker,
  };
};
