import axios from 'axios';
import * as types from './types';

export const fetchComments = () => (
  (dispatch) => {
    dispatch({
      type: types.FETCH_COMMENTS,
      payload: axios.get('http://jsonplaceholder.typicode.com/comments'),
    });
  }
);

export const setCommentActive = id => (
  (dispatch) => {
    dispatch({
      type: types.TOGGLE_COMMENT_ACTIVE,
      payload: id,
    });
  }
);
