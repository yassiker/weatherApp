const GET_CITY_FORECAST_REQUEST = 'GET_CITY_FORECAST_REQUEST';
const GET_CITY_FORECAST_SUCEESSFUL = 'GET_CITY_FORECAST_SUCEESSFUL';
const GET_CITY_FORECAST_FAILURE = 'GET_CITY_FORECAST_FAILURE';

const getCityForecastRequest = () => ({
  type: GET_CITY_FORECAST_REQUEST,
});

const getCityForecastSuccessful = (cityForecasts: any) => ({
  type: GET_CITY_FORECAST_SUCEESSFUL,
  cityForecasts,
});

const getCityForecastFailure = (error: boolean) => ({
  type: GET_CITY_FORECAST_FAILURE,
  error,
});

export default {
  // Types
  GET_CITY_FORECAST_REQUEST,
  GET_CITY_FORECAST_SUCEESSFUL,
  GET_CITY_FORECAST_FAILURE,

  // Actions
  getCityForecastRequest,
  getCityForecastSuccessful,
  getCityForecastFailure,
};
