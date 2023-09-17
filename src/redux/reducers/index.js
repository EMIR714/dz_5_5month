import { combineReducers } from "redux";
import preloaderReducer from "./preloaderReducer";
import userReducer from "./userReducer";

export const rootReducer = combineReducers({
    preloaderReducer,
    userReducer
    
})