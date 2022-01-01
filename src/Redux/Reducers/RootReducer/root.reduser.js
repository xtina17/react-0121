import {combineReducers} from "redux";
import postsReducer from "../posts.reducer";
import countReducer from "../count.reducer"

const rootReducer = combineReducers({
    postsReducer,
    countReducer
})
export default rootReducer;