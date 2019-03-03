import axios from 'axios';

export function getPosts (end) {
  const request = axios.get(`http://jsonplaceholder.typicode.com/posts?_start=0&_end=${end}`)
    .then(response => response.data);

  return {
    type: 'GET_POSTS',
    payload: request
  }
}

export function getOnePost (id) {
  const request = axios.get(`http://jsonplaceholder.typicode.com/posts/${id}`)
    .then(response => response.data);

  return {
    type: 'GET_ONE_POSTS',
    payload: request
  }
}

export function getComments (postId) {
  const request = axios.get(`http://jsonplaceholder.typicode.com/comments?postId=${postId}`)
    .then(response => response.data);

  return {
    type: 'GET_COMMENTS',
    payload: request
  }
}

export function getAuthorInfo (userId) {
  const request = axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response => response.data);

  return {
    type: 'GET_AUTHOR_INFO',
    payload: request
  }
}

