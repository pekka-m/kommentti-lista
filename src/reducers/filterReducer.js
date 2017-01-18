import * as types from '../actions/types';

const initialState = {
  filter: '',
  filtering: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SET_FILTER:
      return { filter: payload, filtering: false };
    case types.SET_FILTERING:
      return { ...state, filtering: true };
    default:
      return state;
  }
};
