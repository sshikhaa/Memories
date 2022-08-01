//A REDUCER is a functions equal to a func that accepts a state and also it accepts the action then based on the action type we do some logic
import { FETCH_ALL , CREATE, UPDATE, DELETE } from "../constants/actionTypes";

export default (posts = [] , action ) => {
    switch(action.type){
        case DELETE : 
            return posts.filter((post) => post._id !== action.payload );
        case UPDATE :
            return posts.map((post) => post._id === action.payload._id ? action.payload : post );

        case FETCH_ALL:
            return action.payload;
        case CREATE :
            return [...posts , action.payload];
        default :
            return posts;
    }
}