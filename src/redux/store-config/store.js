import { combineReducers, createStore } from "redux";
import reducer from "../reducers/counter";

// const rootReducer = combineReducers({
//   reducer,
// });

const store = createStore(reducer);

export { store };
