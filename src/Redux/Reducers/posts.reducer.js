import {GET_POSTS,ADD_POSTS,DELETE_POSTS} from "../Actions/posts.action";

const initialState = {
    posts:  [
        {id: Math.random(), post: "aaa"},
        {id: Math.random(), post: "bbb"}
    ],
    loading: true,
}
const postsReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_POSTS:
            return {
                ...state,
                posts: [...state.posts,action.payload]
            }
        case DELETE_POSTS:
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.payload)
            }
        default:
            return state
    }
}
export default postsReducer;