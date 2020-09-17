import { createStore, applyMiddleware } from "redux";
import citiesReducer from "./reducers/cities";
import thunk from "redux-thunk";

export const store = createStore(citiesReducer, applyMiddleware(thunk));
