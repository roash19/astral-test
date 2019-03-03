const initialState = {
  posts: [],
  comments: [],
  onePost: [],
  author: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "GET_POSTS" :
      return {
        ...state, posts: action.payload
      };

      case "GET_ONE_POSTS" :
      return {
        ...state, onePost: action.payload
      };

    case "GET_COMMENTS" :
      return {
        ...state, comments: action.payload
      };

    case "GET_AUTHOR_INFO" :
      return {
        ...state, author: action.payload
      };

    default:
      return state
  }
}