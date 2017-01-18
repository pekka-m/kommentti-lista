import * as types from '../actions/types';

const initialState = {
  fetching: false,
  fetched: false,
  error: null,
  comments: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case `${types.FETCH_COMMENTS}_PENDING`:
      return {
        ...state,
        fetching: true,
        fetched: false,
        error: null,
      };
    case `${types.FETCH_COMMENTS}_FULFILLED`:
      return {
        ...state,
        fetching: false,
        fetched: true,
        error: null,
        comments: payload.data,
      };
    case `${types.FETCH_COMMENTS}_REJECTED`:
      return {
        ...state,
        fetching: false,
        fetched: false,
        error: payload.message,
      };
    case types.TOGGLE_COMMENT_ACTIVE:
      return {
        ...state,
        comments: state.comments.map((comment) => {
          if (comment.id === payload) {
            return { ...comment, active: !comment.active };
          }
          return comment;
        }),
      };
    default:
      return state;
  }
};
