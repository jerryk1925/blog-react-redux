import axios from 'axios';

export default () => {
  return axios.create({
    baseURL: 'https://simple-blog-api.crew.red/',
    withCredentials: false,
    headers: {
      'Access-Control-Allow-Origin': '*',
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  });
};
