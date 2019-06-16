import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import {
  fetchPosts,
  fetchDeletePost,
  fetchUpdatePost
} from '../store/posts/actions';

import PostsListItem from '../components/posts-list-item';
import CreatePost from './create-post';

class PostsList extends PureComponent {
  state = {
    update: String,
    titleUpdatePost: String,
    bodyUpdatePost: String
  };

  componentDidMount() {
    // eslint-disable-next-line no-shadow
    const { fetchPosts } = this.props;
    fetchPosts();
  }

  deletePost = id => {
    const { fetchDeletePost } = this.props;
    fetchDeletePost(id);
  };

  toggleUpdate = (id, title, body) => {
    this.setState({
      update: id,
      titleUpdatePost: title,
      bodyUpdatePost: body
    });
  };

  updateTitle = e => {
    this.setState({
      titleUpdatePost: e.target.value
    });
  };

  updateBody = event => {
    this.setState({
      bodyUpdatePost: event.target.value
    });
  };

  updatePost = (id, i) => {
    const { fetchUpdatePost } = this.props;
    const { titleUpdatePost, bodyUpdatePost } = this.state;
    fetchUpdatePost({ id, title: titleUpdatePost, body: bodyUpdatePost, i });
    this.setState({
      update: null
    });
  };

  render() {
    const { posts } = this.props;
    const { update, titleUpdatePost, bodyUpdatePost } = this.state;
    let PostList;
    if (posts !== undefined) {
      PostList = posts.map(({ id, ...arr }, i) => {
        return (
          <PostsListItem
            {...arr}
            key={id}
            id={id}
            deleteItem={() => this.deletePost(id)}
            openUpdatePanel={() => this.toggleUpdate(id, arr.title, arr.body)}
            update={update}
            handleInput={this.updateTitle}
            handleTextarea={this.updateBody}
            updatePost={() => this.updatePost(id, i)}
            valueTitle={titleUpdatePost}
            valueBody={bodyUpdatePost}
          />
        );
      });
    }

    return (
      <div>
        {PostList}
        <CreatePost />
      </div>
    );
  }
}

const mapStateToProps = ({ posts }) => {
  return {
    posts
  };
};
export default connect(
  mapStateToProps,
  { fetchPosts, fetchDeletePost, fetchUpdatePost }
)(PostsList);
