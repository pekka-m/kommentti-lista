import React from 'react';
import './Comment.css';

const Comment = props => {
  const active = () => {
    if (props.active) {
      return 'comment-active';
    }
    return 'comment';
  };

  return (
    <button onClick={() => props.onClick()} className={active()}>
      {props.name}
    </button>
  );
};

export default Comment;
