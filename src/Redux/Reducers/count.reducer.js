import {COUNT_DOWN, COUNT_UP} from "../Actions/count.action";

const initialState = {
    count: 1
}
const countReducer = (state = initialState, action) => {
    switch (action.type){
        case COUNT_UP:
            return {
                ...state,
                count: state.count + 1
            }
        case COUNT_DOWN:
            return {
                ...state,
                count: state.count - 1
            }
        default:
            return state

    }
}
export default countReducer;