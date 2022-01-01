import {createStore} from "redux";
import rootReducer from './Reducers/RootReducer/root.reduser';

const store = createStore(rootReducer);

export default store;