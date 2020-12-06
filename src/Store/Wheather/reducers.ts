import Immutable from 'seamless-immutable';
import {createReducer} from 'reduxsauce';
import Actions from './actions';

export type Item = {};

const INITIAL_STATE = Immutable({
  cityForecasts: undefined,
  fetching: false,
  error: false,
});

const getCityForecastRequest = (state: any) => {
  return {...state, fetching: true, error: false};
};

const getCityForecastSuccess = (state: any, action: any) => {
  return {
    ...state,
    cityForecasts: action.cityForecasts,
    fetching: false,
    error: false,
  };
};

const getCityForecastFailure = (state: any, action: any) => {
  return {
    ...state,
    error: action.error,
    fetching: false,
  };
};

const ACTION_HANDLERS = {
  [Actions.GET_CITY_FORECAST_REQUEST]: getCityForecastRequest,
  [Actions.GET_CITY_FORECAST_SUCEESSFUL]: getCityForecastSuccess,
  [Actions.GET_CITY_FORECAST_FAILURE]: getCityForecastFailure,
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
