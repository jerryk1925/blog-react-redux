import React from 'react';
import styled from 'styled-components';

const CommentsItemWrapper = styled.div`
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.11);
  border-radius: 0.5rem;
  background-color: #fff;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  padding: 1.2rem;
  margin-bottom: 1rem;
`;

const CommentsListItem = ({ body }) => {
  return <CommentsItemWrapper>{body}</CommentsItemWrapper>;
};

export default CommentsListItem;
