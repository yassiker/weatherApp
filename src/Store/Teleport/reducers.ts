import Immutable from 'seamless-immutable';
import {createReducer} from 'reduxsauce';
import Actions from './actions';

export type Item = {};

const INITIAL_STATE = Immutable({
  cities: undefined,
  fetching: false,
  error: false,
});

const getCitiesRequest = (state: any) => {
  return {...state, fetching: true, error: false};
};

const getCitiesSuccess = (state: any, action: any) => {
  return {
    ...state,
    cities: action.cities,
    fetching: false,
    error: false,
  };
};

const getCitiesFailure = (state: any, action: any) => {
  return {
    ...state,
    error: action.error,
    fetching: false,
  };
};

const ACTION_HANDLERS = {
  [Actions.GET_CITY_BY_NAME_REQUEST]: getCitiesRequest,
  [Actions.GET_CITY_BY_NAME_SUCCESS]: getCitiesSuccess,
  [Actions.GET_CITY_BY_NAME_FAILURE]: getCitiesFailure,
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
