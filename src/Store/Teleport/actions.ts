const GET_CITY_BY_NAME_REQUEST = 'GET_CITY_BY_NAME_REQUEST';
const GET_CITY_BY_NAME_SUCCESS = 'GET_CITY_BY_NAME_SUCCESS';
const GET_CITY_BY_NAME_FAILURE = 'GET_CITY_BY_NAME_FAILURE';

const getCitiesRequest = () => ({
  type: GET_CITY_BY_NAME_REQUEST,
});

const getCitiesSuccess = (cities: any) => ({
  type: GET_CITY_BY_NAME_SUCCESS,
  cities,
});

const getCitiesFailure = (error: boolean) => ({
  type: GET_CITY_BY_NAME_FAILURE,
  error,
});

export default {
  // Types
  GET_CITY_BY_NAME_REQUEST,
  GET_CITY_BY_NAME_SUCCESS,
  GET_CITY_BY_NAME_FAILURE,

  // Actions
  getCitiesRequest,
  getCitiesSuccess,
  getCitiesFailure,
};
