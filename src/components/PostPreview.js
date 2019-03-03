import React from 'react';
import { Link } from 'react-router-dom';

const PostPreview = (props) => {
  const {title, body, id} = props;
  return (
    <div className="postPreview">
      <h3 className="postPreview__title text firstUpper">{title}</h3>
      <p className="postPreview__date text">
        MARCH 2, 2016
        <span/>
        TRAVEL
      </p>
      <p className="postPreview__text text firstUpper">
        {body}
      </p>
      <Link to={`/posts/${id}`} className="btn postPreview__btn">Continue reading</Link>
    </div>
  );
};

export default PostPreview;
