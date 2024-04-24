import { combineReducers } from "@reduxjs/toolkit";
import navReducer from "@/slices/navSlice";
const rootReducer = combineReducers({
    nav: navReducer
});

export default rootReducer;
