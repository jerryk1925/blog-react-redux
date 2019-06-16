import PostServices from '../../services/PostServices';
import CommentServices from '../../services/CommentServices';

const fetchPosts = () => {
  return async dispatch => {
    try {
      const res = await PostServices.getPosts();
      const payload = res.data;
      dispatch({ type: 'GET_POSTS', payload });
      return res;
    } catch (error) {
      return error;
    }
  };
};

const fetchCreatePosts = body => {
  return async dispatch => {
    try {
      const res = await PostServices.createPost(body);
      const payload = res.data;
      dispatch({ type: 'ADD_POST', payload });
      return res;
    } catch (error) {
      return error;
    }
  };
};

const fetchDeletePost = body => {
  return async dispatch => {
    try {
      const res = await PostServices.deletePost(body);
      dispatch({ type: 'DELETE_POST', payload: body });
      return res;
    } catch (error) {
      return error;
    }
  };
};

const fetchUpdatePost = body => {
  return async dispatch => {
    try {
      const res = await PostServices.updatePost(body);
      dispatch({ type: 'UPDATE_POST', payload: body });
      return res;
    } catch (error) {
      return error;
    }
  };
};

const fetchGetPostWithComments = id => {
  return async dispatch => {
    try {
      const res = await CommentServices.getPostWithComments(id);
      dispatch({ type: 'GET_CURRENT_POST', payload: res.data });
      return res;
    } catch (error) {
      return error;
    }
  };
};

const fetchCreateComment = body => {
  return async dispatch => {
    try {
      const res = await CommentServices.createComment(body);
      dispatch({ type: 'ADD_COMMENT_POST', payload: res.data });
      return res;
    } catch (error) {
      return error;
    }
  };
};

export {
  fetchPosts,
  fetchCreatePosts,
  fetchDeletePost,
  fetchUpdatePost,
  fetchGetPostWithComments,
  fetchCreateComment
};
