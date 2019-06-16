import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
const DeleteBtn = styled.button`
  border-radius: 8px;
  background-color: rgba(72, 72, 70, 0.22);
  outline: none;
  border: none;
  font-weight: 600;
  padding: 0.6rem;
  margin-right: 0.5rem;
  font-size: 1rem;
  letter-spacing: 0.5px;
  color: #484846;
  cursor: pointer;
`;

const UpdateBtn = styled.button`
  border-radius: 8px;
  background-color: lightblue;
  outline: none;
  border: none;
  padding: 0.6rem;
  margin-right: 0.5rem;
  font-size: 1rem;
  letter-spacing: 0.5px;
  color: #484846;
  cursor: pointer;
  font-weight: 600;
`;
const SaveBtn = styled.button`
  border-radius: 8px;
  background-image: linear-gradient(97deg, #c1b8e0, #8e82bd);
  outline: none;
  border: none;
  padding: 0.6rem;
  margin-right: 0.5rem;
  font-size: 1rem;
  letter-spacing: 0.5px;
  color: #484846;
  cursor: pointer;
  font-weight: 600;
`;

const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: auto;
  padding: 10px;
  margin: 0 0 1px 0;
  outline: 0;
  border-style: solid;
  border-bottom-width: 1px;
  border-color: transparent;
  border-bottom-color: rgba(40, 50, 78, 0.15);
  margin-bottom: 0.5rem;
`;
const Textarea = styled.textarea`
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: auto;
  padding: 0.8rem;
  margin: 0 0 1px 0;
  outline: 0;
  border-style: solid;
  border-bottom-width: 1px;
  border-color: transparent;
  border-bottom-color: rgba(40, 50, 78, 0.15);
  margin-bottom: 0.5rem;
  resize: none;
  min-height: 8rem;
  margin-bottom: 1rem;
`;
const PostsListItem = ({
  id,
  title,
  author,
  body,
  deleteItem,
  updatePost,
  update,
  openUpdatePanel,
  handleInput,
  handleTextarea,
  valueTitle,
  valueBody
}) => {
  let PostComp;
  if (update !== id) {
    PostComp = (
      <Link to={`/details/${id}`}>
        <Title>{title}</Title>
        <div>
          <span>{author}</span>
        </div>
        <Content>{body}</Content>
      </Link>
    );
  } else {
    PostComp = (
      <div>
        <Input value={valueTitle} onChange={handleInput} />
        <div>
          <span>{author}</span>
        </div>
        <Textarea value={valueBody} onChange={handleTextarea} />
      </div>
    );
  }
  return (
    <PostItem>
      {PostComp}
      <div>
        <DeleteBtn type="button" onClick={deleteItem}>
          Удалить запись
        </DeleteBtn>
        <UpdateBtn type="button" onClick={openUpdatePanel}>
          Редактировать запись
        </UpdateBtn>
        <SaveBtn type="button" onClick={updatePost}>
          Сохранить изменения
        </SaveBtn>
      </div>
    </PostItem>
  );
};

export default PostsListItem;
