import React from 'react';

const MyComponent = (props) => {
  const {name, body, email} = props;
  return (
    <div className="comment">
      <div className="comment__top">
        <p className="comment__name text firstUpper">{name}</p>
        <a href={`mailto:${email}`} className="comment__email text">{email}</a>
      </div>
      <p className="comment__body text firstUpper">{body}</p>
    </div>
  );
};

export default MyComponent;
