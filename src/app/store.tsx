import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { busketReducer } from "./counterSlice/counterSlice";

const rootReducer = combineReducers({
    busket: busketReducer
});

export const store = configureStore({
    reducer: rootReducer
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch