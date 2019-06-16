import React from 'react';
import styled from 'styled-components';
import CommentsListItem from './comments-list-item';

const CommentsWrapper = styled.div`
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.11);
  border-radius: 0.5rem;
  background-color: #fff;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  padding: 1.2rem;
  margin-bottom: 1rem;
`;

const Comments = ({ comments }) => {
  let commentsComponents = [];
  if (comments !== undefined && comments.length > 0) {
    commentsComponents = comments.map(({ id, ...arr }) => {
      return <CommentsListItem {...arr} key={id} />;
    });
  } else {
    commentsComponents = <div>Комментарий нет</div>;
  }
  return <CommentsWrapper>{commentsComponents}</CommentsWrapper>;
};

export default Comments;
