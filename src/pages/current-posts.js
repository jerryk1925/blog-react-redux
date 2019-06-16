import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import {
  fetchGetPostWithComments,
  fetchCreateComment
} from '../store/posts/actions';

import Comments from '../components/comments';
import CreateComments from '../containers/create-comments';

const PostItem = styled.div`
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.11);
  border-radius: 0.5rem;
  background-color: #fff;
  cursor: pointer;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  padding: 1.2rem;
  margin-bottom: 1rem;
`;
const Title = styled.div`
  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.9px;
  color: rgb(72, 72, 70);
  margin-bottom: 0.5rem;
  word-break: break-word;
`;
const Content = styled.div`
  color: rgb(51, 51, 51);
  font-size: 18px;
  margin-bottom: 1rem;
  word-break: break-word;
`;
class CurrentPosts extends PureComponent {
  componentDidMount() {
    const { fetchGetPostWithComments, itemId } = this.props;
    fetchGetPostWithComments({ id: itemId });
  }

  render() {
    const { post, comments, itemId } = this.props;
    let postItem;
    if (post !== undefined) {
      postItem = (
        <div>
          <PostItem>
            <Title>{post.title}</Title>
            <Content>{post.body}</Content>
          </PostItem>
          <Comments comments={comments} />
        </div>
      );
    }
    return (
      <div>
        {postItem}
        <div>
          <CreateComments itemId={itemId} />
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ post, comments }) => {
  return {
    post,
    comments
  };
};

export default connect(
  mapStateToProps,
  { fetchGetPostWithComments, fetchCreateComment }
)(CurrentPosts);
