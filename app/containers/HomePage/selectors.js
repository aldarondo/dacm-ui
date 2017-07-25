import { createSelector } from 'reselect';

const selectHome = (state) => state.get('home');

const makeSelectContact = () => createSelector(
  selectHome,
  (homeState) => homeState.get('contact')
);

const makeSelectStage = () => createSelector(
  selectHome,
  (homeState) => homeState.get('stage')
);

export {
  selectHome,
  makeSelectContact,
  makeSelectStage,
};
