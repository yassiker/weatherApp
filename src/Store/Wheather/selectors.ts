import {createSelector} from 'reselect';

const selectDomain = () => (state: any) => (state ? state.weather : []);

export const selectCityForecasts = () =>
  createSelector(selectDomain(), (store) => {
    return store ? store.cityForecasts : [];
  });
