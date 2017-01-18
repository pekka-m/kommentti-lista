import React from 'react';
import Comment from './Comment';

const Comments = (props) => {
  const renderComments = (comments) => {
    if (comments) {
      return (
        comments.map(comment => <Comment key={comment.id} {...comment} onClick={() => props.onClick(comment.id)} />)
      );
    }
    return null;
  };
  return (
    <div style={{ marginTop: 10 }}>
      {renderComments(props.comments)}
    </div>
  );
};

export default Comments;
