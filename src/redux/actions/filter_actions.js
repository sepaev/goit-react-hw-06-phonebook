import types from '../types';

export const makeSearch = e => {
  console.log(e);
  return {
    type: types.CHANGE_FILTER,
    payload: e.target.value.trim().toLowerCase(),
  };
};
