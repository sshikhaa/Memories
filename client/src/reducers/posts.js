// //A REDUCER is a functions equal to a func that accepts a state and also it accepts the action then based on the action type we do some logic
// import { FETCH_ALL , CREATE, UPDATE, DELETE } from "../constants/actionTypes";

// export default (posts = [] , action ) => {
//     switch(action.type){
//         case DELETE : 
//             return posts.filter((post) => post._id !== action.payload );
//         case UPDATE :
//             return posts.map((post) => post._id === action.payload._id ? action.payload : post );

//         case FETCH_ALL:
//             return action.payload;
//         case CREATE :
//             return [...posts , action.payload];
//         default :
//             return posts;
//     }
// }

import { FETCH_ALL, FETCH_BY_SEARCH, FETCH_BY_CREATOR, FETCH_POST, CREATE, UPDATE, DELETE, LIKE, COMMENT } from '../constants/actionTypes';

export default (state = { isLoading: true, posts: [] }, action) => {
  switch (action.type) {
    case 'START_LOADING':
      return { ...state, isLoading: true };
    case 'END_LOADING':
      return { ...state, isLoading: false };
    case FETCH_ALL:
      return {
        ...state,
        posts: action.payload.data,
        currentPage: action.payload.currentPage,
        numberOfPages: action.payload.numberOfPages,
      };
    case FETCH_BY_SEARCH:
    case FETCH_BY_CREATOR:
      return { ...state, posts: action.payload.data };
    case FETCH_POST:
      return { ...state, post: action.payload.post };
    case LIKE:
      return { ...state, posts: state.posts.map((post) => (post._id === action.payload._id ? action.payload : post)) };
    case COMMENT:
      return {
        ...state,
        posts: state.posts.map((post) => {
          if (post._id === +action.payload._id) {
            return action.payload;
          }
          return post;
        }),
      };
    case CREATE:
      return { ...state, posts: [...state.posts, action.payload] };
    case UPDATE:
      return { ...state, posts: state.posts.map((post) => (post._id === action.payload._id ? action.payload : post)) };
    case DELETE:
      return { ...state, posts: state.posts.filter((post) => post._id !== action.payload) };
    default:
      return state;
  }
};