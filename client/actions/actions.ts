/* eslint-disable import/prefer-default-export */
// import actionType constants
import * as types from '../constants/actionTypes';

export const currentSel = (country: string) => ({
  type: types.SELECT_COUNTRY,
  payload: country,
});




