import { createStore, combineReducers } from 'redux';
import peopleReducer from '../reducers/reducers';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: { peopleReducer }
})

export type IRootState = ReturnType<typeof store.getState>
export default store;