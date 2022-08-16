 import { configureStore } from "@reduxjs/toolkit";
 import counterReducer from '../features/counter/counterSlice';
 import bioReducer from '../features/bio/bioSlice';

 export default configureStore({
    reducer: {
        counter: counterReducer,
        bio: bioReducer
    } 
 })