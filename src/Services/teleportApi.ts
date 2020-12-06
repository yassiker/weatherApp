import apisauce from 'apisauce';
import {TELEPORT_API} from './config';

const create = (baseURL = TELEPORT_API) => {
  const api = apisauce.create({
    baseURL,
    headers: {
      'X-Auth-Token': '23ad6dfc6f5b4cdebde0a3232d901dc7',
    },
  });

  const setBaseURL = (baseUrl) => {
    api.setBaseURL(baseUrl);
  };

  const getCitiesByName = () => {
    return api.get('?search=berl').then((response) => {
      return response;
    });
  };

  //
  return {
    setBaseURL,
    getCitiesByName,
  };
};

// let's return back our create method as the default.
export default {
  create,
};
