const initialState = {
  posts: [],
  post: {},
  comments: []
};
let newPost;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_POSTS':
      return {
        posts: action.payload
      };
    case 'ADD_POST':
      newPost = state.posts.concat(action.payload);
      return {
        posts: newPost
      };
    case 'DELETE_POST':
      newPost = state.posts.filter(item => {
        return item.id !== action.payload;
      });
      return {
        posts: newPost
      };
    case 'UPDATE_POST':
      newPost = Object.assign({}, state);
      newPost.posts = newPost.posts.slice();
      newPost.posts[action.payload.i] = Object.assign(
        {},
        newPost.posts[action.payload.i]
      );
      newPost.posts[action.payload.i].title = action.payload.title;
      newPost.posts[action.payload.i].body = action.payload.body;
      return {
        posts: newPost.posts
      };
    case 'ADD_COMMENT_POST':
      newPost = state.comments.concat(action.payload);
      return {
        ...state,
        comments: newPost
      };
    case 'GET_CURRENT_POST':
      return {
        post: action.payload,
        comments: action.payload.comments
      };
    default:
      return state;
  }
};

export default reducer;
