import React from 'react';
import faker from 'faker';

const CommentDetail = props => {
  const { avatar, author, date, post } = props;
  return (
    <div>
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={avatar} />
        </a>
        <div className="content">
          <a href="/" className="author">
            {author}
          </a>
          <div className="metadata">
            <span className="date">{date}</span>
          </div>
          <div className="text">{post}</div>
        </div>
      </div>
    </div>
  );
};

export default CommentDetail;
