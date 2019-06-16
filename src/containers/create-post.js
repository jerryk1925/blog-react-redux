import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { fetchCreatePosts } from '../store/posts/actions';

const FormItem = styled.div`
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.11);
  border-radius: 0.5rem;
  background-color: #fff;
  cursor: pointer;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  padding: 1.2rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
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
const SaveBtn = styled.button`
  border-radius: 8px;
  background-image: linear-gradient(97deg, #c1b8e0, #8e82bd);
  outline: none;
  border: none;
  padding: 0.6rem;
  font-size: 1rem;
  letter-spacing: 0.5px;
  color: #484846;
  cursor: pointer;
  font-weight: 600;
`;
class CreatePost extends Component {
  state = {
    title: '',
    body: ''
  };

  handlerInput = event => {
    this.setState({
      title: event.target.value
    });
  };

  handlerTextArea = event => {
    this.setState({
      body: event.target.value
    });
  };

  create = () => {
    const { title, body } = this.state;
    const { fetchCreatePosts } = this.props;
    fetchCreatePosts({ title, body });
    this.setState({
      body: '',
      title: ''
    });
  };

  render() {
    const { title, body } = this.state;

    return (
      <div>
        <FormItem>
          <Input type="text" value={title} onChange={this.handlerInput} />
          <Textarea value={body} onChange={this.handlerTextArea} />
          <SaveBtn type="button" onClick={this.create}>
            Cозднать новый пост
          </SaveBtn>
        </FormItem>
      </div>
    );
  }
}

export default connect(
  null,
  { fetchCreatePosts }
)(CreatePost);
