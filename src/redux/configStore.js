import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,

} from "redux";

import thunk from "redux-thunk";
import post from "./modules/post";


const rootReducer = combineReducers({ post });
const middlewares = [thunk];
const enhancer = applyMiddleware(...middlewares);
const store = createStore(rootReducer, enhancer);

export default store;
