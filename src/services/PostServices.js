import Api from './Api';

export default {
  getPosts() {
    return Api().get('posts');
  },
  createPost({ title, body }) {
    const data = {
      title,
      body
    };
    return Api().post('posts', data);
  },
  deletePost(id) {
    return Api().delete(`posts/${id}`);
  },
  updatePost({ id, title, body }) {
    const data = {
      title,
      body
    };
    return Api().put(`posts/${id}`, data);
  }
};
