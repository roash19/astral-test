import React from 'react';
import { connect } from 'react-redux';
import { getPosts } from "../action";

import PersistentDrawer from './PersistentDrawer';
import PostPreview from './PostPreview';


class Home extends React.Component {
  state = {
    end: 15
  };

  componentWillMount() {
    this.props.getPosts(this.state.end);
  }

  renderArticles = () => {
    return this.props.posts.posts.map(article => <PostPreview key={article.id} {...article}/>)
  };

  viewMore = () => {
    let end = this.state.end + 15;
    this.props.getPosts(end);
    this.setState({end})
  };


  render() {
    return (
      <PersistentDrawer>
        <div className="home">
          {this.renderArticles()}
          <button className="btn btn__more" onClick={() => this.viewMore()}>More posts</button>
        </div>
      </PersistentDrawer>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
};


export default connect(mapStateToProps, {getPosts})(Home);
