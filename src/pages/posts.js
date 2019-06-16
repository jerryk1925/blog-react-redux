import React from 'react';
import styled from 'styled-components';

import PostsList from '../containers/posts-list';

const Wrapper = styled.div`
  background-color: #f6f7f9;
`;
const Posts = () => {
  return (
    <Wrapper>
      <PostsList />
    </Wrapper>
  );
};

export default Posts;
