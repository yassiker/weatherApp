import {createSelector} from 'reselect';

const selectDomain = () => (state: any) => (state ? state.teleport : []);

export const selectCities = () =>
  createSelector(selectDomain(), (store) => {
    return store ? store.cities : [];
  });
