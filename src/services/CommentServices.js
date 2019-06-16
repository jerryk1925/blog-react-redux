import Api from './Api';

export default {
  getPostWithComments({ id }) {
    return Api().get(`posts/${id}?_embed=comments`);
  },
  createComment({ postId, body }) {
    const data = {
      postId,
      body
    };
    return Api().post('comments', data);
  }
};
