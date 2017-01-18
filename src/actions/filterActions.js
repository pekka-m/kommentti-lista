import * as types from './types';

export const setFilter = filter => (
  (dispatch) => {
    dispatch({
      type: types.SET_FILTERING,
    });
    dispatch({
      type: types.SET_FILTER,
      payload: filter,
      meta: {
        debounce: {
          time: 700,
          key: types.SET_FILTER,
        },
      },
    });
  }
);
