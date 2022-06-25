import { combineReducers, configureStore } from "@reduxjs/toolkit";

let reducers = combineReducers({

    profilePage: profileReducer,
    messagePage: dialogsReducer,
    sidebar: sidebarReducer
});

let store = configureStore(reducers);

export default store;