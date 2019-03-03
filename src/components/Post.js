import React from 'react';
import { Link } from 'react-router-dom';
import {getOnePost, getComments, getAuthorInfo} from "../action";
import { connect } from 'react-redux';

import Comment from './Comment';
import PersistentDrawer from './PersistentDrawer';


class Post extends React.Component {

  componentDidMount() {
    this.props.getOnePost(this.props.match.params.id);
    this.props.getComments(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.onePost.userId !== this.props.onePost.userId) {
      this.props.getAuthorInfo(nextProps.onePost.userId);
    }
  }

  renderComments = () => {
    return this.props.comments.map(comment => <Comment key={comment.id} {...comment}/>)
  };

  render() {
    const {title, body} = this.props.onePost;
    const {author} = this.props;

    return (
      <PersistentDrawer>
        <div className="post">
          <h2 className="post__title text firstUpper">{title}</h2>
          <p className="postPreview__date post__date text">
            MARCH 2, 2016
            <span/>
            TRAVEL
          </p>
          <div className="post__separate"/>

          <p className="post__text text firstUpper">
            {body}
          </p>

          <div className="comments">
            <p className="comments__title text">Comments</p>
            {this.renderComments()}
          </div>

          <p className="comments__title author__title text">About author</p>
          <ul className="author">
            <li className="author__item text">{author.username}</li>
            <li className="author__item text">{author.name}</li>
            <li className="author__item text"><a href={`mailto:${author.email}`}>{author.email}</a></li>
            <li className="author__item text"><a href={`tel:${author.phone}`}>{author.phone}</a></li>
            <li className="author__item text"><a href={author.website}>{author.website}</a></li>
          </ul>

          <Link to="/" className="btn btn__more post__btn">View all posts</Link>
        </div>
      </PersistentDrawer>
    );
  }
}

const mapStateToProps = ({posts}) => {
  return {
    onePost: posts.onePost,
    comments: posts.comments,
    author: posts.author
  }
};

export default connect(mapStateToProps, {getOnePost, getComments, getAuthorInfo})(Post);
